export interface Profile {
  id: string;
  full_name: string | null;
  company_name: string | null;
  document_type: 'cpf' | 'cnpj' | null;
  document_number: string | null;
  phone: string | null;
  address: any | null;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Pricing {
  id: string;
  product_id: string;
  name: string;
  description: string | null;
  credit_fee: number;
  debit_fee: number;
  pix_fee: number;
  monthly_fee: number;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}