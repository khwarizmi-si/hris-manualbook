# HRIS Manual Book — Landing Page Project

## 1. Project Identity

| Attribute | Value |
|---|---|
| **Project Name** | `landing-page-handbook` |
| **Product** | HRIS Manual Book — Al-Khwarizmi |
| **Version** | 1.0 |
| **Year** | 2025 |
| **Purpose** | A landing page that serves as an interactive manual/book for the Al-Khwarizmi HRIS (Human Resource Information System) |
| **Live URL** | https://khwarizmi.co.id |
| **Language Support** | Indonesian (`id`) and English (`en`) via i18n |
| **Accessibility** | Fully static, single-page application (SPA) built with SvelteKit |

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | SvelteKit 2.x (Svelte 5 with runes) |
| **Language** | TypeScript 6.x |
| **Styling** | Tailwind CSS 4.x (`@tailwindcss/vite` plugin, no PostCSS config needed) |
| **Build Tool** | Vite 8.x |
| **Adapter** | `@sveltejs/adapter-static` (generates pre-rendered HTML) |
| **Icons** | `lucide-svelte` |
| **Fonts** | Google Fonts — Inter (300–800 weight) |
| **Package Manager** | npm |

---

## 3. Project Structure

```
landing-page-handbook/
├── .agent/                          # Project documentation
├── .claude/                         # Claude Code configuration
├── .svelte-kit/                     # Generated SvelteKit metadata
├── .vscode/                         # VS Code settings
├── build/                           # Pre-built static output (deployment-ready)
├── node_modules/                    # Dependencies
├── src/
│   ├── app.css                      # Global styles + Tailwind theme variables
│   ├── app.d.ts                     # SvelteKit type declarations
│   ├── app.html                     # HTML shell template
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── favicon.svg
│   │   │   └── logo-khwarizmi.png   # Brand logo
│   │   ├── components/              # All 12 section components
│   │   │   ├── AboutSection.svelte
│   │   │   ├── AdminGuideSection.svelte
│   │   │   ├── CtaSection.svelte
│   │   │   ├── EmployeeGuideSection.svelte
│   │   │   ├── FooterSection.svelte
│   │   │   ├── GlossarySection.svelte
│   │   │   ├── HeroSection.svelte
│   │   │   ├── ModuleSection.svelte
│   │   │   ├── SettingSection.svelte
│   │   │   ├── StickyNav.svelte
│   │   │   ├── TroubleshootingSection.svelte
│   │   │   └── WorkflowSection.svelte
│   │   ├── i18n.ts                  # All translatable strings (id / en)
│   │   ├── index.ts                 # Lib barrel export
│   │   └── stores/
│   │       └── lang.ts              # Svelte writable store for language state
│   └── routes/
│       ├── +layout.svelte           # Root layout (loads CSS, Google Fonts, meta)
│       ├── +layout.ts               # Empty server load function
│       └── +page.svelte             # Single-page: renders all sections in order
├── static/
│   ├── logo-khwarizmi.png           # Optimized logo (60KB)
│   ├── robots.txt
│   └── screenshots/                 # Real UI screenshots (PNG + WebP)
│       ├── login.png / login.webp
│       ├── reset-password.png
│       ├── admin/                   # 14 admin dashboard screenshots (7 PNG + 7 WebP)
│       └── user/                    # 16 employee screenshots (8 PNG + 8 WebP)
├── HRIS_Manual_Book_v3.docx         # Original Word document (source content)
├── test-case.xlsx                   # Test cases spreadsheet
├── package.json
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Architecture Overview

### 4.1 Rendering Strategy

- The project uses `@sveltejs/adapter-static`, producing fully static HTML at build time.
- No server-side rendering (SSR) or API routes exist.
- Page transitions and animations are client-side only (intersection observers, CSS transitions, Svelte `fly` transitions).

### 4.2 Single-Page Layout

`+page.svelte` renders all 12 sections sequentially in a single scrollable page:

```
StickyNav (fixed)
HeroSection
AboutSection
ModuleSection
EmployeeGuideSection
AdminGuideSection
SettingSection
WorkflowSection
TroubleshootingSection
GlossarySection
CtaSection
FooterSection
```

Navigation between sections uses anchor links (`#tentang`, `#modul`, etc.) with smooth scrolling.

### 4.3 Internationalization (i18n)

- All UI strings are centralized in `src/lib/i18n.ts` as a single `t` object with `id` and `en` keys.
- Language state is managed via a Svelte writable store (`src/lib/stores/lang.ts`).
- Components use `$derived` to reactively access the correct language: `let tr = $derived(t[$lang].sectionName)`.
- Language toggle is available in both desktop and mobile navigation.

### 4.4 State Management

| Store | Location | Purpose |
|---|---|---|
| `lang` | `src/lib/stores/lang.ts` | Current language (`'id'` or `'en'`) |

Component-local state uses Svelte 5 runes (`$state`, `$derived`):
- `mounted` — triggers entrance animations
- `scrolled` — sticky nav background toggle
- `mobileOpen` — mobile menu state
- `isVisible` — intersection observer for scroll-triggered animations
- `openCard` — accordion open/close state
- `imgErrors` — screenshot fallback handling

---

## 5. Component Inventory

| Component | File | Description |
|---|---|---|
| **StickyNav** | `StickyNav.svelte` | Fixed top navigation with scroll-aware styling, mobile hamburger menu, language toggle, and WhatsApp CTA button |
| **HeroSection** | `HeroSection.svelte` | Full-viewport hero with logo, title, subtitle, CTA, contact info, and clip-path image reveal animation |
| **AboutSection** | `AboutSection.svelte` | 3-column layout with 6 feature highlights, center image with overlay, parallax blobs, and bottom CTA bar |
| **ModuleSection** | `ModuleSection.svelte` | Access matrix table showing feature permissions for 4 roles (Employee, Finance, Manager, Admin HR) with color-coded badges |
| **EmployeeGuideSection** | `EmployeeGuideSection.svelte` | Accordion with 8 employee guides (login, profile, attendance, correction, overtime, leave, documents, resign) |
| **AdminGuideSection** | `AdminGuideSection.svelte` | Accordion with 7 admin guides (manage employees, transfer, attendance, overtime, documents, resign, reports) |
| **SettingSection** | `SettingSection.svelte` | 6 setting feature cards + role access summary table |
| **WorkflowSection** | `WorkflowSection.svelte` | Overtime approval flow (5 steps) + offboarding checklist (6 items) |
| **TroubleshootingSection** | `TroubleshootingSection.svelte` | 8 issue cards with cause/solution + 3 contact methods |
| **GlossarySection** | `GlossarySection.svelte` | 11 term cards with icons and definitions |
| **CtaSection** | `CtaSection.svelte` | Full-width CTA with WhatsApp demo link and guide link |
| **FooterSection** | `FooterSection.svelte` | 4-column footer with brand, guide links, module list, and company info |

---

## 6. Content Sections Detail

### 6.1 Employee Guide (Chapter 2)
8 guides covering:
1. Login to the system
2. Update profile
3. Attendance & clock-in/out
4. Attendance correction
5. Overtime request
6. Leave request
7. Documents & digital signature
8. Resign request

### 6.2 Admin Guide (Chapter 3)
7 guides covering:
1. Manage employees (add, edit, deactivate)
2. Employee transfer
3. Attendance monitoring
4. Overtime approval
5. Document management
6. Resign & offboarding process
7. Reports & analytics

### 6.3 Settings (Chapter 4 — Admin Only)
6 configurable areas:
1. Company information
2. Attendance configuration
3. Notification configuration
4. Department management
5. Shift configuration
6. Role & permissions

### 6.4 Troubleshooting (Chapter 5)
8 common issues:
- Cannot login
- Clock-in failed
- Document not showing
- Leave not approved
- Cannot submit resign
- Overtime not in recap
- Cannot access Settings
- Data not saved

---

## 7. Screenshot Assets

Real UI screenshots are stored in `static/screenshots/` in both PNG and WebP formats:

| Path | Format | Description |
|---|---|---|
| `login.png` / `login.webp` | PNG + WebP | Login page |
| `reset-password.png` | PNG | Password reset |
| `user/dashboard.png` | PNG | Employee dashboard |
| `user/profile.png` / `user/profile.webp` | PNG + WebP | Employee profile |
| `user/absensi.png` / `user/absensi.webp` | PNG + WebP | Attendance page |
| `user/koreksi-absensi.png` / `user/koreksi-absensi.webp` | PNG + WebP | Attendance correction |
| `user/overtime.png` / `user/overtime.webp` | PNG + WebP | Overtime request |
| `user/cuti.png` / `user/cuti.webp` | PNG + WebP | Leave request |
| `user/dokumen.png` / `user/dokumen.webp` | PNG + WebP | Documents page |
| `user/change-password.png` | PNG | Change password |
| `admin/admin-karyawan.png` / `admin/admin-karyawan.webp` | PNG + WebP | Employee management |
| `admin/admin-transfer.png` / `admin/admin-transfer.webp` | PNG + WebP | Transfer management |
| `admin/admin-kehadiran.png` / `admin/admin-kehadiran.webp` | PNG + WebP | Attendance monitoring |
| `admin/admin-overtime.png` / `admin/admin-overtime.webp` | PNG + WebP | Overtime approval |
| `admin/admin-dokumen.png` / `admin/admin-dokumen.webp` | PNG + WebP | Document management |
| `admin/admin-resign.png` / `admin/admin-resign.webp` | PNG + WebP | Resign management |
| `admin/admin-laporan.png` / `admin/admin-laporan.webp` | PNG + WebP | Reports |

Components reference the WebP paths for better performance and gracefully fall back to a placeholder when images fail to load.

---

## 8. Build & Deployment

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build static output to `build/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Svelte type checking |
| `npm run check:watch` | Type checking in watch mode |

### Output

- `build/` directory contains the complete static site.
- The static adapter generates pre-rendered HTML suitable for any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

---

## 9. Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-orange` | `#f97316` | Primary accent, CTAs, admin theme |
| `--color-brand-orange-light` | `#fb923c` | Hover states |
| `--color-brand-orange-dark` | `#ea6c0a` | Active states |
| `--color-brand-teal` | `#0d9488` | Secondary accent, employee theme |
| `--color-brand-teal-light` | `#14b8a6` | Hover states |
| `--color-brand-teal-dark` | `#0f766e` | Active states |
| `--color-brand-amber` | `#fbbf24` | Warning/highlight |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Base**: `font-size: 16px`, `line-height: 1.5`

### Spacing & Layout

- Max container width: `max-w-7xl` (1280px)
- Section padding: `py-24` (96px vertical)
- Grid breakpoints: `sm:640px`, `md:768px`, `lg:1024px`

---

## 10. SEO & Meta Tags

The project includes comprehensive meta tags in `+layout.svelte`:

- **Basic**: title, description, canonical URL, theme-color
- **Open Graph**: og:title, og:description, og:image, og:url, og:type, og:locale
- **Twitter**: twitter:card, twitter:title, twitter:description, twitter:image

---

## 11. Key Features

1. **Bilingual (ID/EN)** — Full i18n support with one-click language toggle
2. **Responsive Design** — Mobile-first with hamburger menu and adaptive layouts
3. **Scroll Animations** — IntersectionObserver-driven fade-in/slide-up animations
4. **Accordion Guides** — Expandable step-by-step guides with numbered steps
5. **Screenshot Integration** — Real UI screenshots in WebP format with graceful fallback
6. **Access Matrix** — Interactive table showing role-based permissions
7. **WhatsApp CTA** — Direct WhatsApp link for demo requests
8. **Static Output** — No server required, deployable anywhere
9. **Optimized Assets** — Logo optimized to 60KB, WebP screenshots for better performance
