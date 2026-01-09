const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

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
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro na requisição');
      }

      return data;
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  }

  async criarReserva(dados: ReservaData): Promise<ApiResponse<any>> {
    return this.request('/reservas', {
      method: 'POST',
      body: JSON.stringify(dados),
    });
  }

  async obterReservas(filtros?: {
    data?: string;
    status?: string;
    email?: string;
  }): Promise<ApiResponse<any[]>> {
    const params = new URLSearchParams();

    if (filtros?.data) params.append('data', filtros.data);
    if (filtros?.status) params.append('status', filtros.status);
    if (filtros?.email) params.append('email', filtros.email);

    const queryString = params.toString();
    const endpoint = queryString ? `/reservas?${queryString}` : '/reservas';

    return this.request(endpoint);
  }

  async obterHorariosDisponiveis(
    data: string,
    campo?: string
  ): Promise<ApiResponse<HorariosDisponiveis>> {
    const params = new URLSearchParams({ data });
    if (campo) params.append('campo', campo);

    return this.request(`/reservas/horarios-disponiveis?${params.toString()}`);
  }

  async enviarContacto(dados: ContactoData): Promise<ApiResponse<any>> {
    return this.request('/contactos', {
      method: 'POST',
      body: JSON.stringify(dados),
    });
  }

  async verificarSaude(): Promise<{ status: string }> {
    const response = await fetch(`${API_URL.replace('/api', '')}/api/health`);
    return response.json();
  }
}

export const apiService = new ApiService();
export type { ReservaData, ContactoData, ApiResponse, HorariosDisponiveis };
