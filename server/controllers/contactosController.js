import { supabase } from '../config/supabase.js';

export const criarContacto = async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    const { data: contacto, error } = await supabase
      .from('contactos')
      .insert([
        {
          nome,
          email,
          telefone: telefone || null,
          mensagem
        }
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      sucesso: true,
      mensagem: 'Mensagem enviada com sucesso! Responderemos em breve.',
      dados: contacto
    });

  } catch (error) {
    console.error('Erro ao criar contacto:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao enviar mensagem. Por favor, tenta novamente.'
    });
  }
};

export const obterContactos = async (req, res) => {
  try {
    const { data: contactos, error } = await supabase
      .from('contactos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({
      sucesso: true,
      dados: contactos,
      total: contactos.length
    });

  } catch (error) {
    console.error('Erro ao obter contactos:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao obter contactos.'
    });
  }
};
