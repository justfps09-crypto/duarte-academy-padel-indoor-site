import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase configuration missing');
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface ApiResponse<T> {
  sucesso: boolean;
  mensagem?: string;
  erro?: string;
  dados?: T;
  detalhes?: Array<{ campo: string; mensagem: string }>;
}

interface ReservaData {
  nome: string;
  email: string;
  telefone?: string;
  campo?: string;
  data: string;
  horario: string;
  plano?: string;
  mensagem?: string;
}

interface ContactoData {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
}

interface HorariosDisponiveis {
  disponiveis: string[];
  ocupados: string[];
}

class ApiService {
  async criarReserva(dados: ReservaData): Promise<ApiResponse<any>> {
    try {
      const { data, error } = await supabase
        .from('reservas')
        .insert([
          {
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone || null,
            campo: dados.campo || 'campo1',
            data: dados.data,
            horario: dados.horario,
            plano: dados.plano || null,
            mensagem: dados.mensagem || null,
            status: 'pendente'
          }
        ])
        .select()
        .single();

      if (error) throw error;

      return {
        sucesso: true,
        mensagem: 'Reserva criada com sucesso! Entraremos em contacto brevemente.',
        dados: data
      };
    } catch (error: any) {
      console.error('Erro ao criar reserva:', error);
      return {
        sucesso: false,
        erro: error.message || 'Erro ao criar reserva. Por favor, tente novamente.'
      };
    }
  }

  async obterReservas(filtros?: {
    data?: string;
    status?: string;
    email?: string;
  }): Promise<ApiResponse<any[]>> {
    try {
      let query = supabase
        .from('reservas')
        .select('*')
        .order('created_at', { ascending: false });

      if (filtros?.data) {
        query = query.eq('data', filtros.data);
      }

      if (filtros?.status) {
        query = query.eq('status', filtros.status);
      }

      if (filtros?.email) {
        query = query.eq('email', filtros.email);
      }

      const { data, error } = await query;

      if (error) throw error;

      return {
        sucesso: true,
        dados: data || [],
      };
    } catch (error: any) {
      console.error('Erro ao obter reservas:', error);
      return {
        sucesso: false,
        erro: error.message || 'Erro ao obter reservas.',
        dados: []
      };
    }
  }

  async obterHorariosDisponiveis(
    data: string,
    campo?: string
  ): Promise<ApiResponse<HorariosDisponiveis>> {
    try {
      const { data: reservas, error } = await supabase
        .from('reservas')
        .select('horario')
        .eq('data', data)
        .eq('campo', campo || 'campo1');

      if (error) throw error;

      const horariosOcupados = (reservas || []).map(r => r.horario);

      const todosHorarios = [];
      for (let hora = 7; hora <= 22; hora++) {
        todosHorarios.push(`${hora.toString().padStart(2, '0')}:00`);
        todosHorarios.push(`${hora.toString().padStart(2, '0')}:30`);
      }

      const horariosDisponiveis = todosHorarios.filter(
        horario => !horariosOcupados.includes(horario)
      );

      return {
        sucesso: true,
        dados: {
          disponiveis: horariosDisponiveis,
          ocupados: horariosOcupados
        }
      };
    } catch (error: any) {
      console.error('Erro ao obter horários:', error);
      return {
        sucesso: false,
        erro: error.message || 'Erro ao obter horários disponíveis.',
        dados: {
          disponiveis: [],
          ocupados: []
        }
      };
    }
  }

  async enviarContacto(dados: ContactoData): Promise<ApiResponse<any>> {
    try {
      const { data, error } = await supabase
        .from('contactos')
        .insert([
          {
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone || null,
            mensagem: dados.mensagem
          }
        ])
        .select()
        .single();

      if (error) throw error;

      return {
        sucesso: true,
        mensagem: 'Mensagem enviada com sucesso! Responderemos em breve.',
        dados: data
      };
    } catch (error: any) {
      console.error('Erro ao enviar contacto:', error);
      return {
        sucesso: false,
        erro: error.message || 'Erro ao enviar mensagem. Por favor, tente novamente.'
      };
    }
  }
}

export const apiService = new ApiService();
export type { ReservaData, ContactoData, ApiResponse, HorariosDisponiveis };
