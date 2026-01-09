# Quick Start - Duarte Gym Padel Academy

Guia rápido para começar em 5 minutos.

## Passo 1: Instalar Dependências

### Frontend
```bash
npm install
```

### Backend
```bash
cd server
npm install
cd ..
```

## Passo 2: Configurar Supabase

1. Cria conta em [supabase.com](https://supabase.com)
2. Cria novo projeto
3. Vai a Settings → API
4. Copia:
   - Project URL
   - anon public key

## Passo 3: Configurar Variáveis de Ambiente

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001/api
```

### Backend (server/.env)
```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anon_aqui
NODE_ENV=development
```

## Passo 4: Criar Base de Dados

A base de dados já está configurada no Supabase com:
- Tabela `reservas`
- Tabela `contactos`
- RLS ativado
- Políticas configuradas

## Passo 5: Iniciar Servidores

### Terminal 1 - Backend
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend
```bash
npm run dev
```

## Passo 6: Testar

1. Acede a `http://localhost:5173`
2. Navega até "Reservas"
3. Preenche o formulário
4. Clica em "Confirmar Reserva"
5. Verifica mensagem de sucesso

## Estrutura de URLs

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health
- **Supabase**: https://app.supabase.com

## Problemas Comuns

### "Cannot find module"
```bash
npm install
cd server && npm install
```

### "Configuração do Supabase em falta"
- Verifica ficheiro `server/.env`
- Confirma que as variáveis estão corretas

### "Network Error"
- Verifica se backend está a correr
- Confirma URL da API no `.env`

### Port já em uso
```bash
# Mata processo na porta 3001
lsof -ti:3001 | xargs kill -9

# Ou muda a porta no server/.env
PORT=3002
```

## Endpoints Principais

### Testar Backend
```bash
curl http://localhost:3001/api/health
```

### Criar Reserva
```bash
curl -X POST http://localhost:3001/api/reservas \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "data": "2026-01-15",
    "horario": "14:00"
  }'
```

### Enviar Contacto
```bash
curl -X POST http://localhost:3001/api/contactos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Santos",
    "email": "maria@example.com",
    "mensagem": "Gostaria de mais informações"
  }'
```

## Próximos Passos

1. Personaliza o design em `src/app/components/`
2. Adiciona mais validações em `server/middleware/validation.js`
3. Configura email notifications
4. Deploy (ver `DEPLOY.md`)

## Comandos Úteis

```bash
# Build frontend para produção
npm run build

# Ver estrutura do projeto
tree -I 'node_modules|dist'

# Logs do backend
cd server && npm run dev

# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

## Suporte

- README principal: `README.md`
- Guia de deploy: `DEPLOY.md`
- Backend docs: `server/README.md`

---

**Pronto!** Agora tens uma aplicação completa a funcionar localmente! 🚀
