# Design System — HRIS Manual Book

## 1. Design Philosophy

The HRIS Manual Book landing page follows a **clean, professional, and approachable** design language suitable for an enterprise HR system documentation. The design balances:

- **Trustworthiness** — through consistent use of brand colors and structured layouts
- **Readability** — via clear typography hierarchy and generous whitespace
- **Guidance** — using visual cues (icons, badges, numbered steps) to direct users through documentation
- **Modern aesthetics** — with subtle animations, gradient accents, and card-based layouts

---

## 2. Color System

### 2.1 Primary Colors

| Name | Token | Hex | Usage |
|---|---|---|---|
| **Brand Orange** | `--color-brand-orange` | `#f97316` | Primary CTA buttons, admin section accents, badges, highlights |
| **Brand Teal** | `--color-brand-teal` | `#0d9488` | Employee section accents, secondary buttons, feature icons |

### 2.2 Color Variants

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-orange-light` | `#fb923c` | Hover states for orange elements |
| `--color-brand-orange-dark` | `#ea6c0a` | Active/pressed states |
| `--color-brand-teal-light` | `#14b8a6` | Hover states for teal elements, footer links |
| `--color-brand-teal-dark` | `#0f766e` | Active states, CTA section background |
| `--color-brand-amber` | `#fbbf24` | Warning tips, CTA heading accent |

### 2.3 Neutral Palette

| Usage | Hex | Notes |
|---|---|---|
| Primary text | `#111827` (gray-900) | Headings, body text |
| Secondary text | `#6B7280` (gray-500) | Descriptions, subtitles |
| Muted text | `#9CA3AF` (gray-400) | Placeholder text, disabled states |
| Background | `#ffffff` | Primary background |
| Subtle background | `#f0fdf9` | Section alternating backgrounds |
| Border | `#E5E7EB` (gray-200) | Card borders, dividers |
| Footer background | `#030712` (gray-950) | Dark footer background |

### 2.4 Role-Based Color Coding

In the Module Access Matrix:

| Role | Badge Color | Hex |
|---|---|---|
| Employee / Full Access | Teal | `#0d9488` |
| Submit | Blue | `#2563eb` |
| Approval | Orange | `#f97316` |
| Manage | Dark Gray | `#111827` |
| No Access | Light Gray | `#D1D5DB` |

---

## 3. Typography

### 3.1 Font Family

```css
font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
```

Inter is loaded from Google Fonts with weights: 300, 400, 500, 600, 700, 800.

### 3.2 Type Scale

| Level | Size | Weight | Usage |
|---|---|---|---|
| **Display** | `clamp(36px, 5vw, 64px)` | 800 (extrabold) | Hero title |
| **Heading 1** | `clamp(30px, 4vw, 48px)` | 700 (bold) | Section headings |
| **Heading 2** | `24px` | 700 (bold) | Subsection headings |
| **Heading 3** | `18px` | 600 (semibold) | Card titles |
| **Body** | `16px` | 400 (regular) | Paragraph text |
| **Small** | `14px` | 500 (medium) | Labels, badges, descriptions |
| **Extra Small** | `12px` | 600 (semibold) | Navigation, section labels, footnotes |

### 3.3 Letter Spacing

| Usage | Value |
|---|---|
| Section badges/labels | `0.2em` (uppercase tracking) |
| Hero CTA | `0.2em` |
| Body text | Normal (0) |

### 3.4 Line Heights

| Usage | Value |
|---|---|
| Headings | `1.1` (tight) |
| Body text | `1.5`–`1.6` (relaxed) |
| Card descriptions | `1.6` (relaxed) |

---

## 4. Spacing System

Based on Tailwind CSS default spacing scale (`4px` base unit):

| Usage | Value | Tailwind Class |
|---|---|---|
| Section vertical padding | `96px` | `py-24` |
| Section horizontal padding | `16px` | `px-4` |
| Container max-width | `1280px` | `max-w-7xl` |
| Card padding | `20px`–`24px` | `p-5` / `p-6` |
| Element gap (small) | `8px` | `gap-2` |
| Element gap (medium) | `16px` | `gap-4` |
| Element gap (large) | `24px` | `gap-6` / `gap-8` |
| Card border radius | `16px` | `rounded-2xl` |
| Button border radius | `8px`–`12px` | `rounded-lg` / `rounded-xl` |

---

## 5. Layout Patterns

### 5.1 Section Structure

Each major section follows a consistent pattern:

```
┌─────────────────────────────────────────────┐
│  Optional: Decorative background blobs      │
├─────────────────────────────────────────────┤
│  Badge (uppercase, bold, rounded-full)      │
│  Heading (large, bold, centered)            │
│  Accent line (gradient, 80px wide)          │
│  Description (gray-500, centered, max-width)│
│                                             │
│  Content (grid/table/cards)                 │
│                                             │
│  Optional: CTA bar                          │
└─────────────────────────────────────────────┘
```

### 5.2 Grid Layouts

| Section | Layout | Breakpoints |
|---|---|---|
| About | 3-column features + center image | `md:grid-cols-3` |
| Module | Single scrollable table | Full width |
| Employee/Admin Guides | Accordion (single column) | Full width |
| Settings | 3-column cards | `sm:grid-cols-2`, `lg:grid-cols-3` |
| Workflow | 3-column cards | `sm:grid-cols-2`, `lg:grid-cols-3` |
| Troubleshooting | 2-column cards | `sm:grid-cols-2` |
| Glossary | 3-column cards | `sm:grid-cols-2`, `lg:grid-cols-3` |
| Footer | 4-column links | `sm:grid-cols-2`, `lg:grid-cols-4` |

### 5.3 Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `< 640px` | Single column, hamburger menu, vertical flow |
| `640px – 768px` | 2-column grids, still mobile menu |
| `768px – 1024px` | 3-column layouts, horizontal nav appears |
| `> 1024px` | Full desktop layout, all features visible |

---

## 6. Component Patterns

### 6.1 Navigation (StickyNav)

- **Position**: Fixed top, full-width
- **Height**: `64px` (h-16)
- **Background**: Transparent → White/95% opacity with backdrop blur on scroll
- **Shadow**: Subtle drop shadow on scroll
- **Max width**: 1280px centered

States:
| State | Background | Text Color |
|---|---|---|
| Default (top) | Transparent | Gray-700 / Gray-900 |
| Scrolled | White/95% + blur | Gray-600 |

### 6.2 Cards

Standard card pattern used throughout:

```css
background: white;
border: 1px solid gray-100;
border-radius: 16px;
padding: 20px;
transition: all 0.3s;

/* Hover state */
box-shadow: elevated;
border-color: theme-color-200;
transform: translateY(-4px);
```

### 6.3 Accordion

Used in Employee Guide and Admin Guide:

- Header: Flex row with icon circle, title, section number, chevron
- Active state: Gradient background (teal/orange tint)
- Content: Steps with numbered circles, optional tip callout
- Screenshot area: Browser chrome mockup with fallback placeholder

### 6.4 Buttons

| Type | Background | Text | Border Radius | Usage |
|---|---|---|---|---|
| Primary CTA | `#f97316` | White | `rounded-xl` | "Minta Demo" buttons |
| Secondary | White/10% | White | `rounded-xl` | CTA section secondary |
| Nav Link | Transparent | Gray-600 | `rounded-lg` | Desktop nav links |
| Language Toggle | Mixed | Mixed | `rounded-lg` | ID/EN switcher |

### 6.5 Badges

```css
display: inline-flex;
padding: 4px 12px;
border-radius: 9999px;
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
```

Color variants:
- Teal: `bg-teal-50 text-teal-600`
- Orange: `bg-orange-50 text-orange-600`
- Blue: `bg-blue-50 text-blue-600`
- Violet: `bg-violet-50 text-violet-600`
- Red: `bg-red-50 text-red-500`
- Gray: `bg-gray-50 text-gray-400`

---

## 7. Animation System

### 7.1 Scroll-Triggered Animations

All sections use IntersectionObserver with `threshold: 0.05–0.1` to trigger:

| Animation | CSS | Usage |
|---|---|---|
| Fade in | `opacity: 0 → 1` | All section headers |
| Slide up | `translateY(20px) → 0` | Content cards, table rows |
| Scale in | `scale(0.93) → 1` | Center image (About) |
| Line expand | `width: 0 → 80px` | Accent line under headings |

### 7.2 Transitions

| Property | Duration | Timing |
|---|---|---|
| Card hover | `0.3s` | `ease` |
| Scroll animations | `0.5s–0.7s` | `ease` |
| Accent line | `0.9s` | `ease` |
| Background (nav) | `0.3s` | `ease` |

### 7.3 Hero Animations

- **Image reveal**: CSS `clip-path` animation
  - Mobile: Slide up from bottom
  - Desktop: Reveal from right with diagonal edge
- **Content fly-in**: Svelte `fly` transition with staggered delays (150ms–650ms)

### 7.4 Floating Elements

Decorative dots use continuous float animations:

```css
@keyframes floatUp {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(-12px); opacity: 1; }
}
```

Duration: 3–4 seconds, infinite loop.

---

## 8. Iconography

**Library**: Lucide Svelte (`lucide-svelte`)

### Icon Usage by Section

| Section | Icons Used |
|---|---|
| Hero | Globe, Phone, MapPin |
| About | Globe, MapPin, Bell, FileCheck, ShieldCheck, Layers |
| Module | Check, Minus |
| Employee Guide | Lock, Pencil, MapPin, ClipboardCheck, Timer, CalendarDays, FileSignature, LogOut |
| Admin Guide | Users, ArrowLeftRight, Clock, Timer, FileText, ClipboardList, TrendingUp |
| Settings | Building2, Timer, Bell, Layers, Repeat2, KeyRound |
| Workflow | UserCheck, Bell, FileText, CheckCircle2, BarChart2, Briefcase, ClipboardList, FileCheck, Lock, MessageSquare |
| Troubleshooting | Mail, MessageSquare, Ticket, AlertTriangle, CheckCircle2 |
| Glossary | BookOpen, Clock, FileSignature, TrendingUp, ShieldCheck, LogOut, Bell, Timer, Repeat2, KeyRound, ClipboardList |
| CTA | MessageCircle, BookOpen, ArrowRight |
| Footer | ArrowRight, ExternalLink, Phone |

### Icon Sizes

| Context | Size |
|---|---|
| Card/feature icons | `22px` |
| Accordion header icons | `20px` |
| Glossary term icons | `18px` |
| Contact icons | `22px` |
| Navigation icons | `14px`–`22px` |

---

## 9. Decorative Elements

### 9.1 Background Blobs

Large, blurred circles used as subtle background decoration:

```css
position: absolute;
width: 288px–384px;
height: 288px–384px;
border-radius: 9999px;
background: brand-color with 5–8% opacity;
filter: blur(48px); /* blur-3xl */
pointer-events: none;
```

### 9.2 Accent Line

Gradient line under section headings:

```css
height: 3px;
width: 80px;
background: linear-gradient(90deg, #0d9488, #f97316);
border-radius: 2px;
```

### 9.3 Floating Dots

Small animated dots for visual interest:

```css
width: 8px–12px;
height: 8px–12px;
border-radius: 9999px;
background: brand-color with 25–40% opacity;
```

---

## 10. Accessibility Considerations

### 10.1 Semantic HTML

- Proper heading hierarchy (`h1` → `h2` → `h3` → `h4`)
- `nav` element for navigation
- `section` elements for content sections
- `aria-label` on interactive elements
- `aria-hidden="true"` on decorative images

### 10.2 Color Contrast

- Primary text (#111827) on white: **Pass AAA**
- Secondary text (#6B7280) on white: **Pass AA**
- Brand colors on white: **Pass AA** for large text

### 10.3 Keyboard Navigation

- All interactive elements are focusable
- Accordion buttons are native `<button>` elements
- Links have visible focus states via browser defaults

### 10.4 Reduced Motion

Currently no `prefers-reduced-motion` media query implementation. This is a recommended enhancement.

---

## 11. Browser Chrome Mockup

Screenshots are displayed in a browser-like frame:

```
┌──────────────────────────────────────┐
│ ● ● ●  [URL bar: khwarizmi.co.id]   │  ← Gray-100 background
├──────────────────────────────────────┤
│                                      │
│         Screenshot image             │
│                                      │
└──────────────────────────────────────┘
```

- Traffic light dots: Red, Yellow, Green (gray-400 variants)
- URL bar: White background, gray-400 text
- Border: gray-200, rounded corners

---

## 12. File Organization

```
src/
├── app.css              # Global styles + Tailwind imports
├── app.html             # HTML shell
├── lib/
│   ├── assets/          # Static assets (logo, favicon)
│   ├── components/      # Svelte components (12 files)
│   ├── i18n.ts          # All translations
│   ├── index.ts         # Barrel export
│   └── stores/          # Svelte stores
└── routes/
    ├── +layout.svelte   # Root layout
    └── +page.svelte     # Main page
```

### Naming Conventions

- Components: PascalCase (e.g., `HeroSection.svelte`)
- Files: camelCase for utilities, PascalCase for components
- CSS: Tailwind utility classes with minimal custom CSS
- IDs: kebab-case for section anchors (e.g., `#panduan-karyawan`)
