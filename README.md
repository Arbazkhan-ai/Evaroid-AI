# Evaroid.AI — Company Website (Next.js 14 + Backend)

A clean, modern software-company website with a working backend.

## Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM, SQLite (swap to Postgres by changing `DATABASE_URL` + provider), Zod validation

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env

# 3. Create the database
npx prisma db push

# 4. Run dev server
npm run dev
```

Open http://localhost:3000

## API Endpoints

| Method | Endpoint         | Description                              |
|--------|------------------|------------------------------------------|
| POST   | /api/contact     | Submit contact form (validated + stored) |
| GET    | /api/contact     | List last 50 messages                    |
| POST   | /api/newsletter  | Subscribe email (idempotent)             |

## Structure

```
src/
├── app/
│   ├── page.tsx            # Home
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── work/               # Portfolio page
│   ├── contact/            # Contact page
│   └── api/
│       ├── contact/route.ts
│       └── newsletter/route.ts
├── components/             # Navbar, Hero, Services, Work, Testimonials, CTA, Footer, forms
└── lib/prisma.ts           # Prisma client singleton
```

## Production Notes
- Add auth (e.g., NextAuth) before exposing `GET /api/contact`
- Hook up an email provider (Resend/Nodemailer) in the contact route
- Switch `DATABASE_URL` to Postgres/MySQL in `prisma/schema.prisma`
- Deploy to Vercel: `vercel deploy`
