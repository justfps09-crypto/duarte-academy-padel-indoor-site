# Duarte Gym — Padel Academy

Site completo da Duarte Gym — Padel Academy com frontend em React/Tailwind e backend em Node.js/Express integrado com Supabase.

## Design Estilo Apple

Este projeto apresenta um design premium inspirado no estilo Apple:
- Interface minimalista e elegante
- Animações suaves e micro-interações
- Tipografia limpa e hierarquia visual clara
- Transições fluidas entre seções
- Formulários interativos com feedback visual
- Efeitos de hover e estados de carregamento

## Estrutura do Projeto

```
duarte-gym/
├── src/                    # Frontend React
│   ├── app/
│   │   ├── components/     # Componentes React
│   │   └── App.tsx
│   ├── services/           # Serviços de API
│   │   └── api.ts
│   ├── styles/             # Estilos CSS
│   └── main.tsx
├── server/                 # Backend Node.js
│   ├── config/
│   │   └── supabase.js     # Configuração Supabase
│   ├── controllers/        # Controladores
│   ├── middleware/         # Middleware (validações)
│   ├── routes/             # Rotas da API
│   └── server.js
└── package.json
```

## Tecnologias Utilizadas

### Frontend
- **React 18** - Interface de utilizador
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **Vite** - Build tool
- **Lucide React** - Ícones

### Backend
- **Node.js** + **Express** - Servidor API
- **Supabase** - Base de dados PostgreSQL
- **Express Validator** - Validação de dados
- **CORS** - Segurança

## Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta Supabase

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/duarte-gym.git
cd duarte-gym
```

### 2. Configurar Frontend

```bash
# Instalar dependências
npm install

# Criar ficheiro .env
cp .env.example .env
```

Editar `.env`:
```env
VITE_API_URL=http://localhost:3001/api
```

### 3. Configurar Backend

```bash
# Ir para a pasta do servidor
cd server

# Instalar dependências
npm install

# Criar ficheiro .env
cp .env.example .env
```

Editar `server/.env`:
```env
PORT=3001
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=development
```

### 4. Base de Dados Supabase

A base de dados já está configurada com:
- Tabela `reservas` (bookings)
- Tabela `contactos` (contacts)
- Row Level Security (RLS) ativado
- Políticas de acesso configuradas
- Índices otimizados

## Execução

### Desenvolvimento

#### Terminal 1 - Frontend
```bash
npm run dev
```
Frontend disponível em: `http://localhost:5173`

#### Terminal 2 - Backend
```bash
cd server
npm run dev
```
API disponível em: `http://localhost:3001`

### Produção

#### Frontend
```bash
npm run build
```

#### Backend
```bash
cd server
npm start
```

## Funcionalidades

### Reservas de Campos
- Formulário interativo com validação
- Seleção de campo, data e horário
- Verificação de disponibilidade
- Confirmação por email
- Estados de carregamento animados
- Mensagens de sucesso/erro

### Contacto
- Formulário de contacto completo
- Validação de dados
- Feedback visual
- Informações da academia
- Integração com backend

### Outras Seções
- Hero section com animações
- Tecnologia e inovação
- Campos premium
- Planos e preços
- Equipa de treinadores
- Galeria de fotos

## API Endpoints

### Reservas
- `POST /api/reservas` - Criar reserva
- `GET /api/reservas` - Listar reservas
- `GET /api/reservas/horarios-disponiveis` - Horários disponíveis

### Contactos
- `POST /api/contactos` - Enviar mensagem
- `GET /api/contactos` - Listar mensagens

Documentação completa em: `server/README.md`

## Deploy

### Frontend (Netlify)

1. Criar conta em [Netlify](https://netlify.com)
2. Conectar repositório GitHub
3. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Adicionar variável de ambiente:
   - `VITE_API_URL`: URL do backend

5. Deploy automático

### Backend (Railway/Render)

#### Railway
1. Criar conta em [Railway](https://railway.app)
2. New Project → Deploy from GitHub
3. Selecionar repositório
4. Configurar:
   - Root Directory: `server`
   - Start Command: `npm start`
5. Adicionar variáveis de ambiente:
   - `PORT`: 3001
   - `SUPABASE_URL`: URL do projeto
   - `SUPABASE_ANON_KEY`: Chave anon
   - `NODE_ENV`: production

#### Render
1. Criar conta em [Render](https://render.com)
2. New → Web Service
3. Conectar repositório GitHub
4. Configurar:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Adicionar variáveis de ambiente (mesmas acima)

## Segurança

- Validação de todos os inputs
- Sanitização de dados
- CORS configurado
- RLS no Supabase
- Variáveis de ambiente para credenciais
- HTTPS em produção

## Testes

### Frontend
```bash
npm run test
```

### Backend
```bash
cd server
npm run test
```

## Estrutura de Dados

### Reserva
```typescript
{
  nome: string;
  email: string;
  telefone?: string;
  campo: 'campo1' | 'campo2' | 'campo3' | 'campo4';
  data: string;
  horario: string;
  plano?: 'casual' | 'academy' | 'elite';
  mensagem?: string;
}
```

### Contacto
```typescript
{
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
}
```

## Suporte

Para questões técnicas ou problemas:
- Email: dev@duartegym.pt
- GitHub Issues: [github.com/seu-usuario/duarte-gym/issues]

## Contribuir

1. Fork o projeto
2. Criar branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit changes (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push branch (`git push origin feature/nova-funcionalidade`)
5. Abrir Pull Request

## Licença

MIT License - ver ficheiro `LICENSE` para detalhes

## Autor

Desenvolvido com dedicação pela equipa Duarte Gym

---

**Duarte Gym — Padel Academy**
A Nova Era do Padel Indoor
