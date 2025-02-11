/*
  # Schema inicial do WebytePay

  1. Novas Tabelas
    - `profiles`: Perfis de usuário com informações adicionais
    - `products`: Produtos e planos disponíveis
    - `pricing`: Tabela de preços e taxas
    - `blog_posts`: Posts do blog
    - `pages`: Páginas estáticas do site
    
  2. Segurança
    - RLS habilitado em todas as tabelas
    - Políticas de acesso configuradas
*/

-- Profiles (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  company_name text,
  document_type text CHECK (document_type IN ('cpf', 'cnpj')),
  document_number text,
  phone text,
  address jsonb,
  role text DEFAULT 'merchant',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Products/Plans
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  features jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Pricing/Fees
CREATE TABLE IF NOT EXISTS pricing (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id),
  name text NOT NULL,
  description text,
  credit_fee decimal(5,2),
  debit_fee decimal(5,2),
  pix_fee decimal(5,2),
  monthly_fee decimal(10,2),
  features jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  author_id uuid REFERENCES profiles(id),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Static Pages
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- Policies
-- Profiles
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Products
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage products" ON products
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  ));

-- Pricing
CREATE POLICY "Pricing is viewable by everyone" ON pricing
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage pricing" ON pricing
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  ));

-- Blog Posts
CREATE POLICY "Published posts are viewable by everyone" ON blog_posts
  FOR SELECT USING (published_at IS NOT NULL);

CREATE POLICY "Admins can manage blog posts" ON blog_posts
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  ));

-- Pages
CREATE POLICY "Published pages are viewable by everyone" ON pages
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage pages" ON pages
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  ));