# Quick Start - Duarte Gym Padel Academy

Guia rápido para começar em 5 minutos.

## Passo 1: Instalar Dependências

```bash
npm install
```

## Passo 2: Configurar Supabase

Já vem configurado! O ficheiro `.env` tem:
```env
VITE_SUPABASE_URL=https://iprfxatdhusfccztxkud.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

A base de dados já tem:
- Tabela `reservas` com RLS
- Tabela `contactos` com RLS
- Todas as políticas configuradas

## Passo 3: Iniciar Frontend

```bash
npm run dev
```

Frontend vai estar em: `http://localhost:5173`

## Passo 4: Testar

1. Acede a `http://localhost:5173`
2. Navega até "Reservar"
3. Preenche o formulário
4. Clica em "Confirmar Reserva"
5. Verifica mensagem de sucesso
6. Dados ficam em Supabase automaticamente

## Estrutura de URLs

- **Frontend Local**: http://localhost:5173
- **Supabase Dashboard**: https://app.supabase.com
- **Frontend Netlify**: https://duarte-gym-123.netlify.app (após deploy)

## Problemas Comuns

### "Cannot find module"
```bash
npm install
```

### "Supabase configuration missing"
Já vem configurado no `.env`. Não precisa de fazer nada.

### Página em branco
1. Abre DevTools (F12)
2. Clica em Console
3. Verifica se há erros
4. Recarrega a página (Ctrl+Shift+R)

### Formulários não funcionam
1. Abre DevTools → Console
2. Verifica erros
3. Confirma que `.env` tem as variáveis

## Para Produção (Netlify)

Lê o ficheiro `NETLIFY_SETUP.md` para um guia completo.

Resumo rápido:
1. Push código para GitHub
2. Conecta GitHub no Netlify
3. Configura variáveis de ambiente
4. Deploy automático!

## Comandos Úteis

```bash
# Build frontend para produção
npm run build

# Ver estilos CSS
ls -la src/styles/

# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

## Suporte

- README principal: `README.md`
- Guia Netlify: `NETLIFY_SETUP.md`
- Todos os comandos: `COMMANDS.md`
- Resumo do projeto: `PROJECT_SUMMARY.md`

---

**Pronto!** Agora tens a aplicação a funcionar! Próximo passo: Netlify! 🚀
