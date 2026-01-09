import { supabase } from '../config/supabase.js';

export const criarReserva = async (req, res) => {
  try {
    const { nome, email, telefone, campo, data, horario, plano, mensagem } = req.body;

    const { data: existingReserva, error: checkError } = await supabase
      .from('reservas')
      .select('*')
      .eq('data', data)
      .eq('horario', horario)
      .eq('campo', campo || 'campo1')
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError;
    }

    if (existingReserva) {
      return res.status(409).json({
        sucesso: false,
        erro: 'Este horário já está reservado. Por favor, escolhe outro horário.'
      });
    }

    const { data: reserva, error } = await supabase
      .from('reservas')
      .insert([
        {
          nome,
          email,
          telefone: telefone || null,
          campo: campo || 'campo1',
          data,
          horario,
          plano: plano || null,
          mensagem: mensagem || null,
          status: 'pendente'
        }
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      sucesso: true,
      mensagem: 'Reserva criada com sucesso! Entraremos em contacto brevemente.',
      dados: reserva
    });

  } catch (error) {
    console.error('Erro ao criar reserva:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao criar reserva. Por favor, tenta novamente.'
    });
  }
};

export const obterReservas = async (req, res) => {
  try {
    const { data: data_param, status, email } = req.query;

    let query = supabase
      .from('reservas')
      .select('*')
      .order('created_at', { ascending: false });

    if (data_param) {
      query = query.eq('data', data_param);
    }

    if (status) {
      query = query.eq('status', status);
    }

    if (email) {
      query = query.eq('email', email);
    }

    const { data: reservas, error } = await query;

    if (error) throw error;

    res.status(200).json({
      sucesso: true,
      dados: reservas,
      total: reservas.length
    });

  } catch (error) {
    console.error('Erro ao obter reservas:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao obter reservas. Por favor, tenta novamente.'
    });
  }
};

export const obterHorariosDisponiveis = async (req, res) => {
  try {
    const { data: data_param, campo } = req.query;

    if (!data_param) {
      return res.status(400).json({
        sucesso: false,
        erro: 'Data é obrigatória'
      });
    }

    const { data: reservas, error } = await supabase
      .from('reservas')
      .select('horario, campo')
      .eq('data', data_param)
      .eq('campo', campo || 'campo1');

    if (error) throw error;

    const horariosOcupados = reservas.map(r => r.horario);

    const todosHorarios = [];
    for (let hora = 7; hora <= 22; hora++) {
      todosHorarios.push(`${hora.toString().padStart(2, '0')}:00`);
      todosHorarios.push(`${hora.toString().padStart(2, '0')}:30`);
    }

    const horariosDisponiveis = todosHorarios.filter(
      horario => !horariosOcupados.includes(horario)
    );

    res.status(200).json({
      sucesso: true,
      dados: {
        disponiveis: horariosDisponiveis,
        ocupados: horariosOcupados
      }
    });

  } catch (error) {
    console.error('Erro ao obter horários:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao obter horários disponíveis.'
    });
  }
};
