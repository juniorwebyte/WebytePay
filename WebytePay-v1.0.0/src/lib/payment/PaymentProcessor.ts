import { supabase } from '../supabase';
import { PaymentGateway, PaymentMethod, RiskScore, Transaction } from '../../types/payment';

export class PaymentProcessor {
  private static instance: PaymentProcessor;
  private gateways: PaymentGateway[] = [];
  private currentGatewayIndex = 0;

  private constructor() {
    // Initialize payment gateways in order of preference
    this.gateways = [
      { name: 'stripe', isAvailable: true, dailyLimit: 50000 },
      { name: 'adyen', isAvailable: true, dailyLimit: 50000 },
      { name: 'mercadopago', isAvailable: true, dailyLimit: 30000 },
    ];
  }

  public static getInstance(): PaymentProcessor {
    if (!PaymentProcessor.instance) {
      PaymentProcessor.instance = new PaymentProcessor();
    }
    return PaymentProcessor.instance;
  }

  private async validateKYC(userId: string): Promise<boolean> {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('kyc_status, document_verified')
      .eq('id', userId)
      .single();

    if (error || !profile) return false;
    return profile.kyc_status === 'approved' && profile.document_verified;
  }

  private calculateRiskScore(transaction: Transaction): RiskScore {
    let score = 100; // Start with maximum score

    // Reduce score based on risk factors
    if (transaction.amount > 10000) score -= 20;
    if (!transaction.user.kyc_verified) score -= 30;
    if (transaction.ip_address_changed) score -= 15;
    if (transaction.unusual_time) score -= 10;
    if (transaction.high_frequency) score -= 15;

    return {
      score,
      requiresManualReview: score < 60,
      requires3DS: score < 80,
    };
  }

  private async checkDailyLimit(userId: string): Promise<boolean> {
    const today = new Date().toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('transactions')
      .select('amount')
      .eq('user_id', userId)
      .gte('created_at', today);

    if (error) return false;

    const dailyTotal = data.reduce((sum, tx) => sum + tx.amount, 0);
    return dailyTotal <= 30000;
  }

  private getNextAvailableGateway(): PaymentGateway | null {
    const startIndex = this.currentGatewayIndex;
    
    do {
      const gateway = this.gateways[this.currentGatewayIndex];
      this.currentGatewayIndex = (this.currentGatewayIndex + 1) % this.gateways.length;
      
      if (gateway.isAvailable) {
        return gateway;
      }
    } while (this.currentGatewayIndex !== startIndex);

    return null;
  }

  public async processPayment(transaction: Transaction): Promise<{
    success: boolean;
    message: string;
    transactionId?: string;
  }> {
    try {
      // 1. KYC Validation
      const isKYCValid = await this.validateKYC(transaction.user.id);
      if (!isKYCValid) {
        return {
          success: false,
          message: 'KYC verification required for this transaction.',
        };
      }

      // 2. Daily Limit Check
      const withinLimit = await this.checkDailyLimit(transaction.user.id);
      if (!withinLimit) {
        return {
          success: false,
          message: 'Daily transaction limit exceeded.',
        };
      }

      // 3. Risk Assessment
      const riskScore = this.calculateRiskScore(transaction);
      
      if (riskScore.requiresManualReview) {
        return {
          success: false,
          message: 'Transaction requires manual review.',
        };
      }

      // 4. Gateway Selection and Processing
      const gateway = this.getNextAvailableGateway();
      if (!gateway) {
        return {
          success: false,
          message: 'No payment gateway available.',
        };
      }

      // 5. Process the payment through the selected gateway
      // This is a placeholder for the actual gateway integration
      const paymentResult = await this.processWithGateway(gateway, transaction, riskScore);

      // 6. Record the transaction
      const { data, error } = await supabase
        .from('transactions')
        .insert([
          {
            user_id: transaction.user.id,
            amount: transaction.amount,
            gateway: gateway.name,
            status: paymentResult.success ? 'completed' : 'failed',
            risk_score: riskScore.score,
            payment_method: transaction.paymentMethod,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      return {
        success: paymentResult.success,
        message: paymentResult.message,
        transactionId: data?.id,
      };

    } catch (error) {
      console.error('Payment processing error:', error);
      return {
        success: false,
        message: 'An error occurred while processing the payment.',
      };
    }
  }

  private async processWithGateway(
    gateway: PaymentGateway,
    transaction: Transaction,
    riskScore: RiskScore
  ): Promise<{ success: boolean; message: string }> {
    // This is a placeholder for actual gateway integration
    // In a real implementation, this would integrate with the actual payment gateway APIs
    
    return {
      success: true,
      message: 'Payment processed successfully',
    };
  }
}