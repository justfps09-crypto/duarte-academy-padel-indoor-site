# Guia de Deploy - Duarte Gym Padel Academy

Guia completo para fazer deploy do frontend no Netlify e backend no Railway/Render.

## Preparação

### 1. Repositório GitHub
Certifica-te que o projeto está no GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Duarte Gym Padel Academy"
git branch -M main
git remote add origin https://github.com/seu-usuario/duarte-gym.git
git push -u origin main
```

### 2. Supabase
- Acede ao [Supabase Dashboard](https://app.supabase.com)
- Copia `Project URL` e `anon public key`
- Guarda estas credenciais (vais precisar delas)

## Deploy do Backend

### Opção 1: Railway (Recomendado)

#### Passo 1: Criar Projeto
1. Acede a [Railway.app](https://railway.app)
2. Clica em "New Project"
3. Seleciona "Deploy from GitHub repo"
4. Escolhe o repositório `duarte-gym`

#### Passo 2: Configurar Serviço
1. Railway vai detetar o projeto Node.js
2. Vai a **Settings**:
   - **Root Directory**: `server`
   - **Start Command**: `npm start`
   - **Build Command**: `npm install`

#### Passo 3: Variáveis de Ambiente
1. Vai a **Variables**
2. Adiciona as seguintes variáveis:

```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anon
NODE_ENV=production
```

#### Passo 4: Deploy
1. Railway faz deploy automático
2. Copia o URL gerado (ex: `https://duarte-gym-backend.up.railway.app`)
3. Guarda este URL para configurar o frontend

#### Passo 5: Domínio Personalizado (Opcional)
1. Vai a **Settings** → **Domains**
2. Adiciona domínio personalizado
3. Configura DNS conforme instruções

### Opção 2: Render

#### Passo 1: Criar Web Service
1. Acede a [Render.com](https://render.com)
2. Clica em "New +" → "Web Service"
3. Conecta o GitHub e seleciona `duarte-gym`

#### Passo 2: Configurar
```
Name: duarte-gym-api
Root Directory: server
Build Command: npm install
Start Command: npm start
```

#### Passo 3: Variáveis de Ambiente
Adiciona em **Environment**:
```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anon
NODE_ENV=production
```

#### Passo 4: Deploy
1. Clica em "Create Web Service"
2. Aguarda deploy (pode demorar 5-10 min)
3. Copia o URL (ex: `https://duarte-gym-api.onrender.com`)

## Deploy do Frontend

### Netlify

#### Passo 1: Criar Site
1. Acede a [Netlify.com](https://netlify.com)
2. Clica em "Add new site" → "Import an existing project"
3. Conecta GitHub e seleciona `duarte-gym`

#### Passo 2: Configurar Build
```
Build command: npm run build
Publish directory: dist
```

#### Passo 3: Variáveis de Ambiente
1. Vai a **Site settings** → **Environment variables**
2. Adiciona:

```env
VITE_API_URL=https://duarte-gym-api.onrender.com/api
```

(Usa o URL do backend que copiaste anteriormente)

#### Passo 4: Deploy
1. Clica em "Deploy site"
2. Aguarda build e deploy (2-5 min)
3. Netlify gera URL (ex: `https://duarte-gym.netlify.app`)

#### Passo 5: Domínio Personalizado (Opcional)
1. Vai a **Domain management**
2. Clica em "Add custom domain"
3. Segue instruções para configurar DNS:
   - Tipo: A record ou CNAME
   - Nome: @ ou www
   - Valor: conforme instruções Netlify

#### Passo 6: HTTPS
- Netlify ativa HTTPS automaticamente
- Certificado SSL gratuito via Let's Encrypt

## Configuração CORS no Backend

Se tiveres problemas de CORS após deploy, verifica que o backend tem os domínios corretos:

```javascript
// server/server.js
app.use(cors({
  origin: [
    'https://duarte-gym.netlify.app',
    'https://www.duartegym.pt',
    'http://localhost:5173'  // para desenvolvimento
  ],
  credentials: true
}));
```

Faz commit e push para aplicar:
```bash
git add server/server.js
git commit -m "Update CORS origins"
git push
```

## Verificação do Deploy

### 1. Testar Backend
```bash
curl https://seu-backend.railway.app/api/health
```

Resposta esperada:
```json
{
  "status": "OK",
  "timestamp": "2026-01-09T..."
}
```

### 2. Testar Frontend
1. Acede ao URL do frontend
2. Testa formulário de reserva
3. Testa formulário de contacto
4. Verifica consola do browser (não deve ter erros)

### 3. Testar Integração
1. Preenche formulário de reserva
2. Submete
3. Verifica mensagem de sucesso
4. Confirma na base de dados Supabase

## Troubleshooting

### Erro: "Failed to fetch"
**Problema**: Frontend não consegue comunicar com backend

**Solução**:
1. Verifica URL da API em variáveis de ambiente
2. Verifica CORS no backend
3. Confirma que backend está online

### Erro: "Network Error"
**Problema**: CORS ou URL incorreto

**Solução**:
```bash
# Testa backend diretamente
curl -X POST https://seu-backend.railway.app/api/reservas \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","email":"teste@example.com","data":"2026-01-15","horario":"14:00"}'
```

### Erro: Build Failed
**Problema**: Dependências ou configuração

**Solução**:
1. Verifica `package.json`
2. Testa build localmente: `npm run build`
3. Verifica logs de build na plataforma

### Backend não inicia
**Problema**: Variáveis de ambiente ou dependências

**Solução**:
1. Verifica todas as env vars
2. Verifica logs do serviço
3. Testa localmente primeiro

## Monitorização

### Railway
- Dashboard → Logs
- Métricas de CPU/Memória
- Alertas automáticos

### Render
- Logs em tempo real
- Health checks
- Restart automático

### Netlify
- Deploy logs
- Analytics
- Formulários (se ativado)

## Atualizações

### Deploy Automático
Ambas as plataformas fazem deploy automático quando fazes push:

```bash
git add .
git commit -m "Nova funcionalidade"
git push origin main
```

### Deploy Manual
Railway/Render/Netlify têm botão "Redeploy" no dashboard

## Rollback

Se algo correr mal:

### Railway/Render
1. Vai a Deployments
2. Seleciona deploy anterior
3. Clica em "Redeploy"

### Netlify
1. Vai a Deploys
2. Seleciona deploy anterior
3. Clica em "Publish deploy"

## Custos

### Gratuito
- **Netlify**: 100GB bandwidth, builds ilimitadas
- **Railway**: $5 crédito/mês (suficiente para começar)
- **Render**: 750h gratuitas/mês
- **Supabase**: 500MB database, 50MB files, 2GB bandwidth

### Upgrade quando necessário
- Railway: ~$5-20/mês conforme uso
- Render: $7/mês (hobby tier)
- Supabase: $25/mês (pro tier)

## Checklist Final

- [ ] Backend deployado e a funcionar
- [ ] Frontend deployado e a funcionar
- [ ] CORS configurado corretamente
- [ ] Variáveis de ambiente configuradas
- [ ] Base de dados Supabase conectada
- [ ] Formulários a funcionar (teste completo)
- [ ] HTTPS ativo em ambos
- [ ] Domínio personalizado (opcional)
- [ ] Monitorização configurada

## Suporte

Problemas com deploy?
- Railway: [docs.railway.app](https://docs.railway.app)
- Render: [render.com/docs](https://render.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Supabase: [supabase.com/docs](https://supabase.com/docs)

---

**Parabéns!** O teu site Duarte Gym — Padel Academy está online! 🎉
