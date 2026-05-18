# Ristorante Bella Vita

A full-stack restaurant booking website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Prisma + SQLite**. Features a public-facing restaurant site with menu, reservations, and gallery, plus a complete admin panel for managing bookings, menu items, and customer inquiries.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | SQLite via Prisma ORM |
| Auth | JWT (bcryptjs + jsonwebtoken) |
| Animations | Framer Motion |
| Email | Nodemailer (SMTP) |

## Features

### Public Site
- **Home** — full-screen hero, story section, feature cards, CTA
- **Menu** — categorized menu with dietary tags, origin regions, wine pairings, allergen info
- **Reservations** — date picker with live availability check, phone input with country codes, confirmation email
- **About** — restaurant story and philosophy
- **Gallery** — responsive photo grid
- **Contact** — contact form with admin email alerts
- **Multi-language** — English / German toggle persisted in localStorage
- **Animations** — page transitions and scroll-triggered reveals (Framer Motion)

### Admin Panel (`/admin/login`)
- **Dashboard** — stats cards (total/pending/confirmed/today reservations, messages)
- **Reservations** — table with filter tabs, confirm/cancel/delete actions
- **Menu** — manage categories and items with inline add/delete
- **Messages** — read/unread toggle for contact submissions

### API Routes
- `POST /api/reservations` — create reservation + send confirmation + admin alert
- `GET /api/reservations/availability?date=` — live slot availability
- `POST /api/contact` — submit contact form + admin alert
- `POST /api/auth/login` — JWT login
- `GET/POST /api/admin/reservations` — list / manage reservations
- `GET/POST /api/admin/menu/categories` — menu CRUD
- `POST/DELETE /api/admin/menu/items` — menu item CRUD
- `GET/PATCH /api/admin/messages` — message management

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/KhaleesiOfCode/restaurant-website-exp.git
cd restaurant-website-exp
npm install
```

### Environment

Copy `.env` and configure (SMTP is optional — emails log to console in dev):

```env
JWT_SECRET="change-this-to-a-random-string"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-app-password
SMTP_FROM=Ristorante Bella Vita <your@email.com>
```

### Database

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### Run

```bash
npm run dev
```

Visit `http://localhost:3000`. Admin at `http://localhost:3000/admin/login` with credentials:

- **Email:** `admin@bellavita.it`
- **Password:** `admin123`

## Project Structure

```
src/
├── app/
│   ├── about/            # About page
│   ├── admin/            # Admin panel (login, dashboard, reservations, menu, messages)
│   ├── api/              # API routes (auth, reservations, contact, admin CRUD)
│   ├── contact/          # Contact page
│   ├── gallery/          # Gallery page
│   ├── menu/             # Menu page
│   ├── reservations/     # Reservations page
│   ├── globals.css       # Global styles + Tailwind utilities
│   ├── layout.tsx        # Root layout (fonts, providers, header, footer)
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Header, Footer, LanguageSwitcher, AmbientToggle
│   ├── menu/             # MenuCategory, MenuItem
│   ├── reservations/     # ReservationForm
│   ├── sections/         # HeroSection, StorySection
│   └── ui/               # Button, PhoneInput, Toast, AnimatedSection, PageTransition, DecorativeAccents
├── data/                 # Static site data (menu items, restaurant info)
├── hooks/                # useTranslations
├── i18n/                 # LanguageProvider, translations (EN/DE)
├── lib/                  # Prisma client, auth utils, email utils
├── middleware.ts         # Admin route protection
prisma/
├── schema.prisma         # Database schema (Admin, Reservation, ContactMessage, MenuCategory, MenuItem)
└── seed.ts               # Seed data (admin user + 18 menu items)
```

## Design

Built with a warm "Tuscan Artisan" aesthetic — terracotta and olive color palette, Playfair Display headings, textured backgrounds, and hand-drawn SVG accents (olive branches, section dividers).

---

*Built as a portfolio project. Not affiliated with any real restaurant.*
