# Plaxo OTP Landing Page

Landing page moderna e profissional para o Plaxo OTP construída com Preact, TypeScript e Tailwind CSS.

## 🚀 Stack Técnica

- **Preact** - Framework reativo leve
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna
- **GitHub Actions** - CI/CD
- **CapRover** - Deploy e hosting
- **Nginx** - Servidor web
- **Formspree** - Formulários de contato
- **GitHub API** - Downloads dinâmicos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Design System

O projeto utiliza o Design System Plaxo com as seguintes cores:

- **Primary**: `#6366f1` (indigo-500)
- **Primary Hover**: `#4f46e5` (indigo-600)
- **Background**: `#0f172a` (slate-900)
- **Surface**: `#1e293b` (slate-800)
- **Border**: `#334155` (slate-700)
- **Text Primary**: `#f8fafc` (slate-50)
- **Text Secondary**: `#94a3b8` (slate-400)

## 🚀 Deploy

### CapRover Setup

1. Configure os secrets no GitHub:

   - `CAPROVER_SERVER`: URL do seu servidor CapRover
   - `CAPROVER_APP_NAME`: Nome da aplicação no CapRover
   - `CAPROVER_APP_TOKEN`: Token de deploy da aplicação

2. Push para a branch `main` para deploy automático

### Deploy Manual

```bash
# Build da aplicação
npm run build

# Deploy via CapRover CLI
caprover deploy
```

## 📁 Estrutura do Projeto

```
plaxo-otp-landing/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Hero.tsx        # Seção hero
│   │   ├── Features.tsx    # Recursos do app
│   │   ├── Screenshots.tsx # Screenshots
│   │   ├── Comparison.tsx  # Comparação
│   │   ├── Download.tsx    # Downloads dinâmicos
│   │   ├── AccessRequest.tsx # Formulário de acesso
│   │   └── Footer.tsx      # Rodapé
│   ├── utils/
│   │   └── github.ts       # Utilitários GitHub API
│   ├── config/
│   │   └── formspree.ts    # Configuração Formspree
│   ├── styles/
│   │   └── index.css       # Estilos globais
│   ├── app.tsx             # Componente principal
│   └── main.tsx            # Entry point
├── public/
│   ├── screenshots/        # Imagens das telas
│   └── favicon.svg         # Favicon
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions
├── Dockerfile              # Container de produção
├── captain-definition      # Configuração CapRover
├── nginx.conf              # Configuração Nginx
├── SETUP_FORMSPREE.md      # Guia configuração Formspree
└── vite.config.ts          # Configuração Vite
```

## 🔧 Configuração

### 1. Formspree (Formulário de Acesso)

1. Crie conta em [formspree.io](https://formspree.io)
2. Configure o Form ID em `src/config/formspree.ts`
3. Veja guia completo em `SETUP_FORMSPREE.md`

### 2. Downloads Dinâmicos

Os downloads são buscados automaticamente da API do GitHub:

- Versões atualizadas automaticamente
- Tamanhos de arquivo reais
- Links diretos para assets
- Fallback para versões fixas

### 3. Variáveis de Ambiente (GitHub Secrets)

- `CAPROVER_SERVER`: https://seu-caprover.com
- `CAPROVER_APP_NAME`: plaxo-otp-landing
- `CAPROVER_APP_TOKEN`: token-da-aplicacao

### Performance

- Bundle otimizado < 100KB
- Lazy loading de imagens
- Compressão Gzip
- Cache headers otimizados
- Security headers

### SEO

- Meta tags completas
- Open Graph + Twitter Cards
- Structured data (JSON-LD)
- Sitemap.xml automático
- Robots.txt

## 📱 Responsividade

- Mobile-first design
- Breakpoints Tailwind padrão
- Touch-friendly (botões 44px+)
- Detecção automática de OS

## 🛡️ Segurança

- Security headers no Nginx
- CSP (Content Security Policy)
- X-Frame-Options
- X-Content-Type-Options
- XSS Protection

## ✨ Funcionalidades

### Formulário de Solicitação de Acesso

- Integração com Formspree para coleta de emails
- Interface responsiva e acessível
- Validação de campos obrigatórios
- Feedback visual para usuário
- Auto-reply configurável

### Downloads Dinâmicos

- Busca automática da versão mais recente no GitHub
- Detecção automática do sistema operacional
- Tamanhos de arquivo atualizados em tempo real
- Fallback para versões estáticas
- Loading states durante carregamento

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.
