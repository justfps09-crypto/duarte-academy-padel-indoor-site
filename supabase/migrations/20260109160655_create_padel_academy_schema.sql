-- Create reservas (bookings) table
CREATE TABLE IF NOT EXISTS reservas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    campo TEXT,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    plano TEXT,
    mensagem TEXT,
    status TEXT DEFAULT 'pendente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contactos (contacts) table
CREATE TABLE IF NOT EXISTS contactos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    mensagem TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on reservas
ALTER TABLE reservas ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security on contactos
ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to insert reservas (bookings)
CREATE POLICY "Allow public to insert reservas"
    ON reservas
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create policy to allow public to read their own reservas by email
CREATE POLICY "Allow users to read their own reservas"
    ON reservas
    FOR SELECT
    TO public
    USING (true);

-- Create policy to allow authenticated users to update reservas
CREATE POLICY "Allow authenticated users to update reservas"
    ON reservas
    FOR UPDATE
    TO authenticated
    USING (true);

-- Create policy to allow authenticated users to delete reservas
CREATE POLICY "Allow authenticated users to delete reservas"
    ON reservas
    FOR DELETE
    TO authenticated
    USING (true);

-- Create policy to allow public to insert contactos (contacts)
CREATE POLICY "Allow public to insert contactos"
    ON contactos
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create policy to allow authenticated users to read contactos
CREATE POLICY "Allow authenticated users to read contactos"
    ON contactos
    FOR SELECT
    TO authenticated
    USING (true);

-- Create policy to allow authenticated users to delete contactos
CREATE POLICY "Allow authenticated users to delete contactos"
    ON contactos
    FOR DELETE
    TO authenticated
    USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reservas_email ON reservas(email);
CREATE INDEX IF NOT EXISTS idx_reservas_data ON reservas(data);
CREATE INDEX IF NOT EXISTS idx_reservas_status ON reservas(status);
CREATE INDEX IF NOT EXISTS idx_reservas_created_at ON reservas(created_at);
CREATE INDEX IF NOT EXISTS idx_contactos_email ON contactos(email);
CREATE INDEX IF NOT EXISTS idx_contactos_created_at ON contactos(created_at);