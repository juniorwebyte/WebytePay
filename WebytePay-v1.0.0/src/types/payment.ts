// Add to existing types
export interface PaymentLink {
  id: string;
  amount: number;
  description: string;
  payment_url: string;
  status: 'pending' | 'paid' | 'expired';
  customer_name?: string;
  customer_email?: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePaymentLinkRequest {
  amount: number;
  description: string;
  customer_name?: string;
  customer_email?: string;
  expires_in?: number; // in hours
}

export interface CreatePaymentLinkResponse {
  success: boolean;
  data?: PaymentLink;
  error?: string;
}