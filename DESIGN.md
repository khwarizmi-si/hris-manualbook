---
name: HRIS Al-Khwarizmi Manual Book
description: Manual book interaktif untuk sistem HRIS Al-Khwarizmi — otoritatif, hangat, terstruktur.
colors:
  admin-amber: "#f97316"
  admin-amber-light: "#fb923c"
  admin-amber-dark: "#ea6c0a"
  employee-teal: "#0d9488"
  employee-teal-light: "#14b8a6"
  employee-teal-dark: "#0f766e"
  signal-amber: "#fbbf24"
  ink-primary: "#111827"
  ink-secondary: "#6b7280"
  ink-tertiary: "#9ca3af"
  surface-white: "#ffffff"
  surface-teal-wash: "#f0fdf9"
  surface-orange-tint: "#fff7ed"
  surface-teal-tint: "#f0fdfa"
  border-subtle: "#f3f4f6"
  border-medium: "#e5e7eb"
typography:
  display:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.admin-amber}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.admin-amber-dark}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  badge-admin:
    backgroundColor: "{colors.surface-orange-tint}"
    textColor: "{colors.admin-amber}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  badge-employee:
    backgroundColor: "{colors.surface-teal-tint}"
    textColor: "{colors.employee-teal}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  accordion-item:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.2xl}"
    padding: "20px 24px"
  accordion-item-open-admin:
    backgroundColor: "{colors.surface-orange-tint}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.2xl}"
    padding: "20px 24px"
  accordion-item-open-employee:
    backgroundColor: "{colors.surface-teal-tint}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.2xl}"
    padding: "20px 24px"
  video-card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.3xl}"
    padding: "0px"
---

# Design System: HRIS Al-Khwarizmi Manual Book

## 1. Overview

**Creative North Star: "Buku Panduan yang Hidup"**

Sistem visual ini bertindak seperti dokumentasi cetak berkualitas tinggi yang bisa diinteraksi. Bukan software dashboard, bukan brosur pemasaran — melainkan manual teknis yang hangat. Setiap halaman terasa terstruktur dan otoritatif, tapi tidak pernah mengintimidasi. Pengguna yang membuka halaman ini sedang mencari jawaban, bukan pengalaman; desain menghormati itu dengan orientasi visual instan, hirarki yang jelas, dan tidak ada dekorasi yang mengganggu.

Sistem ini mengoperasikan dua jalur warna yang berbeda sebagai sistem orientasi: **Amber Tegas** (#f97316) untuk segala sesuatu yang berkaitan dengan Admin HR (tindakan, otoritas, pengelolaan), dan **Zamrud Tenang** (#0d9488) untuk segala sesuatu yang berkaitan dengan Karyawan (informasi, navigasi sehari-hari, kepercayaan). Kedua warna tidak pernah muncul bersamaan dalam satu komponen sebagai aksen — masing-masing memiliki domain semantiknya sendiri.

Yang ditolak secara eksplisit: tampilan enterprise/kaku seperti SAP atau Oracle yang terasa seperti software tahun 2010; klon SaaS template dengan hero gradient orange dan tiga kolom fitur seragam; kesantaian startup yang tidak sesuai konteks HR formal.

**Key Characteristics:**
- Dua jalur warna semantik yang tidak tercampur (admin ≠ karyawan)
- Elevasi flat by default; bayangan muncul hanya sebagai respons state
- Accordion sebagai unit navigasi utama, bukan tab atau sidebar
- Video tutorial sebagai citizen pertama dalam setiap panduan, bukan afterthought
- Bilingual tanpa layout shift — struktur identik di semua bahasa
- Clip-path reveal di hero; fly transition di konten — motion minimal dan purposeful

## 2. Colors: Sistem Dua Jalur

Dua aksen dengan domain semantik terpisah, didukung oleh skala netral yang bersih. Warna adalah sistem navigasi, bukan dekorasi.

### Primary — Admin HR
- **Amber Tegas** (#f97316): Digunakan eksklusif untuk semua elemen Admin HR — accordion header aktif, badge BAB 3, ikon panduan admin, tombol CTA utama, garis aksen. Memberi sinyal tindakan dan otoritas.
- **Amber Tegas Hover** (#ea6c0a): State hover dan active pada elemen orange. Lebih gelap, bukan lebih terang — konsisten dengan prinsip kontrol.
- **Amber Tegas Light** (#fb923c): Digunakan jarang; hanya pada transisi atau highlight yang sangat ringan.

### Secondary — Karyawan
- **Zamrud Tenang** (#0d9488): Digunakan eksklusif untuk semua elemen Karyawan — accordion header aktif, badge BAB 2, ikon panduan karyawan, elemen navigasi, garis aksen. Memberi sinyal informasi dan kepercayaan.
- **Zamrud Tenang Hover** (#0f766e): State hover dan active pada elemen teal.
- **Zamrud Tenang Light** (#14b8a6): Digunakan jarang; hanya pada highlight ringan.

### Tertiary — Sinyal
- **Amber Sinyal** (#fbbf24): Digunakan hanya untuk tip callout dan peringatan di dalam langkah-langkah panduan. Tidak digunakan sebagai aksen dekoratif.

### Neutral
- **Tinta Utama** (#111827): Semua heading dan body text yang harus terbaca dengan kontras penuh.
- **Tinta Sekunder** (#6b7280): Teks pendukung, deskripsi seksi, label metadata. Digunakan di atas putih atau teal-wash.
- **Tinta Tersier** (#9ca3af): Placeholder, teks yang sengaja dimundurkan (nomor path, tanggal ringan).
- **Permukaan Putih** (#ffffff): Background card, accordion, video card.
- **Teal Wash** (#f0fdf9): Background seksi Panduan Karyawan — tint teal yang sangat lembut, bukan krem.
- **Orange Tint** (#fff7ed): Background tinted untuk elemen admin hover dan badge area.
- **Teal Tint** (#f0fdfa): Background tinted untuk elemen karyawan hover dan badge area.
- **Border Halus** (#f3f4f6): Divider, border accordion resting, frame screenshot.
- **Border Medium** (#e5e7eb): Border yang lebih terlihat — browser chrome mockup, separator yang harus terbaca.

**The Two-Channel Rule.** Amber dan Teal tidak pernah muncul bersama sebagai aksen dalam satu komponen. Amber = admin. Teal = karyawan. Jika sebuah elemen terasa ambigu, tanya di bab mana ia berada.

**The Neutral-Tint Rule.** Tint netral untuk seksi karyawan adalah `#f0fdf9` (ke arah teal), bukan krem atau warm-white. Tint harus mencerminkan brand hue seksinya, bukan ambiguitas "hangat secara umum."

## 3. Typography

**Display Font:** Inter (Google Fonts, weight 800)
**Body Font:** Inter (Google Fonts, weight 400–700)
**Label Font:** Inter (Google Fonts, weight 700, uppercase)

**Character:** Satu keluarga font dengan kontras bobot yang kuat. Inter dipilih karena keterbacaannya pada ukuran kecil dalam konteks bilingual Indonesia/Inggris. Hierarki dibangun dari berat dan ukuran, bukan dari perubahan typeface.

### Hierarchy
- **Display** (800, clamp(2.25rem–4rem), line-height 1.1, letter-spacing -0.02em): Judul utama halaman di HeroSection. Satu elemen per halaman. Maksimum 4rem; di atas itu halaman berteriak, bukan mendesain.
- **Headline** (700, clamp(1.875rem–3rem), line-height 1.2, letter-spacing -0.01em): Heading per seksi (h2). Digunakan dengan `text-wrap: balance`.
- **Title** (700, 1.5rem, line-height 1.3): Sub-heading dalam komponen (h3, judul video card, judul accordion).
- **Body** (400, 1rem, line-height 1.625): Semua teks deskriptif. Max line-length 65ch. Warna minimum `#6b7280` di atas putih — tidak lebih terang dari itu.
- **Label** (700, 0.75rem, letter-spacing 0.1em, uppercase): Badge, kicker BAB/CHAPTER, label "Video Tutorial", nomor seksi. Maksimum 4 kata. Tidak untuk body copy.

**The Single Family Rule.** Satu typeface di seluruh sistem. Jangan tambahkan display serif, mono dekoratif, atau keluarga kedua tanpa alasan semantik yang spesifik. Hierarki berasal dari bobot dan ukuran, bukan dari font berbeda.

**The Label Ceiling Rule.** Uppercase dengan letter-spacing hanya untuk label pendek (badge, nomor bab, status tag). Tidak pernah untuk kalimat atau body copy. Teks uppercase di atas 4 kata menjadi tidak terbaca.

## 4. Elevation

Sistem ini menggunakan pendekatan **flat by default** dengan bayangan sebagai respons state, bukan sebagai dekorasi konstan. Kedalaman visual disampaikan melalui tonal layering (tinted backgrounds, border halus) pada keadaan resting — bukan melalui bayangan permanen.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`): Digunakan pada accordion item resting. Memberi batas dari background tanpa mengangkat elemen.
- **Hover Lift** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.05)`): Muncul saat accordion item di-hover. Menunjukkan interaktivitas.
- **Card Elevated** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.04)`): Accordion terbuka, video card utama. Elemen yang sedang aktif atau membutuhkan perhatian.
- **Hero Elevated** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.08)`): Digunakan sangat jarang — hanya pada komponen hero-level (video card dengan `shadow-xl`).

**The Flat-by-Default Rule.** Permukaan datar saat resting. Bayangan muncul hanya sebagai respons state (hover, expanded, focus) atau untuk membedakan elemen yang benar-benar perlu naik dari konteks. Jika bayangan ada di setiap card dalam semua state, ia tidak lagi membawa informasi.

## 5. Components

### Buttons
Tombol primer adalah satu-satunya tombol yang ada secara eksplisit di sistem ini. Sistem tidak memiliki button library penuh — tombol hanya muncul di CTA nav, CTA halaman, dan link WhatsApp.

- **Shape:** Rounded (8px radius) — tidak bulat penuh, tidak tajam. Terasa profesional, bukan playful.
- **Primary (Admin CTA):** Background `admin-amber` (#f97316), teks putih, padding 8px 16px, font-size 14px bold, shadow-sm. Hover: background `admin-amber-dark` (#ea6c0a), transisi 200ms.
- **Text Link CTA:** Teks `admin-amber`, uppercase, letter-spacing 0.2em, tanpa background. Digunakan di dalam hero sebagai "scroll trigger". Hover: `admin-amber-dark`.
- **Focus:** `outline: 2px solid #fbbf24` (signal-amber) dengan `outline-offset: 2px`. Menggunakan amber sebagai focus ring agar kontras dari kedua brand color.

### Badges / Chips
Digunakan untuk label BAB, label CHAPTER, label "Video Tutorial", dan label status.

- **Admin Badge:** Background `surface-orange-tint` (#fff7ed), teks `admin-amber` (#f97316), border-radius pill (9999px), padding 6px 12px, font-size 10–12px bold uppercase, letter-spacing 0.1em.
- **Employee Badge:** Background `surface-teal-tint` (#f0fdfa), teks `employee-teal` (#0d9488), selain itu identik.
- **Aturan:** Badge tidak pernah lebih dari 4 kata. Tidak ada badge dekoratif — setiap badge memberi informasi (nomor bab, kategori, status).

### Cards / Accordion Items
Unit navigasi utama halaman ini. Accordion adalah cara pengguna membaca panduan.

- **Corner Style:** Rounded-2xl (16px) — terasa seperti dokumen, bukan widget.
- **Resting State:** Background putih, border `border-subtle` (#f3f4f6), shadow ambient tipis, tidak ada warna aksen yang menyala.
- **Hover State:** Border berubah ke `admin-amber/25` atau `employee-teal/25`, shadow lift muncul. Perubahan halus yang menunjukkan interaktivitas.
- **Open State (Admin):** Border `admin-amber/40`, shadow elevated orange, header background gradient `from-orange-50/80 to-white`. Icon accordion berubah ke background `admin-amber` solid.
- **Open State (Employee):** Identik tapi menggunakan teal channel.
- **Internal Padding:** 20px 24px pada header (py-5 px-6). Konten dalam: 24px bawah, 24px samping.

### Video Card
Komponen terpenting kedua setelah accordion — menampung tutorial lengkap di atas setiap panduan.

- **Layout:** Split grid dua kolom (`1fr 1.45fr`). Kiri: metadata teks. Kanan: panel gelap (#030712, hampir hitam) dengan video player.
- **Shape:** Rounded-3xl (24px) luar, rounded-2xl (16px) inner untuk video.
- **Border:** Warna aksen tint (`border-orange-100` atau `border-teal-100`) — bukan border abu netral.
- **Shadow:** shadow-xl dengan tint warna aksen (`shadow-orange-100/40`). Ini satu-satunya komponen yang mendapat shadow besar secara permanen (bukan hanya saat hover) karena statusnya sebagai focal point halaman.

### Screenshot Preview
Browser mockup yang membungkus screenshot UI nyata.

- **Shape:** Rounded-xl (12px), border `border-medium` (#e5e7eb).
- **Chrome Bar:** Background `#f3f4f6`, border-b `border-medium`. Tiga dot macOS (merah/kuning/hijau), URL bar putih dengan teks placeholder abu.
- **Fallback State:** Gradient ringan (teal-50 atau orange-50 ke putih) dengan ikon Image dan teks "Screenshot belum tersedia". Tidak ada broken image icon.

### Step List (Numbered)
Digunakan di dalam accordion untuk langkah-langkah panduan.

- **Number Badge:** Rounded-full (12px diameter), background solid warna aksen (admin-amber atau employee-teal), teks putih bold, ukuran 12px. Shadow-sm untuk sedikit mengangkat dari teks.
- **Connector:** Border-left-2 warna aksen dengan opacity 20% (bukan warna penuh — struktural, bukan dekoratif).
- **Spacing:** Space-y-3 antar langkah (12px). Cukup rapat untuk terasa seperti urutan, tidak terlalu rapat untuk terasa sesak.

### Tip Alert
Callout untuk informasi tambahan atau peringatan penting.

- **Style:** Background `amber-50` (#fffbeb), border `amber-200/60`, rounded-xl, padding 16px.
- **Icon:** AlertCircle dari Lucide, warna `amber-500` (#f59e0b), ukuran 17px, flex-shrink-0.
- **Teks:** `amber-800` (#92400e) — warna yang diambil dari hue amber itu sendiri, bukan abu-abu di atas kuning.
- **Aturan:** Hanya satu tip per langkah. Tidak ada tip stack. Tip bukan pengganti langkah — ia adalah catatan, bukan instruksi.

### Navigation (StickyNav)
- **Resting:** Transparan, konten terlihat.
- **Scrolled:** `bg-white/95 backdrop-blur-md border-b border-subtle shadow-md`. Frost effect yang subtil — tidak terlalu opak, tidak terlalu kaca.
- **Link Active/Hover:** Teks `admin-amber`, background `surface-orange-tint` ringan.
- **CTA Button:** `admin-amber` solid, rounded-lg, selalu terlihat di desktop.
- **Language Toggle:** Border-medium, teks gray-700, hover ke `employee-teal`. Font-bold, letter-spacing wider.
- **Mobile:** Dropdown putih penuh di bawah nav bar, shadow-lg, space-y-1.

## 6. Do's and Don'ts

### Do:
- **Do** gunakan `admin-amber` (#f97316) eksklusif untuk semua elemen Admin HR dan `employee-teal` (#0d9488) eksklusif untuk semua elemen Karyawan. Dua channel ini tidak pernah tercampur dalam satu komponen.
- **Do** pertahankan body text minimum `#6b7280` di atas permukaan putih — lebih terang dari itu dan kontras WCAG AA tidak terpenuhi.
- **Do** gunakan `text-wrap: balance` pada semua h2 dan h3 untuk mencegah baris yatim yang canggung.
- **Do** tampilkan bayangan sebagai respons state (hover, open) — bukan sebagai dekorasi permanen di semua card.
- **Do** gunakan video sebagai citizen pertama di setiap seksi panduan — bukan sebagai tambahan di bawah langkah-langkah.
- **Do** pertahankan tint background seksi Karyawan sebagai `#f0fdf9` (teal-wash), bukan krem atau warm-white.
- **Do** sertakan fallback yang bermakna untuk screenshot yang gagal dimuat — gradient ringan dengan pesan "belum tersedia", bukan broken image.
- **Do** tes setiap perubahan di mobile (375px) sebelum mendeklarasikan selesai — banyak pengguna mengakses dari ponsel.

### Don't:
- **Don't** tampilkan Amber dan Teal sebagai aksen bersamaan dalam satu komponen — ini melanggar sistem semantik dua-channel.
- **Don't** gunakan tampilan enterprise/kaku seperti SAP, Oracle, atau Workday — tidak ada tabel data yang padat, navigasi sidebar yang berat, atau tipografi yang terlalu formal dan dingin.
- **Don't** salin template SaaS generik — tidak ada hero gradient orange dengan tiga kolom fitur seragam, pricing table, atau badge "Enterprise Grade."
- **Don't** gunakan `border-left` atau `border-right` lebih dari 1px sebagai aksen warna dekoratif pada card atau list item. Border kiri tebal adalah anti-pattern visual yang terasa seperti software lama.
- **Don't** gunakan `background-clip: text` dengan gradient. Gunakan satu warna solid; penekanan via bobot atau ukuran.
- **Don't** tambahkan font family kedua atau ketiga tanpa alasan semantik yang sangat kuat. Inter sudah cukup dengan kontras bobot yang benar.
- **Don't** gunakan uppercase body copy — hanya untuk label pendek (≤4 kata) seperti badge dan nomor bab.
- **Don't** tampilkan hero heading di atas 4rem (64px) — di atas itu halaman terasa berteriak, bukan terstruktur.
- **Don't** tambahkan kelas shadow (`shadow-md`, `shadow-lg`) ke semua card secara permanen — bayangan kehilangan maknanya ketika ada di mana-mana.
