# Comandos Úteis - Duarte Gym Padel Academy

Referência rápida de comandos para desenvolvimento e manutenção.

## Instalação

```bash
# Instalar dependências do frontend
npm install

# Instalar dependências do backend
cd server && npm install && cd ..

# Instalar tudo de uma vez
npm install && cd server && npm install && cd ..
```

## Desenvolvimento

### Frontend
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

### Backend
```bash
# Iniciar servidor (com auto-reload)
cd server
npm run dev

# Iniciar servidor (produção)
cd server
npm start
```

### Ambos
```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
npm run dev
```

## Testes

### API
```bash
# Health check
curl http://localhost:3001/api/health

# Info da API
curl http://localhost:3001/

# Criar reserva
curl -X POST http://localhost:3001/api/reservas \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "telefone": "+351912345678",
    "campo": "campo1",
    "data": "2026-01-15",
    "horario": "14:00",
    "plano": "casual"
  }'

# Listar reservas
curl http://localhost:3001/api/reservas

# Filtrar reservas por data
curl "http://localhost:3001/api/reservas?data=2026-01-15"

# Horários disponíveis
curl "http://localhost:3001/api/reservas/horarios-disponiveis?data=2026-01-15&campo=campo1"

# Enviar contacto
curl -X POST http://localhost:3001/api/contactos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Santos",
    "email": "maria@example.com",
    "telefone": "+351923456789",
    "mensagem": "Gostaria de saber mais informações sobre os planos."
  }'

# Listar contactos
curl http://localhost:3001/api/contactos
```

## Git

```bash
# Inicializar repositório
git init

# Adicionar todos os ficheiros
git add .

# Commit
git commit -m "Initial commit - Duarte Gym Padel Academy"

# Adicionar remote
git remote add origin https://github.com/seu-usuario/duarte-gym.git

# Push inicial
git branch -M main
git push -u origin main

# Push subsequente
git push

# Ver status
git status

# Ver diferenças
git diff

# Ver histórico
git log --oneline

# Criar branch
git checkout -b feature/nova-funcionalidade

# Voltar para main
git checkout main

# Merge branch
git merge feature/nova-funcionalidade

# Pull últimas alterações
git pull origin main
```

## Limpeza

```bash
# Limpar node_modules
rm -rf node_modules server/node_modules

# Limpar build
rm -rf dist

# Limpar cache
rm -rf .cache .vite

# Reinstalar tudo
npm install && cd server && npm install && cd ..

# Limpar e reinstalar
rm -rf node_modules server/node_modules dist .cache
npm install
cd server && npm install && cd ..
npm run build
```

## Logs

```bash
# Ver logs do backend (se estiver a usar)
tail -f server/logs/app.log

# Ver logs do sistema
journalctl -u duarte-gym-backend -f

# Ver logs do npm
cat ~/.npm/_logs/*-debug.log
```

## Base de Dados

```bash
# Conectar ao Supabase SQL Editor
# (via browser em app.supabase.com)

# Ver tabelas
SELECT * FROM reservas ORDER BY created_at DESC LIMIT 10;
SELECT * FROM contactos ORDER BY created_at DESC LIMIT 10;

# Contar registos
SELECT COUNT(*) FROM reservas;
SELECT COUNT(*) FROM contactos;

# Ver reservas de hoje
SELECT * FROM reservas WHERE data = CURRENT_DATE;

# Ver reservas pendentes
SELECT * FROM reservas WHERE status = 'pendente';

# Apagar reserva
DELETE FROM reservas WHERE id = 'uuid-aqui';

# Atualizar status
UPDATE reservas SET status = 'confirmada' WHERE id = 'uuid-aqui';
```

## Manutenção

```bash
# Verificar versões
node --version
npm --version

# Atualizar dependências
npm update
cd server && npm update && cd ..

# Verificar dependências desatualizadas
npm outdated
cd server && npm outdated && cd ..

# Auditar segurança
npm audit
npm audit fix

# Verificar portas em uso
lsof -i :3001
lsof -i :5173

# Matar processo
lsof -ti:3001 | xargs kill -9

# Ver uso de disco
du -sh node_modules
du -sh server/node_modules
du -sh dist
```

## Deploy

### Netlify
```bash
# Build local
npm run build

# Deploy manual (se tiver CLI)
netlify deploy --prod

# Ver logs
netlify logs
```

### Railway
```bash
# Iniciar novo deploy
railway up

# Ver logs
railway logs

# Ver variáveis
railway variables

# Adicionar variável
railway variables set KEY=value
```

### Render
```bash
# Deploy é automático via Git
git push origin main

# Ver logs via dashboard
# https://dashboard.render.com
```

## Debugging

```bash
# Modo debug Node.js
cd server
node --inspect server.js

# Ver variáveis de ambiente
echo $VITE_API_URL
cd server && cat .env

# Testar conexão Supabase
curl "https://seu-projeto.supabase.co/rest/v1/" \
  -H "apikey: sua-chave-anon"

# Verificar CORS
curl -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -X OPTIONS http://localhost:3001/api/reservas \
  -v
```

## Performance

```bash
# Analisar bundle size
npm run build -- --mode=report

# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:5173

# Load testing
npm install -g autocannon
autocannon -c 100 -d 10 http://localhost:3001/api/health
```

## Úteis

```bash
# Abrir no browser
open http://localhost:5173         # Frontend
open http://localhost:3001         # Backend
open https://app.supabase.com      # Supabase

# Ver estrutura do projeto
tree -I 'node_modules|dist|.git'

# Contar linhas de código
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l
find server -name "*.js" | xargs wc -l

# Procurar em ficheiros
grep -r "TODO" src/
grep -r "FIXME" server/

# Substituir texto
find src -type f -exec sed -i '' 's/old/new/g' {} +
```

## CI/CD (GitHub Actions - exemplo)

```bash
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm test
```

## Backup

```bash
# Backup da base de dados (via Supabase dashboard)
# Settings → Database → Backup

# Backup do código
git archive --format=zip --output=backup.zip HEAD

# Backup completo
tar -czf duarte-gym-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  .
```

## Troubleshooting

```bash
# Resolver problemas de porta
kill -9 $(lsof -t -i:3001)
kill -9 $(lsof -t -i:5173)

# Reinstalar dependências problemáticas
npm uninstall problematic-package
npm install problematic-package

# Limpar cache do npm
npm cache clean --force

# Verificar sintaxe
npm run build  # Frontend
cd server && node --check server.js  # Backend

# Ver todas as variáveis de ambiente
printenv | grep VITE
cd server && printenv | grep SUPABASE
```

---

**Dica**: Guarda estes comandos como snippets no teu editor ou cria aliases no terminal!

```bash
# Adicionar ao ~/.bashrc ou ~/.zshrc
alias dg-dev="npm run dev"
alias dg-server="cd server && npm run dev"
alias dg-build="npm run build"
alias dg-test="curl http://localhost:3001/api/health"
```
