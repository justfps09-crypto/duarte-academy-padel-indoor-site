# 🚀 DEPLOY EM 5 MINUTOS

Instruções super simples para colocar no Netlify AGORA.

## Passo 1: GitHub (2 minutos)

```bash
git add .
git commit -m "Deploy"
git push origin main
```

## Passo 2: Netlify (3 minutos)

1. Vai a **netlify.com**
2. Clica **"Add new site"** → **"Import an existing project"**
3. Clica **"GitHub"**
4. Autoriza (seguir as instruções)
5. Seleciona o repositório
6. Clica **"Deploy site"**

**Netlify vai fazer build automaticamente**

## Passo 3: Variáveis de Ambiente (1 minuto)

Depois do deploy:

1. No dashboard Netlify, clica em **"Site settings"**
2. Vai a **"Environment"**
3. Clica **"Add a variable"** e copia isto:

```
Key: VITE_SUPABASE_URL
Value: https://iprfxatdhusfccztxkud.supabase.co
```

4. Clica **"Add a variable"** novamente:

```
Key: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcmZ4YXRkaHVzZmNjenR4a3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NzExMjMsImV4cCI6MjA4MzU0NzEyM30.X1yKe2Gu8TX05SoJaHSgJflhb7kt8mHmOyK8PN4uRt8
```

5. Clica **"Deploy site"** novamente

## Pronto! ✅

Em 5 minutos:
- ✅ Site no ar
- ✅ Domínio automático (duarte-gym-abc.netlify.app)
- ✅ HTTPS grátis
- ✅ Formulários a funcionar
- ✅ Dados em Supabase

## URL do Teu Site

Depois do deploy, vais ter um URL como:
```
https://duarte-gym-123.netlify.app
```

## Testar

1. Abre o URL
2. Clica em "Reservar"
3. Preenche o formulário
4. Clica "Confirmar Reserva"
5. Se aparecer mensagem verde = **FUNCIONA!** 🎉

## Se der erro

### Página em branco
- Abre DevTools (F12)
- Vê a consola
- Diz-me o erro

### "Supabase configuration missing"
- Voltou a colocar as variáveis no Netlify?
- Fez deploy novamente?
- Esperou 30 segundos?

### Formulário não envia
- Abre DevTools → Network
- Tenta submeter novamente
- Qual é o erro que aparece?

## Domínio Personalizado (Opcional)

Se quiseres duartegym.pt em vez de duarte-gym-123.netlify.app:

1. No Netlify, vai a **Site settings** → **Domain management**
2. Clica **"Add custom domain"**
3. Escreve `duartegym.pt`
4. Segue as instruções para DNS

Demora 24-48 horas a ativar.

## Próximas Vezes

Qualquer push para GitHub = deploy automático!

```bash
# Fazer alterações
git add .
git commit -m "Alteração"
git push origin main

# Netlify deploya automaticamente em 2-5 minutos
```

---

**É isto!** Tens um site profissional no ar! 🎉

Para mais detalhes, lê:
- NETLIFY_SETUP.md
- QUICKSTART.md
- README.md
