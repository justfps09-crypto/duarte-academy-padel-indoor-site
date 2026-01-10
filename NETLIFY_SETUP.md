# Deploy no Netlify - Guia Completo

Guia passo-a-passo para fazer deploy da Duarte Gym no Netlify.

## Pré-requisitos

1. Código no GitHub (repositório público ou privado)
2. Conta Supabase com dados configurados
3. Conta Netlify (cria em netlify.com)

## Passo 1: Preparar o Repositório

### Adicionar ao Git
```bash
git add .
git commit -m "Preparado para Netlify - Supabase integrado"
git push origin main
```

## Passo 2: Configurar Netlify

### 2.1 Conectar GitHub
1. Acede a [netlify.com](https://netlify.com)
2. Clica em "Add new site" → "Import an existing project"
3. Seleciona "GitHub"
4. Autoriza o Netlify no teu GitHub
5. Seleciona o repositório `duarte-gym`

### 2.2 Configurar Build
Netlify vai pedir:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 (automático)

Clica "Deploy site"

## Passo 3: Configurar Variáveis de Ambiente

Depois de começar o deploy:

1. Vai a **Site settings** (no dashboard)
2. Clica em **Environment**
3. Clica em **Add a variable**
4. Adiciona:

```
VITE_SUPABASE_URL = https://iprfxatdhusfccztxkud.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcmZ4YXRkaHVzZmNjenR4a3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NzExMjMsImV4cCI6MjA4MzU0NzEyM30.X1yKe2Gu8TX05SoJaHSgJflhb7kt8mHmOyK8PN4uRt8
```

**Importante**: Após adicionar variáveis, clica em **Deploy site** novamente

## Passo 4: Testar o Deploy

1. Aguarda o deploy completar (2-5 minutos)
2. Clica no link gerado (ex: `https://duarte-gym-123.netlify.app`)
3. Testa:
   - Página carrega corretamente
   - Estilos CSS aparecem
   - Formulários funcionam
   - Mensagens de sucesso aparecem

## Passo 5: Configurar Domínio Personalizado (Opcional)

### 5.1 Domínio grátis .netlify.app
Já vem ativado automaticamente!

### 5.2 Domínio personalizado
1. Vai a **Site settings** → **Domain management**
2. Clica em **Add custom domain**
3. Escreve: `duartegym.pt`
4. Segue instruções para DNS

**Opção 1: Transferir domínio para Netlify**
- Mais fácil, Netlify gere tudo
- Custo: ~$12/ano

**Opção 2: Manter registador atual**
- Configurar records DNS
- Mais técnico
- Sem custos extras

## Passo 6: HTTPS Automático

Netlify ativa HTTPS automaticamente com Let's Encrypt.

Se tiver problemas:
1. Vai a **Domain management**
2. Clica em "Verify DNS configuration"
3. Espera 24-48 horas

## Troubleshooting

### Deploy falha com "npm not found"
**Solução**:
1. Settings → Build & deploy → Build settings
2. Verifica:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Clica **Retry deploy**

### Página em branco ou sem estilos
**Solução**:
1. Vai a Deploy logs
2. Verifica se há erros
3. Confirma variáveis de ambiente:
   - Settings → Environment
   - Faz redeploy

### Formulários não funcionam
**Solução**:
1. Abre DevTools (F12)
2. Clica em Console
3. Verifica erros de Supabase
4. Confirma variáveis de ambiente estão corretas

### "Supabase configuration missing"
**Solução**:
1. Settings → Environment
2. Confirma que as 2 variáveis estão definidas:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Faz redeploy

## Deploy Automático

Após configurar, qualquer push para `main` faz deploy automático:

```bash
git add .
git commit -m "Correções e melhorias"
git push origin main
```

Netlify vai:
1. Detetar push
2. Clonar código
3. Instalar dependências
4. Fazer build
5. Deploy automático

## Monitorização

### Logs de Deploy
1. Dashboard → Deploys
2. Clica no deploy para ver logs
3. Pode ajudar a debugging

### Analytics
1. Dashboard → Analytics
2. Ver visitantes, conversões, etc.

### Formulários (Netlify Forms)
Se precisar coletar dados dos formulários:
1. Vai a Settings → Forms
2. Ativa "Form detection"
3. Recebe submissões em Netlify

## Performance

### Otimizações Automáticas
- Minificação de CSS/JS
- Cache headers
- CDN global
- Compressão GZIP

### Verificar Performance
1. Dashboard
2. Clica no site
3. Abre PageSpeed Insights
4. Lighthouse score (almeja 90+)

## Segurança

### Headers de Segurança
Já configurados em `netlify.toml`:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- CSP

### CORS
Supabase permite CORS automáticamente para o frontend.

## Rollback

Se algo correr mal:

1. Dashboard → Deploys
2. Seleciona deploy anterior que funcionava
3. Clica em "Restore"

Instantaneamente volta para a versão anterior!

## Custos

### Plano Free
- Sufficient para começar
- 100GB de bandwidth/mês
- Builds ilimitadas
- HTTPS incluído

### Quando fazer upgrade
- Se bandwidth > 100GB/mês
- Se precisa de features premium
- Upgrade para Pro (~$19/mês)

## URLs Importantes

- **Site**: https://duarte-gym-123.netlify.app
- **Dashboard**: https://app.netlify.com
- **Supabase**: https://app.supabase.com
- **GitHub**: https://github.com/seu-usuario/duarte-gym

## Checklist Final

- [ ] Repositório no GitHub
- [ ] Código em branch `main`
- [ ] Build local funciona (`npm run build`)
- [ ] Variáveis de ambiente configuradas no Netlify
- [ ] Deploy completou sem erros
- [ ] Site carrega no browser
- [ ] Estilos CSS aparecem
- [ ] Formulários funcionam
- [ ] Mensagens de erro aparecem corretamente
- [ ] Domínio personalizado configurado (opcional)
- [ ] HTTPS ativado

## Suporte Rápido

- Docs Netlify: https://docs.netlify.com
- Community: https://community.netlify.com
- Email: support@netlify.com

---

**Pronto para Netlify! Bom deploy!** 🚀
