# Ordemly - Service Order Management System

<div align="center">
  <img src="public/ordemly-logoVM.png" alt="Ordemly Logo" width="500"/>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## About the Project

**Ordemly** is an intelligent service order management system developed to transform the operational efficiency of companies of all sizes. This repository contains the product's institutional website, built with modern technologies and focused on user experience.

### Key Features

- **Multilingual**: Complete support for Portuguese, English and Spanish
- **Responsive Design**: Modern interface adaptable to all devices
- **Customizable Themes**: Support for light, dark and automatic themes
- **Optimized Performance**: Built with Next.js 15 for maximum speed
- **Contact System**: Integration with AWS SES for email sending
- **SEO Optimized**: Structure prepared for search engines

## Technologies Used

### Core Framework
- **Next.js 15.2.4** - React framework for production
- **React 19** - JavaScript library for user interfaces
- **TypeScript 5** - Typed superset of JavaScript

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Comprehensive set of accessible and primitive components
- **Lucide React 0.454.0** - Modern SVG icons
- **class-variance-authority 0.7.1** - Typed class variants
- **clsx 2.1.1** - Utility for constructing className strings
- **tailwind-merge 2.5.5** - Merge Tailwind CSS classes

### Forms & Validation
- **React Hook Form 7.60.0** - Performance-oriented forms library
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers 3.10.0** - Resolvers for validation

### Email & Communication
- **AWS SDK (SES) 3.913.0** - Amazon's email service
- **Sonner 1.7.4** - Elegant toast notifications

### Additional Libraries
- **next-themes 0.4.6** - Theme management for Next.js
- **date-fns 4.1.0** - Date utility library
- **vaul** - Drawer component
- **recharts 2.15.4** - Chart library
- **embla-carousel-react 8.5.1** - Carousel component

### Development
- **ESLint** - Code linting
- **PostCSS 8.5** - CSS transformation
- **pnpm** - Efficient package manager

## Project Structure

```
ordemly-website-development/
├── app/                              # Next.js App Router
│   ├── api/                          # API routes
│   │   └── send-email/               # Email sending endpoint
│   │       └── route.ts              # POST handler for email sending
│   ├── globals.css                   # Global styles and CSS variables
│   ├── layout.tsx                    # Root layout with providers
│   └── page.tsx                      # Homepage with all sections
├── components/                       # Reusable React components
│   ├── sections/                     # Homepage section components
│   │   ├── hero-section.tsx          # Main hero section
│   │   ├── benefits-section.tsx      # Benefits showcase
│   │   ├── features-section.tsx      # Feature highlights with tabs
│   │   ├── demo-section.tsx          # Demo request section
│   │   ├── contact-section.tsx       # Contact form section
│   │   ├── customization-section.tsx # Customization options
│   │   ├── pricing-section.tsx       # Pricing plans
│   │   ├── profile-views-section.tsx # User profile demonstrations
│   │   └── stats-section.tsx         # Statistics and metrics
│   ├── ui/                           # Base UI components (shadcn/ui)
│   │   ├── badge.tsx                 # Badge component
│   │   ├── button.tsx                # Button variations
│   │   ├── card.tsx                  # Card layouts
│   │   ├── dialog.tsx                # Modal dialogs
│   │   ├── drawer.tsx                # Mobile drawer
│   │   ├── dropdown-menu.tsx         # Dropdown menus
│   │   ├── input.tsx                 # Form inputs
│   │   ├── label.tsx                 # Form labels
│   │   ├── tabs.tsx                  # Tab navigation
│   │   └── textarea.tsx              # Text areas
│   ├── navigation.tsx                # Header navigation with language selector
│   ├── footer.tsx                    # Footer with company info
│   ├── language-selector.tsx         # Language switching component
│   ├── theme-provider.tsx            # Theme context provider
│   ├── quote-request-modal.tsx       # Quote request modal
│   └── print-order-modal.tsx         # Print order modal
├── lib/                              # Utilities and configurations
│   ├── i18n/                         # Internationalization system
│   │   ├── language-context.tsx      # Language context and provider
│   │   └── translations.ts           # Translation strings (PT/EN/ES)
│   ├── email-templates/              # HTML email templates
│   │   ├── template-contato.html     # Contact form email template
│   │   └── template-demo.html        # Demo request email template
│   └── utils.ts                      # Utility functions (cn, etc.)
├── hooks/                            # Custom React hooks
│   └── use-mobile.ts                 # Mobile device detection hook
├── public/                           # Static assets
│   ├── images/                       # Product screenshots
│   │   ├── dashboard-admin-*.png     # Admin dashboard screenshots
│   │   ├── dashboard-professional.png # Professional dashboard
│   │   ├── equipment-list.png        # Equipment management
│   │   ├── orders-kanban.png         # Kanban board view
│   │   ├── support-page.png          # Support interface
│   │   └── *EN.png, *ES.png, *PT.png # Localized screenshots
│   ├── logo_ordemly.png              # Main logo
│   ├── ordemly-logoVM.png            # Vertical logo variant
│   └── mm_logo_black.svg             # MM Tecnologia logo
├── styles/                           # Additional styles
│   └── globals.css                   # Global CSS imports
├── components.json                   # shadcn/ui configuration
├── next.config.mjs                   # Next.js configuration
├── postcss.config.mjs                # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies and scripts
```

## Website Features

### Internationalization System
- Complete support for 3 languages (PT, EN, ES)
- React context for dynamic language switching
- Comprehensive translations for all sections
- Localized screenshots and images

### Main Sections

1. **Hero Section** - Main product presentation with animated elements
2. **Stats Section** - Key metrics and achievements
3. **Benefits Section** - Ordemly benefits and advantages
4. **Profile Views Section** - Different user profiles (Admin, Professional, Customer)
5. **Features Section** - Detailed features with interactive tabs
6. **Customization Section** - Customization options and branding
7. **Demo Section** - Demo scheduling form with validation
8. **Pricing Section** - Plans and pricing comparison
9. **Contact Section** - Contact information and form

### Technical Features

- **Smart Forms**: Real-time validation with React Hook Form and Zod
- **Dynamic Modals**: Overlay components for quotes and orders
- **Responsive Navigation**: Mobile-first design with drawer navigation
- **Image Optimization**: Next.js Image component for optimized loading
- **Theme System**: Light/dark/auto themes with next-themes
- **API Routes**: RESTful endpoints for form processing
- **Email Templates**: HTML templates with dynamic content replacement

## How to Run

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PeSzpak/ordemly-website-development
cd ordemly-website-development
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**
Create a `.env.local` file in the root directory:
```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
EMAIL_SOURCE=your-verified-email@domain.com
```

4. **Run the development server**
```bash
pnpm dev
```

5. **Access in browser**
```
http://localhost:3000
```

### Available Scripts

```bash
pnpm dev      # Development server (localhost:3000)
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint code verification
```

## Email System

The project includes AWS SES integration for email sending through the `/api/send-email` route with support for two types of emails:

### Email Types
- **Contact Form** (`type: "contact"`) - General inquiries
- **Demo Request** (`type: "demo"`) - Demo scheduling requests

### Email Templates
- `template-contato.html` - Contact form email template
- `template-demo.html` - Demo request email template

Both templates support dynamic content replacement with placeholders like `[contact-nome]`, `[demo-email]`, `[current-year]`, etc.

### Configuration
1. Configure AWS credentials in environment variables
2. Verify domain/email in AWS SES console
3. Templates are cached for performance
4. Automatic CC to company email

## UI Components

The project uses a combination of:
- **shadcn/ui** components in `components/ui/`
- **Radix UI** primitives for accessibility
- **Custom components** for specific functionality
- **Responsive design** with Tailwind CSS

### Theme Customization
- CSS variables in `app/globals.css`
- Tailwind configuration in `tailwind.config.js`
- Theme switching with `next-themes`

## Development Notes

### Code Organization
- **Modular architecture** with clear separation of concerns
- **TypeScript throughout** for type safety
- **Custom hooks** for reusable logic
- **Context providers** for global state management

### Performance Optimizations
- **Template caching** for email templates
- **Image optimization** with Next.js Image
- **Code splitting** with Next.js App Router
- **Efficient bundling** with modern tooling

## About the Ordemly Product

**Ordemly** is a complete solution for service order management that offers:

- **Smart Dashboard** with real-time metrics
- **Order Management** with customizable workflow
- **Equipment Control** with complete history
- **Multiple Profiles** (Administrator, Professional, Customer)
- **Responsive Interface** for field use
- **Total Customization** with custom theme and domain
- **Advanced Reports** for decision making

## Company

**MM Tecnologia de Informação Ltda**
- São José dos Pinhais, PR, Brazil
- contato@mmti.io
- +55 41 9 9606-2151

## License

This project is owned by MM Tecnologia de Informação Ltda. All rights reserved.

---

<div align="center">
  <p>Developed with dedication by <strong>MM Tecnologia de Informação</strong></p>
  <p>Intelligent service order management system</p>
</div>
