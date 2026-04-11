# Headless Portfolio CMS

> © 2026 Abolaji Akorede. All rights reserved. Unauthorized use, reproduction, or distribution of this project or any of its components is strictly prohibited.

A decoupled, high-performance content management system and personal portfolio architecture. This system intentionally separates the content management backend from the client-facing presentation layer, ensuring maximum scalability, enhanced security, and platform-agnostic data delivery.

---

## System Architecture

This project follows a strict headless model across three independent layers:

| Layer | Technology | Role |
|---|---|---|
| Presentation | Next.js (Vercel) | Edge-cached frontend with ISR |
| API | Laravel 11 (Docker on Render) | REST API, auth, business logic |
| Database | Supabase (PostgreSQL) | Managed storage with UUID routing |

```
Client Request
      │
      ▼
[ Vercel Edge Cache (ISR) ]
      │
      ▼
[ Next.js Frontend ]
      │
      │  API Fetch / Auth
      ▼
[ Laravel API — Docker on Render ]
      │
      │  Eloquent ORM
      ▼
[ Supabase PostgreSQL ]
```

---

## Tech Stack

### Client — Next.js

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Framer Motion
- **Data Fetching:** Native Fetch API with ISR (`revalidate: 60`)
- **State:** React Hooks, Context API

### API — Laravel

- **Framework:** Laravel 11.x (PHP 8.2+)
- **Authentication:** Laravel Sanctum (Bearer Tokens)
- **Database:** PostgreSQL via Eloquent ORM
- **Media:** Cloudinary API
- **Runtime:** Docker

---

## Core Features

- **Edge-speed delivery** — Static generation with background revalidation. Zero database round-trips for end users.
- **Polymorphic data relationships** — Projects mapped to many-to-many technology tags and media assets.
- **Secure admin dashboard** — Full bearer token protection for all portfolio management endpoints.
- **Zero-downtime deployments** — CI/CD pipelines connected to `main` branches on both repos.
- **Cold-start mitigation** — Automated CRON keep-alive routines on the Render API service.

---

## Infrastructure

| Service | Platform | Notes |
|---|---|---|
| Frontend | Vercel | Global CDN, Next.js-native edge caching |
| Backend API | Render | Dockerized, persistent web service |
| Database | Supabase | Managed PostgreSQL, connection pooling |
| Media | Cloudinary | Asset storage and transformation |

---

## Local Development

This system requires both the frontend and API to run concurrently.

### 1. Clone the Repositories

```bash
# Frontend
git clone https://github.com/akbolaji-04/My-portfolio

# Backend API
git clone https://github.com/akbolaji-04/Portfolio-Backend
```

### 2. Environment Setup

**Frontend — `.env.local`**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

**Backend — `.env`**
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=portfolio_cms
DB_USERNAME=root
DB_PASSWORD=
```

### 3. Run the Development Servers

**Start the Laravel API:**
```bash
composer install
php artisan migrate --seed
php artisan serve
```

**Start the Next.js Client:**
```bash
npm install
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| API | http://localhost:8000 |

---

## Author

**Abolaji Akorede**  
Architected and developed end-to-end.

> © 2024 Abolaji Akorede. All rights reserved.  
> This project, including its architecture, source code, and documentation, is the exclusive intellectual property of Abolaji Akorede. No part of this repository may be copied, modified, distributed, or used without explicit written permission from the author.
