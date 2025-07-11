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
- **Customer Confirmations**: Professional thank-you emails with company information and next steps
- **Email Templates**: Custom React-based email templates with company branding

### 📝 Blog Functionality (Sanity CMS)

- **Headless CMS**: Powered by Sanity for content management
- **Rich Content Editor**: Support for images, text formatting, links, and embedded content
- **Author Management**: Author profiles and attribution system
- **SEO Optimized**: Automatic meta tags, structured data, and sitemap generation
- **Image Optimization**: Automatic image processing and optimization via Sanity

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Reusable React components
- **Modern Styling**: Clean, professional design with consistent branding
- **Performance Optimized**: Next.js 15 with Turbopack for fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.3 (React 19)
- **Styling**: Tailwind CSS 4.0
- **TypeScript**: Full TypeScript support
- **Content Management**: Sanity CMS 3.84.0
- **Email Service**: Resend 4.2.0
- **Icons**: React Icons 5.5.0
- **Image Optimization**: Next.js Image + Sanity Image URL
- **Development**: Turbopack for fast builds

## 🏗️ Project Structure

```
├── app/                          # Next.js app directory
│   ├── api/send/                # Email API endpoints
│   ├── blog/                    # Blog pages and dynamic routes
│   ├── components/              # Reusable React components
│   ├── sanity/                  # Sanity client configuration
│   └── [service-pages]/         # Service-specific pages
├── sanity/                      # Sanity CMS configuration
│   ├── schemaTypes/            # Content schemas (posts, authors)
│   └── lib/                    # Sanity utilities
├── public/                      # Static assets
├── scripts/                     # Build and utility scripts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account
- Resend account

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
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-04-14
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=production
   SANITY_API_VERSION=2025-04-14

   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=G-Z3JE545VNL
   ```

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
2. Create an API key
3. Add your domain for sending emails
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
2. Create a new project
3. Copy your project ID and dataset name
4. Access the studio at `/studio` route

### Content Types

- **Posts**: Blog articles with rich content
- **Authors**: Author profiles and information
- **Block Content**: Rich text with images and formatting

### Blog Features

- ✅ Rich text editor with image support
- ✅ Author management and attribution
- ✅ SEO optimization
- ✅ Responsive image handling
- ✅ Automatic sitemap generation
- ✅ Content preview and drafts

## 🎨 Customization

### Colors and Branding

Use the built-in color management scripts:

```bash
npm run find-colors     # Analyze current colors
npm run update-colors   # Update color scheme
```

### Favicon Generation

```bash
npm run generate-favicons
```

## 🚀 Deployment

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:

- Resend API key
- Sanity project configuration
- Google Analytics ID (optional)

### Build Commands

```bash
npm run build    # Build for production
npm run start    # Start production server
```

## 📊 Features Breakdown

### Quote Request System

- Multi-step form with service selection
- Real-time validation and error handling
- Dual email notifications (admin + customer)
- Professional email templates

### Service Pages

- Comprehensive service descriptions
- SEO-optimized content
- Call-to-action integration
- Mobile-responsive design

### Blog System

- Sanity CMS integration
- Rich content editing
- Author management
- SEO optimization
- Image optimization

### Performance

- Next.js 15 with App Router
- Turbopack for fast development
- Image optimization
- SEO best practices
- Responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support and questions:

- Email: info@example.com.au
- Phone: 1300 000 000

---

**Built with ❤️ using Next.js, Sanity CMS, and Resend**
