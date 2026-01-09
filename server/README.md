# Backend API - Duarte Gym Padel Academy

Backend completo para gestão de reservas e contactos da academia de padel.

## 🚀 Tecnologias

- **Node.js** + **Express**
- **Supabase** (PostgreSQL)
- **Express Validator** (validação de dados)
- **CORS** (segurança)

## 📦 Instalação

```bash
cd server
npm install
```

## ⚙️ Configuração

1. Cria um ficheiro `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

2. Preenche as variáveis de ambiente:

```env
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=development
```

## 🏃 Execução

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

O servidor estará disponível em `http://localhost:3001`

## 📚 Endpoints da API

### Saúde do Servidor
```
GET /
GET /api/health
```

### Reservas

#### Criar Reserva
```http
POST /api/reservas
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "telefone": "+351912345678",
  "campo": "campo1",
  "data": "2026-01-15",
  "horario": "14:00",
  "plano": "academy",
  "mensagem": "Primeira reserva"
}
```

**Resposta de Sucesso (201):**
```json
{
  "sucesso": true,
  "mensagem": "Reserva criada com sucesso! Entraremos em contacto brevemente.",
  "dados": {
    "id": "uuid",
    "nome": "João Silva",
    ...
  }
}
```

#### Obter Reservas
```http
GET /api/reservas
GET /api/reservas?data=2026-01-15
GET /api/reservas?status=pendente
GET /api/reservas?email=joao@example.com
```

#### Obter Horários Disponíveis
```http
GET /api/reservas/horarios-disponiveis?data=2026-01-15&campo=campo1
```

**Resposta:**
```json
{
  "sucesso": true,
  "dados": {
    "disponiveis": ["07:00", "07:30", "08:00", ...],
    "ocupados": ["14:00", "15:30", ...]
  }
}
```

### Contactos

#### Criar Contacto
```http
POST /api/contactos
Content-Type: application/json

{
  "nome": "Maria Santos",
  "email": "maria@example.com",
  "telefone": "+351923456789",
  "mensagem": "Gostaria de saber mais informações sobre os planos."
}
```

**Resposta de Sucesso (201):**
```json
{
  "sucesso": true,
  "mensagem": "Mensagem enviada com sucesso! Responderemos em breve.",
  "dados": {
    "id": "uuid",
    "nome": "Maria Santos",
    ...
  }
}
```

#### Obter Contactos
```http
GET /api/contactos
```

## ✅ Validações

### Reserva
- **nome**: obrigatório, 2-100 caracteres
- **email**: obrigatório, formato válido
- **telefone**: opcional, formato português (+351XXXXXXXXX)
- **campo**: opcional, valores: campo1, campo2, campo3, campo4
- **data**: obrigatório, não pode ser no passado
- **horario**: obrigatório, formato HH:MM
- **plano**: opcional, valores: casual, academy, elite
- **mensagem**: opcional, máximo 500 caracteres

### Contacto
- **nome**: obrigatório, 2-100 caracteres
- **email**: obrigatório, formato válido
- **telefone**: opcional, formato português
- **mensagem**: obrigatório, 10-1000 caracteres

## 🚢 Deploy

### Railway
1. Cria uma conta em [Railway](https://railway.app)
2. Liga o repositório GitHub
3. Adiciona as variáveis de ambiente
4. Deploy automático

### Render
1. Cria uma conta em [Render](https://render.com)
2. Cria um novo Web Service
3. Liga o repositório GitHub
4. Configura as variáveis de ambiente
5. Deploy automático

## 📝 Estrutura de Ficheiros

```
server/
├── config/
│   └── supabase.js       # Configuração Supabase
├── controllers/
│   ├── reservasController.js
│   └── contactosController.js
├── middleware/
│   └── validation.js     # Validações
├── routes/
│   ├── reservas.js
│   └── contactos.js
├── .env.example
├── package.json
├── server.js             # Servidor principal
└── README.md
```

## 🔒 Segurança

- CORS configurado para domínios específicos
- Validação de todos os inputs
- Sanitização de dados
- Rate limiting recomendado para produção
- Variáveis de ambiente para credenciais

## 📊 Base de Dados

A base de dados Supabase já está configurada com:

- Tabela `reservas` com RLS (Row Level Security)
- Tabela `contactos` com RLS
- Índices para performance otimizada
- Políticas de acesso público para inserções
- Políticas de acesso autenticado para leituras/atualizações

## 🐛 Tratamento de Erros

Todas as respostas de erro seguem o formato:

```json
{
  "sucesso": false,
  "erro": "Mensagem de erro descritiva",
  "detalhes": [
    {
      "campo": "email",
      "mensagem": "Email inválido"
    }
  ]
}
```

## 📞 Suporte

Para questões técnicas, consulta a documentação ou contacta a equipa de desenvolvimento.
