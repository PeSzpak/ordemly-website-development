# Ordemly - Sistema de Gestão de Ordens de Serviço

<div align="center">
  <img src="public/ordemly-logoVM.png" alt="Ordemly Logo" width="500"/>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## Sobre o Projeto

**Ordemly** é um sistema inteligente de gestão de ordens de serviço desenvolvido para transformar a eficiência operacional de empresas de todos os tamanhos. Este repositório contém o site institucional do produto, construído com tecnologias modernas e foco na experiência do usuário.

### Principais Características

- **Multilíngue**: Suporte completo para Português, Inglês e Espanhol
- **Design Responsivo**: Interface moderna e adaptável a todos os dispositivos
- **Temas Personalizáveis**: Suporte a temas claro, escuro e automático
- **Performance Otimizada**: Construído com Next.js 15 para máxima velocidade
- **Sistema de Contato**: Integração com AWS SES para envio de emails
- **SEO Otimizado**: Estrutura preparada para mecanismos de busca

## Tecnologias Utilizadas

### Core Framework
- **Next.js 15.2.4** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5** - Superset tipado do JavaScript

### Styling & UI
- **Tailwind CSS 4.1.9** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e primitivos
- **Lucide React** - Ícones SVG modernos
- **class-variance-authority** - Variants de classe tipadas

### Formulários & Validação
- **React Hook Form** - Biblioteca de formulários performática
- **Zod** - Validação de esquemas TypeScript-first
- **@hookform/resolvers** - Resolvers para validação

### Email & Comunicação
- **AWS SDK (SES)** - Serviço de email da Amazon
- **Sonner** - Notificações toast elegantes

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Transformação CSS
- **pnpm** - Gerenciador de pacotes eficiente

## Estrutura do Projeto

```
ordemly-website/
├── app/                          # App Router do Next.js
│   ├── api/                      # Rotas da API
│   │   └── send-email/           # Endpoint para envio de emails
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página inicial
├── components/                   # Componentes reutilizáveis
│   ├── sections/                 # Seções da página inicial
│   │   ├── hero-section.tsx      # Seção hero
│   │   ├── benefits-section.tsx  # Seção de benefícios
│   │   ├── features-section.tsx  # Seção de funcionalidades
│   │   ├── demo-section.tsx      # Seção de demonstração
│   │   └── ...                   # Outras seções
│   ├── ui/                       # Componentes de interface
│   ├── navigation.tsx            # Navegação principal
│   └── footer.tsx                # Rodapé
├── lib/                          # Utilitários e configurações
│   ├── i18n/                     # Sistema de internacionalização
│   │   ├── language-context.tsx  # Contexto de idioma
│   │   └── translations.ts       # Traduções
│   └── utils.ts                  # Funções utilitárias
├── public/                       # Arquivos estáticos
│   ├── images/                   # Screenshots e imagens do produto
│   └── *.png                     # Logos e ícones
└── hooks/                        # Custom hooks
    └── use-mobile.ts             # Hook para detecção mobile
```

## Funcionalidades do Site

### Sistema de Internacionalização
- Suporte completo a 3 idiomas (PT, EN, ES)
- Contexto React para mudança dinâmica de idioma
- Traduções abrangentes para todas as seções

### Seções Principais

1. **Hero Section** - Apresentação principal do produto
2. **Benefits Section** - Benefícios e vantagens do Ordemly
3. **Profile Views** - Diferentes perfis de usuário (Admin, Profissional, Cliente)
4. **Features Section** - Funcionalidades detalhadas com tabs interativas
5. **Customization Section** - Opções de personalização
6. **Demo Section** - Formulário para agendamento de demonstração
7. **Pricing Section** - Planos e preços
8. **Contact Section** - Informações de contato e formulário

### Funcionalidades Técnicas

- **Formulários Inteligentes**: Validação em tempo real com feedback visual
- **Modais Dinâmicos**: Componentes de overlay para ações específicas
- **Navegação Responsiva**: Adaptação automática para dispositivos móveis
- **Otimização de Imagens**: Carregamento otimizado de assets
- **API Routes**: Endpoints para processamento de formulários

## Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd ordemly-website-development
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Adicione suas credenciais AWS SES no arquivo `.env.local`:
```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
```

4. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
pnpm dev      # Servidor de desenvolvimento
pnpm build    # Build para produção
pnpm start    # Servidor de produção
pnpm lint     # Verificação de código
```

## Personalização

### Temas
O projeto suporta temas claro, escuro e automático através do `next-themes`. Para personalizar cores:

1. Edite o arquivo `tailwind.config.js`
2. Modifique as variáveis CSS em `app/globals.css`
3. Use o contexto de tema nos componentes

### Traduções
Para adicionar novos idiomas ou modificar traduções:

1. Edite `lib/i18n/translations.ts`
2. Adicione as novas chaves de tradução
3. Importe no contexto de linguagem

### Componentes UI
Os componentes base estão em `components/ui/` e seguem o padrão do Radix UI com Tailwind CSS.

## Sistema de Email

O projeto inclui integração com AWS SES para envio de emails através da rota `/api/send-email`. 

### Configuração
1. Configure as credenciais AWS nas variáveis de ambiente
2. Verifique o domínio/email no console AWS SES
3. Teste o envio através dos formulários do site

## Sobre o Produto Ordemly

O **Ordemly** é uma solução completa para gestão de ordens de serviço que oferece:

- **Dashboard Inteligente** com métricas em tempo real
- **Gestão de Ordens** com workflow personalizável
- **Controle de Equipamentos** com histórico completo
- **Múltiplos Perfis** (Administrador, Profissional, Cliente)
- **Interface Responsiva** para uso em campo
- **Personalização Total** com tema e domínio próprio
- **Relatórios Avançados** para tomada de decisão

## Empresa

**MM Tecnologia de Informação Ltda**
- São José dos Pinhais, PR, Brasil
- contato@mmti.io
- +55 41 9 9606-2151

## Licença

Este projeto é propriedade da MM Tecnologia de Informação Ltda. Todos os direitos reservados.

---

<div align="center">
  <p>Desenvolvido com dedicação pela <strong>MM Tecnologia</strong></p>
  <p>Sistema inteligente de gestão de ordens de serviço</p>
</div>
