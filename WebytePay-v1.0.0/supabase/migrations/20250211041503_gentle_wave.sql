/*
  # Payment Validation Tables

  1. New Tables
    - `payment_validations`
      - Stores validation results for each payment
      - Includes risk assessment and fraud detection data
    - `payment_rules`
      - Configurable rules for payment validation
      - Managed by admin users
    - `validation_logs`
      - Detailed logs of validation process
      - Audit trail for compliance

  2. Security
    - Enable RLS on all tables
    - Admin-only access for rules management
    - Merchant access for own validation data
*/

-- Payment Validations Table
CREATE TABLE IF NOT EXISTS payment_validations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id uuid REFERENCES transactions(id),
  merchant_id uuid REFERENCES profiles(id),
  risk_score integer NOT NULL,
  validation_status text NOT NULL,
  validation_details jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Payment Rules Table
CREATE TABLE IF NOT EXISTS payment_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  rule_type text NOT NULL,
  conditions jsonb NOT NULL,
  actions jsonb NOT NULL,
  is_active boolean DEFAULT true,
  priority integer NOT NULL,
  created_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Validation Logs Table
CREATE TABLE IF NOT EXISTS validation_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  validation_id uuid REFERENCES payment_validations(id),
  log_type text NOT NULL,
  log_message text NOT NULL,
  log_details jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE payment_validations ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_logs ENABLE ROW LEVEL SECURITY;

-- Policies for payment_validations
CREATE POLICY "Admins can view all validations"
  ON payment_validations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Merchants can view own validations"
  ON payment_validations FOR SELECT
  USING (merchant_id = auth.uid());

-- Policies for payment_rules
CREATE POLICY "Admins can manage rules"
  ON payment_rules
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Everyone can view active rules"
  ON payment_rules FOR SELECT
  USING (is_active = true);

-- Policies for validation_logs
CREATE POLICY "Admins can view all logs"
  ON validation_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Merchants can view own validation logs"
  ON validation_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM payment_validations
      WHERE payment_validations.id = validation_logs.validation_id
      AND payment_validations.merchant_id = auth.uid()
    )
  );

-- Indexes
CREATE INDEX idx_payment_validations_transaction_id ON payment_validations(transaction_id);
CREATE INDEX idx_payment_validations_merchant_id ON payment_validations(merchant_id);
CREATE INDEX idx_payment_rules_priority ON payment_rules(priority);
CREATE INDEX idx_validation_logs_validation_id ON validation_logs(validation_id);