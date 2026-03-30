# 🎂 Jacob's 21st Birthday — Interactive RSVP Website

> A fully custom, production-grade birthday invitation and RSVP web app built with love for my brother Jacob's 21st celebration on July 29, 2026.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat&logo=framer)

🔗 **Live Site:** https://jacob-21-birthday.vercel.app/

---

## 🐾 About This Project

Jacob is my wonderful 21-year-old brother with autism. He owns 44 Gund Paw Patrol plushies, remembers everyone's birthdays, gets genuinely excited every time he sees someone he loves, and runs his own inclusive apparel brand. This site was built to celebrate him in the most _him_ way possible.

Rather than a generic invitation, I wanted to create a fully personalized, interactive experience that guests would actually enjoy — something that felt like Jacob himself made it.

---

## ✨ Features

**Interaction & Animation**

- Sleeping dog reveal — real photos of Gus & Umi (his dogs) with a wiggle animation as they wake up
- Framer Motion page transitions, scroll-triggered animations, and spring physics throughout
- Live countdown timer with animated digit transitions ticking down to the party date
- Confetti explosion on successful RSVP submission
- Floating witty RSVP button that cycles through funny messages and hides when you reach the form

**Content Sections**

- Photo carousel — scrollable memory gallery with dot navigation
- Favorite things of Jacob — possible gifts for him o.O
- Fun facts about Jacob — real stories, not filler
- Things Jacob Taught Us — a love letter in list form
- Selfie grid — his Paw Patrol photo wall in a responsive CSS flex layout
- It's Me Apparel PH — promoting Jacob's own autism awareness brand

**RSVP Form**

- Connected to Supabase with real-time database storage
- React Query (`useMutation`) for clean async state management — no manual loading/error/success states
- Paw Patrol character picker because of course
- Row Level Security — guests can only insert, never read other responses
- Form validation with clear error messages

**Design**

- Colors and fonts taken directly from Jacob's own brand — [It's Me Apparel PH](https://itsme-apparelph.com)
- Fully responsive — mobile first, scales to desktop with generous spacing
- CSS Modules for scoped, maintainable styles

---

## 🛠️ Tech Stack

| Technology                            | Purpose                        |
| ------------------------------------- | ------------------------------ |
| React 19 + TypeScript                 | Frontend framework             |
| Vite 8                                | Build tool and dev server      |
| Framer Motion 12                      | Animations and transitions     |
| Supabase                              | PostgreSQL database + REST API |
| React Query (`@tanstack/react-query`) | Async state management         |
| canvas-confetti                       | Confetti on RSVP success       |
| CSS Modules                           | Component-scoped styling       |
| Google Fonts                          | Playpen Sans + Quicksand       |

---

## 🎨 Design Tokens

Colors sourced directly from [It's Me Apparel PH](https://itsme-apparelph.com) to keep everything in the family:

| Token          | Value        | Usage                         |
| -------------- | ------------ | ----------------------------- |
| `--blue`       | `#1a237e`    | Primary color, hero bg, text  |
| `--yellow`     | `#ffd54f`    | Accent, buttons, borders      |
| `--beige`      | `#f5e1da`    | Background, warm sections     |
| `--blue-light` | `#e8eaf6`    | Alternate section backgrounds |
| Heading font   | Playpen Sans | Warm, playful, readable       |
| Body font      | Quicksand    | Clean, friendly, modern       |

---

## 🗄️ Database Schema

```sql
create table rsvps (
  id                   uuid      default gen_random_uuid() primary key,
  full_name            text      not null,
  attending            text      not null,
  guests               integer,
  paw_patrol_character text,
  message              text,
  created_at           timestamp default now()
);
```

**Security:**

- Row Level Security (RLS) enabled
- INSERT only policy — guests can submit but never read responses
- Parameterized queries via Supabase JS client — SQL injection safe
- Anon key scoped to insert only

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Splash.tsx              # Dog reveal screen with wiggle animation
│   ├── Hero.tsx                # "Happy 21st Jacob!"
│   ├── Countdown.tsx           # Live ticking countdown timer
│   ├── PhotoCarousel.tsx       # Memory photo slider
│   ├── FavoriteThings.tsx      # Favorite Things of Jacob
│   ├── Funfacts.tsx            # Fun facts about Jacob
│   ├── TaughtUs.tsx            # Life lessons from Jacob
│   ├── SelfieGrid.tsx          # Paw Patrol selfie wall
│   ├── SupportItsMe.tsx        # It's Me Apparel PH section
│   ├── RSVPForm.tsx            # Supabase + React Query form
│   └──common/
│      └── Carousel.tsx
│      └── FloatingRSVP.tsx     # Sticky floating RSVP button
│      └── SectionLabel.tsx
├── hooks/
│   └── useRSVP.ts              # useMutation hook for RSVP submit
├── lib/
│   └── supabase.ts             # Supabase client initialization
├── App.tsx                     # Root component, reveal state
├── App.css                     # Global styles and CSS variables
└── main.tsx                    # React Query provider setup
```

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/diffVariable/jacob-21-birthday.git
cd jacob-21st

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Supabase URL and publishable key

# Run the dev server
npm run dev
```

---

## ⚙️ Environment Variables

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-publishable-key-here
```

---

## 🗄️ Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema above
3. Go to **Settings → API** and copy your Project URL and Publishable key
4. Paste them into your `.env` file

To view submitted RSVPs, go to **Table Editor → rsvps** in your Supabase dashboard.

---

## 🔒 Security Considerations

- `.env` is gitignored — keys never committed to version control
- Supabase publishable (anon) key is intentionally public-safe — scoped to insert only via RLS
- Secret key never used in frontend
- `with check` policy validates attending values at database level
- All queries use Supabase JS client parameterization — SQL injection safe

---

## 💛 About Jacob

Jacob is a 21-year-old with autism who owns 44 Gund Paw Patrol plushies (Gund only — no substitutes), remembers every single person's birthday, gets genuinely, purely excited every time he sees someone he loves, and runs [It's Me Apparel PH](https://itsme-apparelph.com) — a brand celebrating autism awareness and neurodiversity. His dogs are Gus (pug) and Umi (golden retriever), and he has never left home without at least two plushies.

---

## 👩‍💻 Built By

**Diana Castillo** — Frontend Engineer

[Portfolio](https://diva-castillo.vercel.app) · [GitHub](https://github.com/diffVariable)
