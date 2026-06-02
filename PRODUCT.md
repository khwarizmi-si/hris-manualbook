# Product

## Register

brand

## Users

**HR Admin** — staf SDM yang mengelola seluruh data karyawan, absensi, lembur, dokumen, dan laporan. Pengguna berpengalaman yang perlu akses cepat ke panduan teknis dan alur kerja lengkap. Biasanya membuka halaman ini saat onboarding sistem baru atau saat ada pertanyaan operasional.

**Karyawan** — pengguna sehari-hari yang mengakses HRIS untuk absensi, pengajuan cuti, lembur, dan dokumen. Tidak semua melek teknologi; membutuhkan panduan yang tidak mengintimidasi dan mudah dipahami tanpa harus membaca satu per satu.

Konteks penggunaan: jam kerja, di kantor atau mobile, sering kali karena ada masalah yang perlu diselesaikan segera. Mereka tidak punya waktu untuk membaca halaman yang panjang dan bertele-tele.

## Product Purpose

Landing page yang berfungsi sebagai manual book interaktif untuk HRIS Al-Khwarizmi — sistem SDM berbasis web yang digunakan oleh perusahaan-perusahaan di Indonesia. Halaman ini menggantikan dokumen Word statis dan menjadi referensi tunggal yang bisa diakses kapan saja.

Sukses berarti: pengguna membuka halaman ini, menemukan panduan yang relevan dalam 30 detik, dan menutupnya dengan masalah terpecahkan — tanpa perlu menghubungi support.

## Brand Personality

**Otoritas yang hangat.** Tiga kata: tepercaya, jernih, manusiawi.

Bukan perusahaan konsultan besar yang dingin. Bukan startup yang terlalu kasual. Al-Khwarizmi adalah mitra operasional: kompeten, tidak bertele-tele, dan memahami bahwa pengguna punya pekerjaan lain yang harus diselesaikan.

Suara: langsung, tanpa jargon berlebih, seperti senior yang sabar menjelaskan ke kolega baru.

## Anti-references

- **Terlalu enterprise/kaku**: SAP SuccessFactors, Oracle HCM, Workday — desain yang terasa seperti software tahun 2010, dingin, padat navigasi, tidak ada ruang napas.
- **SaaS template generik**: Tailwind UI / shadcn landing page kloning — orange gradient hero, tiga kolom fitur dengan ikon rounded, pricing table. Terasa seperti "beli template, ganti teks."
- **Terlalu startup/playful**: Notion, Linear, Figma — terlalu casual dan abstract untuk konteks HR formal Indonesia.

## Design Principles

1. **Kejelasan adalah bentuk hormat.** Setiap elemen di halaman harus memudahkan pengguna menemukan apa yang mereka butuhkan, bukan memperindah halaman untuk halaman itu sendiri.

2. **Dua pengguna, satu suara.** Admin HR dan Karyawan mendapat panduan yang sama-sama otoritatif — tidak ada yang merasa seperti "pengguna biasa" atau "pengguna expert-only."

3. **Kepercayaan melalui presisi.** Screenshot nyata, langkah-langkah yang tepat, tidak ada klaim kosong. Detail yang akurat membangun kepercayaan lebih dari visual yang mewah.

4. **Mobile bukan afterthought.** Banyak karyawan mengakses dari ponsel. Setiap panduan, video, dan langkah harus berfungsi dan terbaca dengan sempurna di layar kecil.

5. **Warna sebagai sistem, bukan dekorasi.** Orange untuk Admin HR, Teal untuk Karyawan — konsistensi ini membantu orientasi visual secara instan tanpa perlu membaca label.

## Accessibility & Inclusion

- Target WCAG 2.1 AA minimum.
- Reduced motion sudah diimplementasikan (`@media prefers-reduced-motion`).
- Bilingual ID/EN dengan toggle instan.
- Pertimbangkan pengguna dengan koneksi lambat: video dengan `preload="metadata"`, gambar WebP dengan fallback.
- Kontras teks harus memenuhi 4.5:1 untuk body, 3:1 untuk heading besar.
