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
- **Radix UI** - Accessible and primitive components
- **Lucide React** - Modern SVG icons
- **class-variance-authority** - Typed class variants

### Forms & Validation
- **React Hook Form** - Performance-oriented forms library
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Resolvers for validation

### Email & Communication
- **AWS SDK (SES)** - Amazon's email service
- **Sonner** - Elegant toast notifications

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS transformation
- **pnpm** - Efficient package manager

## Project Structure

```
ordemly-website/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── send-email/           # Email sending endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Main layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── sections/                 # Home page sections
│   │   ├── hero-section.tsx      # Hero section
│   │   ├── benefits-section.tsx  # Benefits section
│   │   ├── features-section.tsx  # Features section
│   │   ├── demo-section.tsx      # Demo section
│   │   └── ...                   # Other sections
│   ├── ui/                       # Interface components
│   ├── navigation.tsx            # Main navigation
│   └── footer.tsx                # Footer
├── lib/                          # Utilities and configurations
│   ├── i18n/                     # Internationalization system
│   │   ├── language-context.tsx  # Language context
│   │   └── translations.ts       # Translations
│   └── utils.ts                  # Utility functions
├── public/                       # Static files
│   ├── images/                   # Product screenshots and images
│   └── *.png                     # Logos and icons
└── hooks/                        # Custom hooks
    └── use-mobile.ts             # Mobile detection hook
```

## Website Features

### Internationalization System
- Complete support for 3 languages (PT, EN, ES)
- React context for dynamic language switching
- Comprehensive translations for all sections

### Main Sections

1. **Hero Section** - Main product presentation
2. **Benefits Section** - Ordemly benefits and advantages
3. **Profile Views** - Different user profiles (Admin, Professional, Customer)
4. **Features Section** - Detailed features with interactive tabs
5. **Customization Section** - Customization options
6. **Demo Section** - Demo scheduling form
7. **Pricing Section** - Plans and pricing
8. **Contact Section** - Contact information and form

### Technical Features

- **Smart Forms**: Real-time validation with visual feedback
- **Dynamic Modals**: Overlay components for specific actions
- **Responsive Navigation**: Automatic adaptation for mobile devices
- **Image Optimization**: Optimized asset loading
- **API Routes**: Endpoints for form processing

## How to Run

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ordemly-website-development
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Add your AWS SES credentials to the `.env.local` file:
```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
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
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # Code verification
```

## Customization

### Themes
The project supports light, dark and automatic themes through `next-themes`. To customize colors:

1. Edit the `tailwind.config.js` file
2. Modify CSS variables in `app/globals.css`
3. Use the theme context in components

### Translations
To add new languages or modify translations:

1. Edit `lib/i18n/translations.ts`
2. Add new translation keys
3. Import in the language context

### UI Components
Base components are in `components/ui/` and follow the Radix UI pattern with Tailwind CSS.

## Email System

The project includes AWS SES integration for email sending through the `/api/send-email` route. 

### Configuration
1. Configure AWS credentials in environment variables
2. Verify domain/email in AWS SES console
3. Test sending through website forms

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
  <p>Developed with dedication by <strong>MM Tecnologia</strong></p>
  <p>Intelligent service order management system</p>
</div>
