# Tłumaczenie Przysięgłe 24 - Marketing Website

Professional, SEO-optimized marketing site for a Polish sworn translator business built with Next.js.

## Features

- **Multi-language support**: Polish (default), English, Ukrainian with language switcher
- **SEO optimized**: Structured data, hreflang tags, canonical URLs, sitemap
- **Local SEO**: Kraków-focused with Google Maps integration
- **Responsive design**: Mobile-first with Tailwind CSS
- **Performance**: Static generation with Next.js export
- **Forms**: Contact form and quote request with file upload (handlers to be implemented)
- **Legal compliance**: GDPR/RODO ready with privacy policy, terms, and cookie policy
- **Language switcher**: Global language selector in header (mobile + desktop)

## Tech Stack

- Next.js 13.5 (App Router)
- TypeScript
- Tailwind CSS
- Radix UI components (shadcn/ui)
- Lucide React icons

## Project Structure

```
/app
  /[locale]         # Localized routes (en, uk)
  /cennik           # Pricing page
  /kontakt          # Contact page
  /o-mnie           # About page
  /uslugi           # Services pages
  /polityka-*       # Legal pages
/components         # Reusable components
  /ui               # shadcn/ui components
/config             # Site configuration
  site.ts           # Business data (NAP, prices, etc.)
  locales.ts        # i18n configuration
  translations.ts   # All translations
/lib                # Utilities
```

## Configuration

All business data is centralized in `/config/site.ts`:

- Business information (name, address, phone, email)
- MoJ translator list number
- Pricing (services and extras)
- Payment methods
- Social media links
- SEO settings

Update this file with real data before deployment.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Update configuration in `config/site.ts` with real business data

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Pages

### Polish (default at `/`)
- Home page with all sections
- `/uslugi` - Services overview
- `/uslugi/tlumaczenia-na-ukrainski` - Ukrainian translations
- `/uslugi/tlumaczenia-na-angielski` - English translations
- `/cennik` - Pricing
- `/kontakt` - Contact
- `/o-mnie` - About
- `/polityka-prywatnosci` - Privacy policy
- `/regulamin` - Terms of service
- `/polityka-cookies` - Cookie policy

### English (`/en`)
- All pages translated with English slugs

### Ukrainian (`/uk`)
- All pages translated with Ukrainian slugs

## SEO Features

- **Structured Data**: Organization, LocalBusiness, ProfessionalService, FAQPage schemas
- **hreflang tags**: Proper language alternates for all pages
- **Canonical URLs**: Correct canonical for each page
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: At `/robots.txt`
- **Meta tags**: Optimized titles, descriptions, OG tags per page

## Forms (To be implemented)

Forms are currently front-end only. Backend handlers need to be implemented:

1. **Contact form** (`/components/contact-section.tsx`)
2. **Quote form** (`/components/quote-form.tsx`)

Implementation needed:
- Server actions or API routes for form submission
- File upload to S3-compatible storage
- Email notifications (admin + user confirmation)
- Anti-virus scanning for uploaded files
- GDPR-compliant data handling

## Google Analytics (To be implemented)

Add GA4 with Consent Mode v2:
- Install `@next/third-parties`
- Add consent banner component
- Implement cookie preference storage
- Configure GA4 with consent mode

## Deployment

The site is configured for static export (`output: 'export'` in `next.config.js`).

Deploy to:
- Vercel (recommended)
- Netlify
- Any static hosting

Set environment variables for:
- Email service credentials (when forms implemented)
- Storage service credentials (when file upload implemented)
- Analytics ID (when GA4 implemented)

## Customization

### Colors
Update Tailwind theme in `tailwind.config.ts` to match brand colors.

### Images
Replace placeholder images with:
- Translator portrait (`/o-mnie`)
- Office/workspace photos
- Document samples (if allowed)

### Google Maps
Update the embed URL in `components/contact-section.tsx` with actual business location coordinates.

## Maintenance

Update prices in `config/site.ts` when needed. All pricing displays are automatically updated throughout the site.

## License

Proprietary - All rights reserved
