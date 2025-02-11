export interface TransactionData {
  id: string;
  date: string;
  type: 'credit' | 'debit' | 'pix';
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  customer: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: string;
}