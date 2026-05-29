<script lang="ts">
	import logo from '$lib/assets/logo-khwarizmi.png';
	import {
		Users,
		Clock,
		CalendarDays,
		FileText,
		BarChart2,
		LogOut,
		Lock,
		UserCog,
		MapPin,
		FileSignature,
		Globe,
		Zap,
		ShieldCheck,
		Building2,
		Timer,
		Bell,
		Layers,
		Repeat2,
		KeyRound,
		ChevronDown,
		ChevronRight,
		ExternalLink,
		Menu,
		X,
		BookOpen,
		AlertCircle,
		Mail,
		MessageSquare,
		Ticket,
		CheckCircle2,
		ClipboardList,
		TrendingUp,
		UserCheck,
		Briefcase,
		FileCheck,
		ArrowRight,
		Pencil,
		Star
	} from 'lucide-svelte';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#tentang', label: 'Tentang HRIS' },
		{ href: '#modul', label: 'Modul' },
		{ href: '#panduan-karyawan', label: 'Panduan Karyawan' },
		{ href: '#panduan-admin', label: 'Panduan Admin' },
		{ href: '#troubleshooting', label: 'Troubleshooting' },
		{ href: '#glosarium', label: 'Glosarium' }
	];

	const modules = [
		{
			icon: Users,
			title: 'Data Karyawan',
			user: 'Admin HR',
			desc: 'Kelola profil & data kepegawaian secara lengkap dan terstruktur.',
			color: 'teal'
		},
		{
			icon: Clock,
			title: 'Absensi & Kehadiran',
			user: 'Semua Karyawan',
			desc: 'Clock-in/out berbasis GPS, rekap kehadiran real-time.',
			color: 'orange'
		},
		{
			icon: CalendarDays,
			title: 'Pengajuan Cuti',
			user: 'Semua Karyawan',
			desc: 'Ajukan & pantau status cuti dengan alur persetujuan digital.',
			color: 'teal'
		},
		{
			icon: FileSignature,
			title: 'Dokumen & TTD Digital',
			user: 'Karyawan & Admin HR',
			desc: 'Unggah, kelola, & tanda tangan dokumen kepegawaian secara digital.',
			color: 'orange'
		},
		{
			icon: BarChart2,
			title: 'Penilaian Kinerja',
			user: 'Manajer & Karyawan',
			desc: 'KPI, evaluasi performa, dan feedback terstruktur.',
			color: 'teal'
		},
		{
			icon: LogOut,
			title: 'Pengajuan Resign',
			user: 'Karyawan & Admin HR',
			desc: 'Ajukan & proses pengunduran diri dengan offboarding yang tertib.',
			color: 'orange'
		}
	];

	const employeeGuide = [
		{
			id: '2.1',
			icon: Lock,
			title: 'Login ke Sistem',
			steps: [
				'Buka browser dan akses https://hris.quranmemo.com',
				'Masukkan Email/Username yang telah didaftarkan Admin HR',
				'Masukkan Password awal (NIP atau tanggal lahir)',
				'Masukkan nomor rekening aktif',
				'Klik tombol Masuk — sistem mengarahkan ke Dashboard'
			],
			tip: 'Saat login pertama kali, Anda diminta mengganti password. Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol (min. 8 karakter).'
		},
		{
			id: '2.2',
			icon: Pencil,
			title: 'Memperbarui Profil',
			steps: [
				'Klik ikon foto profil di pojok kanan atas',
				'Pilih menu Profil Saya',
				'Klik tombol Edit Profil',
				'Perbarui data (nomor HP, Alamat, dsb.)',
				'Klik Simpan Perubahan'
			],
			tip: null
		},
		{
			id: '2.3',
			icon: MapPin,
			title: 'Absensi & Kehadiran',
			steps: [
				'Clock-In: Buka menu Kehadiran › Clock-In, aktifkan GPS, klik Clock-In Sekarang',
				'Clock-Out: Buka menu Kehadiran › Clock-Out, periksa rekap jam kerja, klik Konfirmasi',
				'Riwayat: Buka Kehadiran › Riwayat Kehadiran, pilih periode, unduh Excel/PDF'
			],
			tip: 'Clock-in hanya dapat dilakukan dalam radius 100 meter dari lokasi kantor yang telah ditentukan Admin.'
		},
		{
			id: '2.4',
			icon: CalendarDays,
			title: 'Pengajuan Cuti',
			steps: [
				'Buka menu Cuti › Ajukan Cuti',
				'Pilih Jenis Cuti: Tahunan / Sakit / Melahirkan / Khusus',
				'Pilih Tanggal Mulai dan Tanggal Selesai',
				'Isi keterangan alasan cuti',
				'Lampirkan dokumen pendukung jika diperlukan',
				'Klik Ajukan dan tunggu persetujuan atasan'
			],
			tip: 'Cuti tahunan wajib diajukan minimal H-3 hari kerja. Cuti mendadak harus disertai alasan valid.'
		},
		{
			id: '2.5',
			icon: FileSignature,
			title: 'Dokumen & Tanda Tangan Digital',
			steps: [
				'Lihat dokumen: Buka Dokumen › Dokumen Saya, pilih kategori, klik Unduh',
				'Unggah dokumen: Buka Dokumen › Unggah Dokumen, pilih kategori & file (PDF/JPG/PNG maks. 5 MB)',
				'TTD Digital: Buka Dokumen › Perlu Ditandatangani, pilih metode TTD, konfirmasi dengan PIN'
			],
			tip: 'Tanda tangan digital memiliki kekuatan hukum setara TTD basah sesuai UU ITE.'
		},
		{
			id: '2.6',
			icon: LogOut,
			title: 'Pengajuan Resign',
			steps: [
				'Buka menu Resign › Ajukan Resign',
				'Baca ketentuan pengunduran diri',
				'Isi tanggal efektif resign (minimal notice period 30 hari kalender)',
				'Pilih alasan pengunduran diri',
				'Unggah surat pengunduran diri resmi (PDF, ditandatangani)',
				'Klik Ajukan dan tunggu konfirmasi atasan & Admin HR'
			],
			tip: 'Setelah disetujui, Anda mendapat checklist offboarding langsung di sistem.'
		}
	];

	const adminGuide = [
		{
			id: '3.1',
			icon: Users,
			title: 'Kelola Karyawan',
			items: [
				{
					sub: 'Tambah Karyawan Baru',
					steps: [
						'Buka Karyawan › Daftar Karyawan, klik Tambah Karyawan',
						'Isi tab Data Diri: nama, NIK/NIP, tempat & tanggal lahir, alamat, HP, email',
						'Isi tab Data Kepegawaian: jabatan, departemen, status kontrak, golongan, tanggal bergabung',
						'Isi tab Data Rekening & Pajak: rekening bank, NPWP, BPJS Kesehatan & Ketenagakerjaan',
						'Unggah dokumen: foto, KTP, ijazah terakhir',
						'Klik Simpan — email aktivasi otomatis terkirim ke karyawan baru'
					]
				},
				{
					sub: 'Edit & Nonaktifkan Karyawan',
					steps: [
						'Edit: Cari karyawan, klik ikon Edit, perbarui data, klik Simpan Perubahan (audit log otomatis)',
						'Nonaktifkan: Klik nama karyawan › Ubah Status › Nonaktifkan, pilih alasan & tanggal efektif'
					]
				}
			]
		},
		{
			id: '3.2',
			icon: Clock,
			title: 'Monitoring Kehadiran',
			items: [
				{
					sub: 'Rekap, Koreksi & Overtime',
					steps: [
						'Rekap: Buka Kehadiran › Rekap Kehadiran, filter departemen/periode, ekspor Excel',
						'Koreksi: Buka Kehadiran › Koreksi Absensi, cari karyawan, pilih tanggal, isi alasan koreksi',
						'Overtime: Buka Kehadiran › Pengajuan Overtime, klik Setujui atau Tolak dengan catatan'
					]
				}
			]
		},
		{
			id: '3.3',
			icon: FileText,
			title: 'Manajemen Dokumen',
			items: [
				{
					sub: 'Terbitkan, Pantau & Verifikasi Dokumen',
					steps: [
						'Terbitkan: Buka Dokumen › Kelola Dokumen, klik Terbitkan Dokumen Baru, tentukan penerima',
						'Pantau TTD: Buka Dokumen › Status Penandatanganan, filter status, kirim pengingat',
						'Verifikasi: Buka Dokumen › Verifikasi Dokumen, Terima atau Tolak dengan catatan'
					]
				}
			]
		},
		{
			id: '3.4',
			icon: ClipboardList,
			title: 'Proses Resign & Offboarding',
			items: [
				{
					sub: 'Alur Proses Resign',
					steps: [
						'Buka Resign › Daftar Pengajuan, klik nama karyawan untuk lihat detail',
						'Klik Setujui atau Tolak dengan catatan',
						'Jika disetujui, sistem aktifkan checklist offboarding otomatis',
						'Pantau progress di Resign › Tracking Offboarding'
					]
				}
			]
		},
		{
			id: '3.5',
			icon: TrendingUp,
			title: 'Laporan & Analitik',
			items: [
				{
					sub: 'Laporan yang Tersedia',
					steps: [
						'Laporan Kehadiran Bulanan (per departemen / seluruh perusahaan)',
						'Laporan Rekap Cuti & Saldo Cuti',
						'Laporan Overtime — rekap lembur yang disetujui per periode',
						'Laporan Status Dokumen & Tanda Tangan',
						'Laporan Resign & Turnover Karyawan',
						'Dashboard Analitik Headcount & Komposisi Departemen'
					]
				}
			]
		}
	];

	const settingGuide = [
		{
			icon: Building2,
			title: 'Informasi Perusahaan',
			desc: 'Isi nama perusahaan, logo, alamat, nomor telepon, dan zona waktu (default: WIB).',
			color: 'teal'
		},
		{
			icon: Timer,
			title: 'Konfigurasi Kehadiran',
			desc: 'Atur radius clock-in (meter), toleransi keterlambatan (menit), fitur foto selfie, dan jam kerja default.',
			color: 'orange'
		},
		{
			icon: Bell,
			title: 'Konfigurasi Notifikasi',
			desc: 'Pilih jenis notifikasi via email/in-app: persetujuan cuti, overtime, dokumen, dan resign.',
			color: 'teal'
		},
		{
			icon: Layers,
			title: 'Manajemen Departemen',
			desc: 'Tambah, edit, atau nonaktifkan departemen. Tentukan Kepala Departemen untuk setiap unit.',
			color: 'orange'
		},
		{
			icon: Repeat2,
			title: 'Konfigurasi Shift',
			desc: 'Buat shift kerja (pagi/malam/custom) dan assign ke karyawan/departemen via kalender drag-and-drop.',
			color: 'teal'
		},
		{
			icon: KeyRound,
			title: 'Role & Perizinan',
			desc: 'Kelola hak akses 2 level (Admin HR & Karyawan) dan atur izin spesifik per fitur/departemen.',
			color: 'orange'
		}
	];

	const rolesData = [
		{
			role: 'Admin HR',
			access: 'Akses penuh: kelola karyawan, kehadiran, dokumen, overtime, resign, dan semua fitur Setting',
			limit: 'Tidak dapat mengubah role milik Admin lain tanpa konfirmasi Super Admin'
		},
		{
			role: 'Karyawan',
			access: 'Akses terbatas: profil sendiri, kehadiran sendiri, cuti, overtime, dokumen, dan resign',
			limit: 'Tidak dapat melihat data karyawan lain atau mengakses menu Setting'
		}
	];

	const troubleshootingData = [
		{ issue: 'Tidak bisa login', cause: 'Password salah / akun terkunci', solution: 'Klik "Lupa Password" atau hubungi Admin HR' },
		{ issue: 'Clock-in gagal', cause: 'GPS tidak aktif / di luar area', solution: 'Aktifkan GPS dan pastikan dalam radius kantor' },
		{ issue: 'Dokumen tidak muncul', cause: 'Belum diterbitkan Admin HR', solution: 'Hubungi Admin HR untuk memverifikasi penerbitan dokumen' },
		{ issue: 'Cuti tidak disetujui', cause: 'Atasan belum approve / kuota habis', solution: 'Hubungi atasan langsung atau cek sisa saldo cuti' },
		{ issue: 'Resign tidak bisa diajukan', cause: 'Notice period belum memenuhi syarat', solution: 'Pastikan tanggal efektif minimal 30 hari dari hari ini' },
		{ issue: 'Overtime tidak muncul di rekap', cause: 'Pengajuan belum disetujui Admin', solution: 'Cek status di menu Overtime › Riwayat Pengajuan' },
		{ issue: 'Menu Setting tidak bisa diakses', cause: 'Role akun bukan Admin HR', solution: 'Hubungi Admin HR untuk pengubahan role akun' },
		{ issue: 'Data tidak tersimpan', cause: 'Sesi login kedaluwarsa', solution: 'Refresh halaman dan login ulang' }
	];

	const glossary = [
		{ term: 'HRIS', def: 'Human Resource Information System — sistem informasi SDM berbasis digital', icon: BookOpen },
		{ term: 'Clock-In / Out', def: 'Pencatatan waktu masuk dan pulang kerja secara digital', icon: Clock },
		{ term: 'Tanda Tangan Digital', def: 'Tanda tangan elektronik berkekuatan hukum melalui sistem HRIS', icon: FileSignature },
		{ term: 'KPI', def: 'Key Performance Indicator — indikator pengukur kinerja karyawan', icon: TrendingUp },
		{ term: 'BPJS', def: 'Badan Penyelenggara Jaminan Sosial — program jaminan sosial nasional', icon: ShieldCheck },
		{ term: 'Offboarding', def: 'Proses administrasi pelepasan karyawan yang mengundurkan diri atau berakhir kontraknya', icon: LogOut },
		{ term: 'Notice Period', def: 'Masa pemberitahuan wajib sebelum tanggal efektif resign (minimal 30 hari)', icon: Bell },
		{ term: 'Overtime', def: 'Lembur — jam kerja di luar jadwal normal yang diajukan karyawan dan disetujui Admin HR', icon: Timer },
		{ term: 'Shift', def: 'Jadwal kerja bergilir yang dikonfigurasi Admin dan di-assign ke karyawan tertentu', icon: Repeat2 },
		{ term: 'Role', def: 'Level hak akses pengguna dalam sistem HRIS (Admin HR atau Karyawan)', icon: KeyRound },
		{ term: 'Audit Log', def: 'Catatan otomatis sistem atas setiap perubahan data dan aksi pengguna di HRIS', icon: ClipboardList }
	];

	const overtimeFlow = [
		{ step: 1, actor: 'Karyawan', action: 'Ajukan lembur via menu Overtime', status: 'Diajukan', color: 'teal', icon: UserCheck },
		{ step: 2, actor: 'Sistem', action: 'Notifikasi masuk ke Admin HR', status: 'Menunggu', color: 'orange', icon: Bell },
		{ step: 3, actor: 'Admin HR', action: 'Review detail: tanggal, jam, alasan', status: 'Review', color: 'teal', icon: FileText },
		{ step: 4, actor: 'Admin HR', action: 'Klik Setujui atau Tolak dengan catatan', status: 'Final', color: 'orange', icon: CheckCircle2 },
		{ step: 5, actor: 'Sistem', action: 'Notifikasi & lembur tercatat di rekap', status: 'Selesai', color: 'teal', icon: BarChart2 }
	];

	const offboardingItems = [
		{ no: 1, item: 'Serah terima pekerjaan & dokumentasi tugas', pic: 'Karyawan & Atasan', icon: Briefcase },
		{ no: 2, item: 'Pengembalian aset perusahaan (laptop, kartu akses, dsb.)', pic: 'GA / Admin', icon: ClipboardList },
		{ no: 3, item: 'Penyelesaian administrasi keuangan (reimbursement, dsb.)', pic: 'Keuangan', icon: FileCheck },
		{ no: 4, item: 'Penerbitan surat pengalaman kerja', pic: 'Admin HR', icon: FileText },
		{ no: 5, item: 'Penonaktifan akun sistem & akses aplikasi', pic: 'IT / Admin HR', icon: Lock },
		{ no: 6, item: 'Exit interview', pic: 'HR Manager', icon: MessageSquare }
	];

	let openEmployeeCard = $state<string | null>(null);
	let openAdminCard = $state<string | null>(null);

	function toggleEmployee(id: string) {
		openEmployeeCard = openEmployeeCard === id ? null : id;
	}

	function toggleAdmin(id: string) {
		openAdminCard = openAdminCard === id ? null : id;
	}
</script>

<!-- NAVBAR -->
<nav class="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<a href="#" class="flex items-center gap-3">
				<img src={logo} alt="Al-Khwarizmi" class="h-9 w-auto" />
				<div class="leading-tight">
					<div class="text-sm font-bold text-gray-900">HRIS</div>
					<div class="text-xs text-[#0d9488] font-medium">Al-Khwarizmi</div>
				</div>
			</a>

			<div class="hidden lg:flex items-center gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded-lg transition-colors"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="https://hris.quranmemo.com"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
				>
					Buka HRIS
					<ExternalLink size={14} />
				</a>
			</div>

			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={() => (mobileMenuOpen = false)}
					class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#f97316] hover:bg-orange-50 rounded-lg transition-colors"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://hris.quranmemo.com"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center gap-1.5 mt-2 px-4 py-2.5 bg-[#f97316] text-white text-sm font-semibold rounded-lg"
			>
				Buka HRIS
				<ExternalLink size={14} />
			</a>
		</div>
	{/if}
</nav>

<!-- HERO -->
<section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#134e4a] pt-16">
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#f97316]/20 blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#14b8a6]/30 blur-3xl"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/10"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10"></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
					<Star size={14} class="fill-[#fbbf24] text-[#fbbf24]" />
					Versi 1.0 — 2025
				</div>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
					Manual Book
					<span class="block text-[#fbbf24]">HRIS</span>
					<span class="block text-white/80 text-3xl sm:text-4xl mt-1">Al-Khwarizmi</span>
				</h1>
				<p class="text-lg sm:text-xl text-teal-100 leading-relaxed mb-8 max-w-lg">
					Panduan lengkap penggunaan <strong class="text-white">Human Resource Information System</strong> — sistem SDM berbasis web yang terintegrasi untuk karyawan dan Admin HR.
				</p>
				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#panduan-karyawan"
						class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
					>
						<BookOpen size={18} />
						Panduan Karyawan
					</a>
					<a
						href="#panduan-admin"
						class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all backdrop-blur-sm"
					>
						<UserCog size={18} />
						Panduan Admin HR
					</a>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				{#each [
					{ icon: Users, label: 'Kelola Karyawan', desc: 'Data SDM terpusat & terstruktur' },
					{ icon: MapPin, label: 'Absensi GPS', desc: 'Clock-in/out real-time' },
					{ icon: FileSignature, label: 'Dokumen Digital', desc: 'TTD berkekuatan hukum UU ITE' },
					{ icon: BarChart2, label: 'Laporan & Analitik', desc: 'Dashboard keputusan bisnis' }
				] as card}
					<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all">
						<div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
							<card.icon size={20} class="text-white" />
						</div>
						<div class="text-white font-semibold text-sm">{card.label}</div>
						<div class="text-teal-200 text-xs mt-1">{card.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 inset-x-0">
		<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
			<path d="M0 80L60 73.3C120 66.7 240 53.3 360 53.3C480 53.3 600 66.7 720 66.7C840 66.7 960 53.3 1080 46.7C1200 40 1320 40 1380 40L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
		</svg>
	</div>
</section>

<!-- TENTANG HRIS -->
<section id="tentang" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-teal-50 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BAB 1 — PENDAHULUAN</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Apa itu HRIS?</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
				<strong>Human Resource Information System (HRIS)</strong> adalah sistem informasi berbasis web yang digunakan untuk mengelola seluruh aktivitas SDM perusahaan secara <span class="text-[#0d9488] font-semibold">digital dan terintegrasi</span>.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each [
				{ icon: Globe, title: 'Akses Kapan Saja', desc: 'Karyawan dan tim HR dapat mengakses informasi kepegawaian, mengajukan permohonan, dan memantau data kehadiran secara real-time dari mana saja.', iconBg: 'bg-teal-50', iconColor: 'text-[#0d9488]' },
				{ icon: Zap, title: 'Terintegrasi Penuh', desc: 'Seluruh modul — dari data karyawan, absensi, cuti, dokumen, hingga resign — terhubung dalam satu platform yang saling mendukung.', iconBg: 'bg-orange-50', iconColor: 'text-[#f97316]' },
				{ icon: ShieldCheck, title: 'Aman & Terpercaya', desc: 'Didukung audit log otomatis, tanda tangan digital berkekuatan hukum sesuai UU ITE, dan sistem role-based access control.', iconBg: 'bg-teal-50', iconColor: 'text-[#0d9488]' }
			] as feat}
				<div class="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all bg-white">
					<div class="w-12 h-12 rounded-xl {feat.iconBg} flex items-center justify-center mb-5">
						<feat.icon size={24} class={feat.iconColor} />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
					<p class="text-gray-600 leading-relaxed">{feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- MODUL -->
<section id="modul" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-orange-50 text-[#f97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">RUANG LINGKUP SISTEM</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Modul-Modul HRIS</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				6 modul utama yang mencakup seluruh kebutuhan pengelolaan SDM perusahaan Anda.
			</p>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each modules as mod}
				<div class="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
					<div class="flex items-start justify-between mb-5">
						<div class="w-12 h-12 rounded-xl {mod.color === 'teal' ? 'bg-teal-50' : 'bg-orange-50'} flex items-center justify-center">
							<mod.icon size={22} class="{mod.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
						</div>
						<span class="text-xs font-medium px-2.5 py-1 rounded-full {mod.color === 'teal' ? 'bg-teal-50 text-[#0d9488]' : 'bg-orange-50 text-[#f97316]'}">
							{mod.user}
						</span>
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">{mod.title}</h3>
					<p class="text-gray-600 text-sm leading-relaxed">{mod.desc}</p>
					<div class="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 {mod.color === 'teal' ? 'bg-gradient-to-r from-[#0d9488] to-[#14b8a6]' : 'bg-gradient-to-r from-[#f97316] to-[#fbbf24]'}"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PANDUAN KARYAWAN -->
<section id="panduan-karyawan" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-teal-50 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BAB 2</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Panduan Karyawan</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Panduan lengkap bagi semua karyawan untuk menggunakan fitur-fitur HRIS sehari-hari.
			</p>
		</div>

		<div class="space-y-4 max-w-4xl mx-auto">
			{#each employeeGuide as guide}
				<div class="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0d9488]/40 transition-colors">
					<button
						class="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-teal-50/50 transition-colors"
						onclick={() => toggleEmployee(guide.id)}
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
								<guide.icon size={20} class="text-[#0d9488]" />
							</div>
							<div>
								<div class="text-xs text-[#0d9488] font-semibold mb-0.5">Bagian {guide.id}</div>
								<div class="text-base sm:text-lg font-bold text-gray-900">{guide.title}</div>
							</div>
						</div>
						<ChevronDown
							size={20}
							class="text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 {openEmployeeCard === guide.id ? 'rotate-180' : ''}"
						/>
					</button>

					{#if openEmployeeCard === guide.id}
						<div class="px-5 sm:px-6 pb-6 border-t border-gray-100 bg-white">
							<ol class="mt-4 space-y-3">
								{#each guide.steps as step, i}
									<li class="flex gap-3 items-start">
										<span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#0d9488]/10 text-[#0d9488] text-xs font-bold flex items-center justify-center mt-0.5">
											{i + 1}
										</span>
										<span class="text-gray-700 text-sm leading-relaxed">{step}</span>
									</li>
								{/each}
							</ol>
							{#if guide.tip}
								<div class="mt-5 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
									<AlertCircle size={18} class="text-amber-500 flex-shrink-0 mt-0.5" />
									<p class="text-amber-800 text-sm leading-relaxed">{guide.tip}</p>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PANDUAN ADMIN -->
<section id="panduan-admin" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-orange-50 text-[#f97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BAB 3</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Panduan Admin HR</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Panduan untuk pengguna dengan role <strong>Admin HR</strong> yang memiliki akses penuh ke seluruh modul pengelolaan SDM.
			</p>
		</div>

		<div class="space-y-4 max-w-4xl mx-auto">
			{#each adminGuide as guide}
				<div class="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#f97316]/40 transition-colors">
					<button
						class="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-orange-50/50 transition-colors"
						onclick={() => toggleAdmin(guide.id)}
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
								<guide.icon size={20} class="text-[#f97316]" />
							</div>
							<div>
								<div class="text-xs text-[#f97316] font-semibold mb-0.5">Bagian {guide.id}</div>
								<div class="text-base sm:text-lg font-bold text-gray-900">{guide.title}</div>
							</div>
						</div>
						<ChevronDown
							size={20}
							class="text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 {openAdminCard === guide.id ? 'rotate-180' : ''}"
						/>
					</button>

					{#if openAdminCard === guide.id}
						<div class="px-5 sm:px-6 pb-6 border-t border-gray-100 bg-white space-y-5">
							{#each guide.items as item}
								<div class="mt-4">
									<h4 class="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
										<ChevronRight size={14} class="text-[#f97316]" />
										{item.sub}
									</h4>
									<ol class="space-y-3">
										{#each item.steps as step, i}
											<li class="flex gap-3 items-start">
												<span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#f97316]/10 text-[#f97316] text-xs font-bold flex items-center justify-center mt-0.5">
													{i + 1}
												</span>
												<span class="text-gray-700 text-sm leading-relaxed">{step}</span>
											</li>
										{/each}
									</ol>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SETTING -->
<section id="setting" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-teal-50 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BAB 4 — KHUSUS ADMIN</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Fitur Setting</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Menu Setting hanya dapat diakses Admin HR untuk mengonfigurasi sistem HRIS sesuai kebutuhan perusahaan.
			</p>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
			{#each settingGuide as s}
				<div class="rounded-2xl p-6 border hover:shadow-md transition-all {s.color === 'teal' ? 'bg-teal-50/50 border-teal-100 hover:border-teal-200' : 'bg-orange-50/50 border-orange-100 hover:border-orange-200'}">
					<div class="w-10 h-10 rounded-xl {s.color === 'teal' ? 'bg-teal-100' : 'bg-orange-100'} flex items-center justify-center mb-4">
						<s.icon size={20} class="{s.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
					</div>
					<h3 class="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
					<p class="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
				</div>
			{/each}
		</div>

		<div class="max-w-4xl mx-auto">
			<h3 class="text-xl font-bold text-gray-900 mb-6 text-center">Level Role & Hak Akses</h3>
			<div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
				<table class="w-full text-sm min-w-[500px]">
					<thead class="bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white">
						<tr>
							<th class="text-left px-6 py-4 font-semibold">Role</th>
							<th class="text-left px-6 py-4 font-semibold">Hak Akses</th>
							<th class="text-left px-6 py-4 font-semibold">Batasan</th>
						</tr>
					</thead>
					<tbody>
						{#each rolesData as row, i}
							<tr class="{i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
								<td class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap align-top">
									<span class="inline-flex items-center gap-2">
										<span class="w-2 h-2 rounded-full flex-shrink-0 {row.role === 'Admin HR' ? 'bg-[#f97316]' : 'bg-[#0d9488]'}"></span>
										{row.role}
									</span>
								</td>
								<td class="px-6 py-4 text-gray-700 align-top">{row.access}</td>
								<td class="px-6 py-4 text-gray-500 text-xs align-top">{row.limit}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>

<!-- ALUR OVERTIME & OFFBOARDING -->
<section class="py-20 bg-gradient-to-br from-teal-50/50 to-orange-50/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-teal-50 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">ALUR KERJA</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Alur Pengajuan Overtime</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">Proses persetujuan lembur yang transparan dan terotomasi.</p>
		</div>

		<div class="max-w-4xl mx-auto mb-20">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
				{#each overtimeFlow as flow}
					<div class="flex flex-col items-center text-center">
						<div class="w-14 h-14 rounded-full {flow.color === 'teal' ? 'bg-[#0d9488]' : 'bg-[#f97316]'} text-white flex items-center justify-center shadow-lg mb-3">
							<flow.icon size={22} />
						</div>
						<span class="text-xs font-bold {flow.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'} mb-1">{flow.actor}</span>
						<p class="text-xs text-gray-600 leading-tight mb-2">{flow.action}</p>
						<span class="text-xs px-2 py-0.5 rounded-full {flow.color === 'teal' ? 'bg-teal-50 text-[#0d9488]' : 'bg-orange-50 text-[#f97316]'} font-medium">
							{flow.status}
						</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Checklist Offboarding</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">Proses pelepasan karyawan yang tertib dan terdokumentasi dalam sistem.</p>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
			{#each offboardingItems as c}
				<div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all flex gap-4 items-start">
					<div class="flex-shrink-0 w-9 h-9 rounded-xl bg-[#0d9488]/10 flex items-center justify-center">
						<c.icon size={18} class="text-[#0d9488]" />
					</div>
					<div>
						<p class="text-sm font-medium text-gray-800 leading-snug">{c.item}</p>
						<p class="text-xs text-[#f97316] font-semibold mt-1">{c.pic}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TROUBLESHOOTING -->
<section id="troubleshooting" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-red-50 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BAB 5</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">Solusi cepat untuk masalah yang paling umum ditemui saat menggunakan HRIS.</p>
		</div>

		<div class="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
			<table class="w-full text-sm min-w-[600px]">
				<thead class="bg-gray-50 border-b border-gray-200">
					<tr>
						<th class="text-left px-6 py-4 font-semibold text-gray-700">Masalah</th>
						<th class="text-left px-6 py-4 font-semibold text-gray-700">Kemungkinan Penyebab</th>
						<th class="text-left px-6 py-4 font-semibold text-gray-700">Solusi</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100">
					{#each troubleshootingData as row}
						<tr class="hover:bg-gray-50 transition-colors">
							<td class="px-6 py-4 font-medium text-gray-900">{row.issue}</td>
							<td class="px-6 py-4 text-gray-600">{row.cause}</td>
							<td class="px-6 py-4 text-[#0d9488] font-medium">{row.solution}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
			{#each [
				{ icon: Mail, label: 'Email Support', value: 'Hubungi via Email' },
				{ icon: MessageSquare, label: 'WhatsApp Support', value: 'Chat via WhatsApp' },
				{ icon: Ticket, label: 'Tiket Support', value: 'Buat tiket baru' }
			] as contact}
				<div class="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 hover:border-[#0d9488]/40 hover:shadow-md transition-all group cursor-pointer">
					<div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-[#0d9488] transition-colors">
						<contact.icon size={22} class="text-[#0d9488] group-hover:text-white transition-colors" />
					</div>
					<div class="text-sm font-bold text-gray-900 mb-1">{contact.label}</div>
					<div class="text-sm text-[#0d9488] group-hover:text-[#f97316] transition-colors">{contact.value}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- GLOSARIUM -->
<section id="glosarium" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-block bg-teal-50 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">REFERENSI</div>
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Glosarium</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">Daftar istilah penting yang digunakan dalam sistem HRIS.</p>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
			{#each glossary as item, i}
				<div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-[#0d9488]/20 transition-all">
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-9 h-9 rounded-lg {i % 2 === 0 ? 'bg-[#0d9488]/10' : 'bg-[#f97316]/10'} flex items-center justify-center">
							<item.icon size={18} class="{i % 2 === 0 ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
						</div>
						<div>
							<div class="text-sm font-bold text-gray-900 mb-1">{item.term}</div>
							<div class="text-xs text-gray-600 leading-relaxed">{item.def}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-20 bg-gradient-to-br from-[#0d9488] to-[#0f766e]">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Siap Menggunakan HRIS?</h2>
		<p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
			Akses sistem HRIS sekarang dan kelola seluruh aktivitas SDM perusahaan Anda secara digital dan efisien.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="https://hris.quranmemo.com"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
			>
				Buka HRIS Sekarang
				<ExternalLink size={18} />
			</a>
			<a
				href="#tentang"
				class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all backdrop-blur-sm text-lg"
			>
				<BookOpen size={18} />
				Baca Panduan Lagi
			</a>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-900 text-gray-400 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-3 mb-4">
					<img src={logo} alt="Al-Khwarizmi" class="h-10 w-auto brightness-0 invert opacity-80" />
					<div>
						<div class="text-white font-bold text-sm">HRIS</div>
						<div class="text-[#14b8a6] text-xs">Al-Khwarizmi</div>
					</div>
				</div>
				<p class="text-sm leading-relaxed">
					Sistem informasi SDM terintegrasi untuk perusahaan modern. Efisien, transparan, dan aman.
				</p>
			</div>

			<div>
				<h4 class="text-white font-semibold mb-4 text-sm">Panduan</h4>
				<ul class="space-y-2 text-sm">
					{#each [
						{ href: '#panduan-karyawan', label: 'Panduan Karyawan' },
						{ href: '#panduan-admin', label: 'Panduan Admin HR' },
						{ href: '#setting', label: 'Fitur Setting' },
						{ href: '#troubleshooting', label: 'Troubleshooting' }
					] as link}
						<li>
							<a href={link.href} class="hover:text-[#14b8a6] transition-colors inline-flex items-center gap-1.5">
								<ArrowRight size={12} />
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-white font-semibold mb-4 text-sm">Modul</h4>
				<ul class="space-y-2 text-sm text-gray-500">
					{#each ['Data Karyawan', 'Absensi & Kehadiran', 'Pengajuan Cuti', 'Dokumen & TTD Digital', 'Penilaian Kinerja', 'Pengajuan Resign'] as mod}
						<li>{mod}</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-white font-semibold mb-4 text-sm">Informasi</h4>
				<ul class="space-y-2 text-sm">
					<li>Versi Manual Book: 1.0</li>
					<li>Tahun: 2025</li>
					<li class="pt-2">
						<a href="https://hris.quranmemo.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[#14b8a6] hover:text-[#f97316] transition-colors font-medium">
							hris.quranmemo.com
							<ExternalLink size={12} />
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
			<p>© 2025 Al-Khwarizmi. Manual Book HRIS v1.0</p>
			<p>Dibuat untuk kemudahan pengelolaan SDM yang lebih baik.</p>
		</div>
	</div>
</footer>
