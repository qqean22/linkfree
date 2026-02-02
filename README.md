# LinkFree

A self-hosted linktree-like site builder. One link, your links, your database.

## Features

- 🚀 **Next.js 14** – Fast, reactive UI
- 🗄️ **Supabase (PostgreSQL)** – Pages and links stored in your own database
- 📱 **Responsive** – Works on all devices
- 🎨 **Customizable** – Edit `tailwind.config.ts` for colors and style

## Getting Started

### 1. Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **Settings → Database** copy:
   - **Connection string → URI** (Transaction / pooler) → use as `DATABASE_URL`
   - **Direct connection** URI → use as `DIRECT_URL`
3. Create `.env` from the example:

```bash
cp .env.example .env
```

4. Paste your Supabase URIs into `.env` (replace `[PASSWORD]`, `[PROJECT_REF]`, `[REGION]`).

### 2. Install and migrate

```bash
npm install
npx prisma generate
npx prisma db push
```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page is a standalone landing; link pages are at `/studio/[slug]` and read from the database (with fallback to `data/links.json` if no DB row exists).

### 4. Seed (optional)

To seed the DB from `data/links.json`:

```bash
npm run db:seed
```

## Deploy (Vercel)

1. Push to GitHub and import the repo in [Vercel](https://vercel.com).
2. Add env vars: `DATABASE_URL` and `DIRECT_URL` from Supabase.
3. Deploy. Run migrations in your build or in the Supabase SQL editor using `prisma migrate deploy` or the generated SQL.

## Tech Stack

- **Next.js 14** – React framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **Supabase** – PostgreSQL database
- **Prisma** – ORM and migrations

## License

MIT
