/*
  # Payment System Optimizations

  1. New Tables
    - transactions
      - Stores all payment transactions
      - Includes risk scoring and gateway information
    - payment_limits
      - Configurable limits for different user tiers
    - kyc_verifications
      - Stores KYC verification status and history
  
  2. Security
    - Enable RLS on all new tables
    - Add policies for proper access control
*/

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  amount decimal(10,2) NOT NULL,
  gateway text NOT NULL,
  status text NOT NULL,
  risk_score integer,
  payment_method text NOT NULL,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Payment limits table
CREATE TABLE IF NOT EXISTS payment_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  daily_limit decimal(10,2) NOT NULL DEFAULT 1000.00,
  monthly_limit decimal(10,2) NOT NULL DEFAULT 5000.00,
  requires_kyc boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- KYC verifications table
CREATE TABLE IF NOT EXISTS kyc_verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  status text NOT NULL DEFAULT 'pending',
  document_type text NOT NULL,
  document_number text NOT NULL,
  verification_date timestamptz,
  expiry_date timestamptz,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add KYC fields to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS kyc_status text DEFAULT 'pending';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS document_verified boolean DEFAULT false;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS risk_level text DEFAULT 'medium';

-- Enable RLS
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE kyc_verifications ENABLE ROW LEVEL SECURITY;

-- Policies for transactions
CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policies for payment limits
CREATE POLICY "Users can view own payment limits"
  ON payment_limits FOR SELECT
  USING (auth.uid() = user_id);

-- Policies for KYC verifications
CREATE POLICY "Users can view own KYC verification"
  ON kyc_verifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can submit KYC verification"
  ON kyc_verifications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_created_at ON transactions(created_at);
CREATE INDEX IF NOT EXISTS idx_kyc_verifications_user_id ON kyc_verifications(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_limits_user_id ON payment_limits(user_id);