/*
  # Create reservations table for Majurska Café

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key) - Unique identifier for each reservation
      - `name` (text) - Name of the person making the reservation
      - `email` (text) - Email address for confirmation
      - `phone` (text, optional) - Phone number
      - `date` (date) - Date of reservation
      - `time` (text) - Time of reservation
      - `message` (text, optional) - Additional message or special requests
      - `created_at` (timestamptz) - Timestamp when reservation was created
      - `status` (text) - Status of reservation (pending, confirmed, cancelled)
  
  2. Security
    - Enable RLS on `reservations` table
    - Add policy for anyone to create reservations (public form)
    - Add policy for authenticated users to view all reservations (admin)
  
  3. Notes
    - This table stores customer reservations from the website
    - Public users can insert reservations
    - Only authenticated admin users can view/manage reservations
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  date date NOT NULL,
  time text NOT NULL,
  message text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
if (!import.meta.env.VITE_SUPABASE_URL) {
  console.warn("Supabase disabled in demo")
}
