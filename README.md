# SwipeAway

A premium social debt-relief marketplace MVP built with Next.js, TypeScript, and Tailwind CSS.

## Phase 1 status

This repository includes the first production-minded milestone:
- premium landing page and branding
- marketing sections for How it Works, featured stories, testimonials, and FAQ
- responsive mobile-first layout
- reusable UI building blocks for later app pages
- foundation for Supabase, Stripe, and admin/system architecture

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  how-it-works/page.tsx
components/
  navbar.tsx
  footer.tsx
  hero.tsx
  section-heading.tsx
lib/
  utils.ts
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the required values for Supabase and Stripe when you begin the authenticated and payment phases.

## Next phases

1. Authentication and user profiles
2. Debt application submission and verification workflow
3. Swipe discovery and saved/report interactions
4. Donor dashboards and contribution tracking
5. Stripe payment test mode and webhooks
6. Admin dashboard, fraud monitoring, and audit logs
7. Production prep and deployment

## Deployment notes

- Vercel: recommended for this Next.js app
- Netlify: supported with a production build and compatible SSR/static configuration

## Important product note

This repo is intentionally a production-minded MVP foundation and demo experience. Real payment processing, debt settlement, verification, compliance review, and legal disclosures require formal provider approval and operational review before launching with real money movement.
