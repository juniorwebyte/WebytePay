/*
  # Create admin user

  1. Changes
    - Add admin user with specified credentials
    - Set admin role in profiles table
  
  2. Security
    - Ensure proper role assignment
    - Maintain existing RLS policies
*/

-- First, check if the user already exists in auth.users
DO $$
DECLARE
  user_id uuid;
BEGIN
  -- Get or create the user
  user_id := (
    SELECT id FROM auth.users
    WHERE email = 'juniorwci70@gmail.com'
    LIMIT 1
  );

  -- If user doesn't exist, we'll create it
  IF user_id IS NULL THEN
    user_id := gen_random_uuid();
    
    -- Insert into auth.users
    INSERT INTO auth.users (
      id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin
    )
    VALUES (
      user_id,
      'juniorwci70@gmail.com',
      crypt('99110990Webytebr@', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{"full_name":"Super Admin"}',
      true
    );
  END IF;

  -- Ensure profile exists with admin role
  INSERT INTO public.profiles (id, full_name, role, created_at, updated_at)
  VALUES (
    user_id,
    'Super Admin',
    'admin',
    now(),
    now()
  )
  ON CONFLICT (id) DO UPDATE
  SET role = 'admin',
      updated_at = now();

END $$;