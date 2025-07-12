# IT Tech - Antenna, Security & IT Support Website

A modern, full-stack Next.js website for IT Tech, a professional IT support company specializing in antenna installation, security systems, and IT support services in Wollongong, Australia.

## 🚀 Features

### Core Services Website

- **Antenna Services**: Digital TV antenna installation, signal boosting, extra TV points, mobile signal boosters, Starlink installation
- **Security Services**: CCTV systems, smart home security, alarm systems, access control, video intercoms
- **IT Support**: Computer repairs, networking, NBN setup, cybersecurity, cloud solutions, server maintenance

### 📧 Automated Email System (Resend Integration)

- **Dual Email System**: Automatically sends emails to both admin and customer when quote requests are submitted
- **Admin Notifications**: Structured email templates with customer details for easy record keeping
- **Customer Confirmations**: Professional thank-you emails with company branding and next steps
- **Email Templates**: Custom React-based email templates with responsive design
- **Form Validation**: Real-time validation and error handling for quote requests

### 📝 Blog Functionality (Sanity CMS)

- **Headless CMS**: Powered by Sanity v3.84.0 for flexible content management
- **Rich Content Editor**: Support for images, text formatting, links, and embedded content
- **Author Management**: Author profiles with bio, image, and social links
- **SEO Optimized**: Automatic meta tags, structured data, and sitemap generation
- **Image Optimization**: Automatic image processing and CDN delivery via Sanity
- **Content Preview**: Real-time preview of blog posts before publishing

### 🔍 Advanced SEO Implementation

- **Technical SEO**: Comprehensive metadata, Open Graph, Twitter Cards, and schema markup
- **Local SEO**: Google My Business integration, local business schema, and geo-targeting
- **Structured Data**: Rich snippets for business info, FAQs, and service listings
- **XML Sitemap**: Dynamic sitemap generation including blog posts
- **Robots.txt**: Search engine crawler optimization
- **Core Web Vitals**: Optimized for Google's page experience signals
- **Mobile-First**: Responsive design with mobile optimization

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach with Tailwind CSS 4.0
- **Component Architecture**: Reusable React components with TypeScript
- **Performance Optimized**: Next.js 15 with Turbopack for lightning-fast development
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Modern Styling**: Clean, professional design with consistent branding

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.3 (React 19)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS 4.0
- **Content Management**: Sanity CMS 3.84.0
- **Email Service**: Resend 4.2.0
- **Icons**: React Icons 5.5.0
- **Image Optimization**: Next.js Image + Sanity Image URL
- **Development**: Turbopack for fast builds
- **SEO**: Built-in Next.js metadata API with structured data

## 🏗️ Project Structure

```
├── app/                          # Next.js app directory
│   ├── api/send/                # Email API endpoints
│   ├── blog/                    # Blog pages and dynamic routes
│   ├── components/              # Reusable React components
│   ├── sanity/                  # Sanity client configuration
│   ├── sitemap.ts               # Dynamic XML sitemap
│   ├── robots.ts                # Search engine crawler rules
│   └── [service-pages]/         # Service-specific pages
├── sanity/                      # Sanity CMS configuration
│   ├── schemaTypes/            # Content schemas (posts, authors)
│   ├── lib/                    # Sanity utilities and client
│   └── env.ts                  # Environment configuration
├── public/                      # Static assets and images
├── scripts/                     # Build and utility scripts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Sanity account (free tier available)
- Resend account for email functionality

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd antenna
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   # Resend Email Configuration
   RESEND_API_KEY=your_resend_api_key

   # Sanity CMS Configuration
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=production
   SANITY_API_VERSION=2025-04-14
   ```

   **Note**: You need to obtain API keys for both Sanity and Resend services. For Sanity, you'll need to set up your own studio project.

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Access Sanity Studio**
   ```bash
   # Visit http://localhost:3000/studio for content management
   ```

## 📧 Email System Configuration

### Resend Setup

1. Sign up at [Resend](https://resend.com)
2. Create an API key in your dashboard
3. Add and verify your domain for sending emails
4. Update the email addresses in `/app/api/send/route.ts`

### Email Templates

- **Admin Email**: `/app/components/EmailTemplate.tsx` - Structured data for record keeping
- **Customer Email**: `/app/components/CustomerEmailTemplate.tsx` - Professional thank-you message

### Email Features

- ✅ Form validation and error handling
- ✅ Automatic email notifications to admin
- ✅ Customer confirmation emails
- ✅ Responsive email templates
- ✅ Error logging and monitoring

## 📝 Blog Management with Sanity

### Sanity Studio Setup

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project and note your project ID
3. Copy your project ID and dataset name to environment variables
4. Access the studio at `/studio` route for content management

### Content Types

- **Posts**: Blog articles with rich content, SEO fields, and publishing controls
- **Authors**: Author profiles with bio, image, and social media links
- **Block Content**: Rich text editor with images, links, and formatting options

### Blog Features

- ✅ Rich text editor with image support
- ✅ Author management and attribution
- ✅ SEO optimization with meta fields
- ✅ Responsive image handling
- ✅ Automatic sitemap generation
- ✅ Content preview and drafts
- ✅ Slug generation and validation

## 🔍 SEO Features

### Technical SEO

- **Metadata Management**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Structured Data**: JSON-LD schema for business, local SEO, and FAQs
- **XML Sitemap**: Dynamic sitemap including all pages and blog posts
- **Robots.txt**: Optimized crawler directives
- **Canonical URLs**: Proper URL canonicalization

### Local SEO

- **Business Schema**: Local business structured data with location info
- **Service Area**: Geo-targeting for Wollongong and surrounding areas
- **Contact Information**: Structured contact details for local search
- **Opening Hours**: Business hours markup for rich snippets

### Performance SEO

- **Core Web Vitals**: Optimized loading, interactivity, and visual stability
- **Image Optimization**: Next.js Image component with Sanity CDN
- **Mobile-First**: Responsive design with mobile optimization
- **Fast Loading**: Turbopack development and optimized production builds

## 🎨 Customization

### Colors and Branding

Use the built-in color management scripts:

```bash
npm run find-colors     # Analyze current colors in the project
npm run update-colors   # Update color scheme across components
```

### Favicon Generation

```bash
npm run generate-favicons  # Generate all required favicon formats
```

### Content Customization

- Update service descriptions in component files
- Modify contact information in layout and components
- Customize email templates for your branding
- Update business information in structured data

## 🚀 Deployment

### Environment Variables for Production

Ensure all environment variables are properly set in your deployment platform:

- **Required**: Resend API key for email functionality
- **Required**: Sanity project configuration for CMS
- **Optional**: Google Analytics ID for tracking

### Build Commands

```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

### Deployment Platforms

- **Vercel**: Optimal for Next.js (automatic deployments)
- **Netlify**: Good alternative with form handling
- **AWS/Digital Ocean**: For custom server deployments

## 📊 Features Breakdown

### Quote Request System

- **Multi-step Form**: Service selection with validation
- **Real-time Validation**: Client-side and server-side validation
- **Dual Email System**: Admin notifications and customer confirmations
- **Professional Templates**: Branded email templates with company info

### Service Pages

- **SEO-Optimized**: Each service page with targeted keywords
- **Comprehensive Descriptions**: Detailed service information
- **Call-to-Action Integration**: Strategic placement of contact forms
- **Mobile-Responsive**: Optimized for all device sizes

### Blog System

- **Sanity CMS Integration**: Headless CMS with rich editing
- **Author Management**: Multiple authors with profiles
- **SEO Optimization**: Meta tags, structured data, and sitemaps
- **Image Optimization**: Automatic image processing and CDN

### Performance & SEO

- **Next.js 15**: Latest framework with App Router
- **Turbopack**: Fast development builds
- **Image Optimization**: Automatic image optimization
- **SEO Best Practices**: Technical and content SEO implementation
- **Responsive Design**: Mobile-first approach

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run find-colors  # Analyze project colors
npm run update-colors # Update color scheme
npm run generate-favicons # Generate favicon files
```

## 📈 SEO Monitoring

### Recommended Tools

- **Google Search Console**: Monitor search performance and indexing
- **Google Analytics 4**: Track traffic and user behavior (already integrated)
- **Google PageSpeed Insights**: Monitor Core Web Vitals
- **Google My Business**: Local SEO management

### Key Metrics to Track

- Organic search traffic growth
- Local search rankings
- Page loading speed
- Mobile usability scores
- Click-through rates from search results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper TypeScript types
4. Test thoroughly on different devices
5. Submit a pull request with detailed description

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support and questions:

- **Email**: hi@patrickyu.work
- **Phone**: 1300 000 000
- **Business Hours**: Monday-Friday, 9:00 AM - 5:30 PM AEST

---

**Built with ❤️ using Next.js, Sanity CMS, and Resend**

_This project demonstrates modern web development practices with full-stack functionality, comprehensive SEO implementation, and professional email automation._
