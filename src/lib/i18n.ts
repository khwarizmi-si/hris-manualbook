export const t = {
	id: {
		nav: {
			links: [
				{ href: '#tentang', label: 'Tentang HRIS' },
				{ href: '#modul', label: 'Modul' },
				{ href: '#panduan-karyawan', label: 'Panduan Karyawan' },
				{ href: '#panduan-admin', label: 'Panduan Admin' },
				{ href: '#troubleshooting', label: 'Troubleshooting' },
				{ href: '#glosarium', label: 'Glosarium' }
			],
			demo: 'Minta Demo'
		},
		hero: {
			slogan: 'Panduan Sistem SDM Digital',
			cta: 'Baca Panduan →',
			subtitle:
				'Panduan lengkap penggunaan Human Resource Information System — sistem SDM berbasis web yang terintegrasi untuk karyawan dan Admin HR.',
			subtitle_strong: 'Human Resource Information System'
		},
		about: {
			badge: 'Apa itu HRIS?',
			heading_plain: 'Apa itu ',
			heading_accent: 'HRIS',
			heading_end: '?',
			desc_plain: ' adalah sistem informasi berbasis web yang digunakan untuk mengelola seluruh aktivitas SDM perusahaan secara ',
			desc_accent: 'digital dan terintegrasi',
			desc_end: ' — dapat diakses kapan saja dan di mana saja oleh karyawan maupun Admin HR.',
			highlights: [
				{
					title: 'Akses dari Mana Saja',
					desc: 'Berbasis web — cukup buka browser, tidak perlu install aplikasi. Tersedia di desktop maupun ponsel.'
				},
				{
					title: 'Absensi GPS + Selfie',
					desc: 'Clock-in divalidasi oleh lokasi GPS dan foto selfie secara bersamaan untuk memastikan kehadiran yang akurat.'
				},
				{
					title: 'Notifikasi Real-Time',
					desc: 'Setiap pengajuan — cuti, overtime, resign — menghasilkan notifikasi email otomatis ke semua pihak terkait.'
				},
				{
					title: 'TTD Digital Sah Hukum',
					desc: 'Tanda tangan digital berkekuatan hukum sesuai UU ITE. Tersedia tiga metode: gambar, ketik, atau unggah.'
				},
				{
					title: 'Aman & Teraudit',
					desc: 'Setiap perubahan data tercatat dalam audit log otomatis — siapa mengubah apa dan kapan tersimpan permanen.'
				},
				{
					title: 'Alur Persetujuan Terstruktur',
					desc: 'Pengajuan karyawan melewati alur approval yang jelas sesuai hierarki — tidak ada yang diproses di luar sistem.'
				}
			],
			center_tag: 'Al-Khwarizmi',
			center_title: 'Sistem SDM Digital Terintegrasi',
			center_cta: 'Lihat Matriks Akses',
			cta_heading: 'Siap menggunakan HRIS?',
			cta_sub: 'Kelola SDM perusahaan Anda lebih efisien, transparan, dan digital.',
			cta_btn: 'Minta Demo Sekarang'
		},
		module: {
			badge: 'Hak Akses per Role',
			heading_plain: 'Siapa Bisa ',
			heading_accent: 'Apa?',
			desc: 'Setiap role memiliki akses berbeda. Gunakan tabel ini sebagai referensi cepat sebelum membaca panduan lengkap.',
			feature_names: [
				'Absensi (Clock In/Out)',
				'Koreksi Absensi',
				'Pengajuan Cuti',
				'Approval Cuti',
				'Pengajuan Overtime',
				'Approval Overtime',
				'Dokumen & TTD Digital',
				'Kelola Data Karyawan',
				'Transfer Karyawan',
				'Pengajuan Resign',
				'Statistik & Laporan'
			],
			role_labels: ['Karyawan', 'Finance', 'Manager', 'Admin HR'],
			badge_labels: { full: 'Akses', submit: 'Ajukan', approval: 'Approval', manage: 'Kelola', none: '—' },
			no_access: 'Tidak Ada Akses'
		},
		employee: {
			badge: 'BAB 2',
			section: 'BAGIAN',
			heading_plain: 'Panduan ',
			heading_accent: 'Karyawan',
			desc: 'Panduan lengkap bagi semua karyawan untuk menggunakan fitur-fitur HRIS sehari-hari.',
			screenshot_pending: 'Screenshot belum tersedia',
			video_tutorial: 'Video Tutorial',
			tutorial_video: {
				badge: 'Video Tutorial',
				title: 'Tutorial Lengkap Panduan Karyawan',
				desc: 'Tonton panduan ringkas untuk memahami alur penggunaan HRIS sehari-hari sebelum membuka langkah per fitur di bawah.'
			},
			guides: [
				{
					id: '2.1',
					title: 'Login ke Sistem',
					steps: [
						'Buka browser dan akses https://khwarizmi.co.id',
						'Masukkan Email/Username yang telah didaftarkan Admin HR',
						'Masukkan Password awal (NIP atau tanggal lahir)',
						'Masukkan nomor rekening aktif',
						'Klik tombol Masuk — sistem mengarahkan ke Dashboard'
					],
					tip: null as string | null
				},
				{
					id: '2.2',
					title: 'Memperbarui Profil',
					steps: [
						'Klik ikon foto profil di pojok kanan atas',
						'Pilih menu Profil Saya',
						'Klik tombol Edit Profil',
						'Perbarui data (nomor HP, Alamat, dsb.)',
						'Klik Simpan Perubahan'
					],
					tip: null as string | null
				},
				{
					id: '2.3',
					title: 'Absensi & Kehadiran',
					steps: [
						'Clock-In: Buka menu Kehadiran › Clock-In, aktifkan GPS, ambil selfie, klik Clock-In Sekarang',
						'Clock-Out: Buka menu Kehadiran › Clock-Out, periksa rekap jam kerja, klik Konfirmasi',
						'Riwayat: Buka Kehadiran › Riwayat Kehadiran, pilih periode — lihat status On-time / Terlambat',
						'Ekspor riwayat kehadiran ke Excel atau PDF dari halaman Riwayat'
					],
					tip: 'Clock-in hanya dapat dilakukan dalam radius 100 meter dari lokasi kantor. GPS dan kamera harus aktif saat clock-in.'
				},
				{
					id: '2.4',
					title: 'Koreksi Absensi',
					steps: [
						'Buka menu Kehadiran › Pengajuan Koreksi',
						'Klik Buat Pengajuan Baru',
						'Pilih tanggal absensi yang perlu dikoreksi',
						'Isi jam masuk dan/atau jam keluar yang benar',
						'Tuliskan alasan koreksi dengan jelas',
						'Klik Kirim Pengajuan — status akan tampil Menunggu Persetujuan',
						'Pantau status di menu Kehadiran › Riwayat Pengajuan'
					],
					tip: 'Kuota pengajuan koreksi terbatas per bulan. Pastikan alasan yang diisi valid dan dapat diverifikasi oleh Admin.'
				},
				{
					id: '2.5',
					title: 'Pengajuan Overtime',
					steps: [
						'Buka menu Overtime › Buat Pengajuan',
						'Pilih Tanggal lembur',
						'Isi Jam Mulai dan Jam Selesai lembur',
						'Isi Durasi Istirahat (jika ada) — sistem otomatis menghitung Net Overtime Hours',
						'Tuliskan keterangan pekerjaan yang dilembur',
						'Klik Ajukan dan tunggu persetujuan atasan',
						'Pantau daftar overtime di menu Overtime › Daftar Pengajuan'
					],
					tip: 'Sistem menghitung otomatis total jam lembur bersih (dikurangi waktu istirahat). Pengajuan yang disetujui masuk ke rekap kompensasi.'
				},
				{
					id: '2.6',
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
					id: '2.7',
					title: 'Dokumen & Tanda Tangan Digital',
					steps: [
						'Lihat dokumen: Buka Dokumen › Dokumen Saya, pilih kategori, klik Unduh',
						'Unggah dokumen: Buka Dokumen › Unggah Dokumen, pilih kategori & file (PDF maks. 10 MB)',
						'TTD Digital: Buka Dokumen › Perlu Ditandatangani, pilih metode — Gambar / Ketik / Unggah tanda tangan',
						'Posisikan kotak tanda tangan pada halaman PDF, konfirmasi dengan PIN'
					],
					tip: 'Tanda tangan digital memiliki kekuatan hukum setara TTD basah sesuai UU ITE.'
				},
				{
					id: '2.8',
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
			]
		},
		admin: {
			badge: 'BAB 3',
			section: 'BAGIAN',
			heading_plain: 'Panduan ',
			heading_accent: 'Admin HR',
			desc_plain: 'Panduan untuk pengguna dengan role ',
			desc_role: 'Admin HR',
			desc_end: ' yang memiliki akses penuh ke seluruh modul pengelolaan SDM.',
			screenshot_pending: 'Screenshot belum tersedia',
			video_tutorial: 'Video Tutorial',
			tutorial_video: {
				badge: 'Video Tutorial',
				title: 'Tutorial Lengkap Admin HR',
				desc: 'Tonton panduan ringkas untuk memahami alur utama Admin HR sebelum membuka langkah per modul di bawah.'
			},
			guides: [
				{
					id: '3.1',
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
					title: 'Transfer Karyawan',
					items: [
						{
							sub: 'Kelola Data Transfer',
							steps: [
								'Buka Karyawan › Transfer, klik Buat Transfer Baru',
								'Cari dan pilih karyawan yang akan ditransfer',
								'Isi detail transfer: departemen/jabatan tujuan, tanggal efektif, keterangan',
								'Klik Simpan — data transfer tersimpan dengan status Diproses',
								'Pantau status transfer di daftar: cari by nama/NIP, lihat detail, atau hapus jika perlu'
							]
						}
					]
				},
				{
					id: '3.3',
					title: 'Monitoring Kehadiran',
					items: [
						{
							sub: 'Rekap & Filter Kehadiran',
							steps: [
								'Buka Kehadiran › Semua Kehadiran',
								'Filter data per hari, minggu, bulan, atau tahun sesuai kebutuhan',
								'Gunakan fitur pencarian untuk menemukan data karyawan tertentu',
								'Lihat detail sesi kehadiran (jam masuk, jam keluar, lokasi GPS)',
								'Ekspor rekap ke Excel untuk keperluan penggajian atau audit'
							]
						},
						{
							sub: 'Statistik & Koreksi Kehadiran',
							steps: [
								'Statistik: Buka Kehadiran › Statistik — lihat grafik kehadiran per minggu/bulan/kuartal/tahun',
								'Grafik menampilkan persentase On-time, Terlambat, dan Tidak Hadir per departemen',
								'Koreksi: Buka Kehadiran › Pengajuan Koreksi, cari pengajuan karyawan, klik Setujui atau Tolak'
							]
						}
					]
				},
				{
					id: '3.4',
					title: 'Approval Overtime',
					items: [
						{
							sub: 'Kelola Pengajuan Lembur',
							steps: [
								'Buka Overtime › Daftar Pengajuan',
								'Filter pengajuan berdasarkan status: Menunggu / Disetujui / Ditolak',
								'Klik detail pengajuan untuk melihat tanggal, jam, dan keterangan lembur',
								'Klik Setujui — data otomatis masuk rekap overtime karyawan',
								'Klik Tolak dan isi catatan alasan penolakan yang akan diterima karyawan'
							]
						}
					]
				},
				{
					id: '3.5',
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
					id: '3.6',
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
					id: '3.7',
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
			]
		},
		setting: {
			badge: 'BAB 4 — Khusus Admin',
			heading_plain: 'Fitur ',
			heading_accent: 'Setting',
			desc: 'Menu Setting hanya dapat diakses Admin HR untuk mengonfigurasi sistem HRIS sesuai kebutuhan perusahaan.',
			settings: [
				{
					title: 'Informasi Perusahaan',
					desc: 'Isi nama perusahaan, logo, alamat, nomor telepon, dan zona waktu (default: WIB).'
				},
				{
					title: 'Konfigurasi Kehadiran',
					desc: 'Atur radius clock-in (meter), toleransi keterlambatan (menit), fitur foto selfie, dan jam kerja default.'
				},
				{
					title: 'Konfigurasi Notifikasi',
					desc: 'Pilih jenis notifikasi via email/in-app: persetujuan cuti, overtime, dokumen, dan resign.'
				},
				{
					title: 'Manajemen Departemen',
					desc: 'Tambah, edit, atau nonaktifkan departemen. Tentukan Kepala Departemen untuk setiap unit.'
				},
				{
					title: 'Konfigurasi Shift',
					desc: 'Buat shift kerja (pagi/malam/custom) dan assign ke karyawan/departemen via kalender drag-and-drop.'
				},
				{
					title: 'Role & Perizinan',
					desc: 'Kelola hak akses 2 level (Admin HR & Karyawan) dan atur izin spesifik per fitur/departemen.'
				}
			],
			roles: [
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
			],
			role_heading: 'Ringkasan Hak Akses',
			access_label: 'Akses',
			limit_label: 'Pembatasan'
		},
		workflow: {
			badge: 'Alur Kerja',
			heading_plain: 'Alur Pengajuan ',
			heading_accent: 'Overtime',
			desc: 'Proses persetujuan lembur yang transparan dan terotomasi dalam sistem.',
			overtime_steps: [
				{ step: 1, actor: 'Karyawan', action: 'Ajukan lembur via menu Overtime', status: 'Diajukan' },
				{ step: 2, actor: 'Sistem', action: 'Notifikasi masuk ke Admin HR', status: 'Menunggu' },
				{ step: 3, actor: 'Admin HR', action: 'Review detail: tanggal, jam, alasan', status: 'Review' },
				{ step: 4, actor: 'Admin HR', action: 'Klik Setujui atau Tolak dengan catatan', status: 'Final' },
				{ step: 5, actor: 'Sistem', action: 'Notifikasi & lembur tercatat di rekap', status: 'Selesai' }
			],
			offboarding_badge: 'Offboarding',
			offboarding_heading: 'Checklist Offboarding',
			offboarding_desc: 'Daftar item yang harus diselesaikan saat karyawan mengundurkan diri.',
			offboarding_col_item: 'Item',
			offboarding_col_pic: 'Penanggung Jawab',
			offboarding_items: [
				{ no: 1, item: 'Serah terima pekerjaan & dokumentasi tugas', pic: 'Karyawan & Atasan' },
				{ no: 2, item: 'Pengembalian aset perusahaan (laptop, kartu akses, dsb.)', pic: 'GA / Admin' },
				{ no: 3, item: 'Penyelesaian administrasi keuangan (reimbursement, dsb.)', pic: 'Keuangan' },
				{ no: 4, item: 'Penerbitan surat pengalaman kerja', pic: 'Admin HR' },
				{ no: 5, item: 'Penonaktifan akun sistem & akses aplikasi', pic: 'IT / Admin HR' },
				{ no: 6, item: 'Exit interview', pic: 'HR Manager' }
			]
		},
		troubleshooting: {
			badge: 'BAB 5',
			heading_accent: 'Trouble',
			heading_plain: 'shooting',
			desc: 'Solusi cepat untuk masalah yang paling umum ditemui saat menggunakan HRIS.',
			col_issue: 'Masalah',
			col_cause: 'Kemungkinan Penyebab',
			col_solution: 'Solusi',
			issues: [
				{ issue: 'Tidak bisa login', cause: 'Password salah / akun terkunci', solution: 'Klik "Lupa Password" atau hubungi Admin HR' },
				{ issue: 'Clock-in gagal', cause: 'GPS tidak aktif / di luar area', solution: 'Aktifkan GPS dan pastikan dalam radius kantor' },
				{ issue: 'Dokumen tidak muncul', cause: 'Belum diterbitkan Admin HR', solution: 'Hubungi Admin HR untuk memverifikasi penerbitan dokumen' },
				{ issue: 'Cuti tidak disetujui', cause: 'Atasan belum approve / kuota habis', solution: 'Hubungi atasan langsung atau cek sisa saldo cuti' },
				{ issue: 'Resign tidak bisa diajukan', cause: 'Notice period belum memenuhi syarat', solution: 'Pastikan tanggal efektif minimal 30 hari dari hari ini' },
				{ issue: 'Overtime tidak muncul di rekap', cause: 'Pengajuan belum disetujui Admin', solution: 'Cek status di menu Overtime › Riwayat Pengajuan' },
				{ issue: 'Menu Setting tidak bisa diakses', cause: 'Role akun bukan Admin HR', solution: 'Hubungi Admin HR untuk pengubahan role akun' },
				{ issue: 'Data tidak tersimpan', cause: 'Sesi login kedaluwarsa', solution: 'Refresh halaman dan login ulang' }
			],
			contact_heading: 'Butuh Bantuan Lebih Lanjut?',
			contact_desc: 'Tim support kami siap membantu Anda.',
			contacts: [
				{ label: 'Email Support', value: 'Hubungi via Email' },
				{ label: 'WhatsApp Support', value: 'Chat via WhatsApp' },
				{ label: 'Tiket Support', value: 'Buat tiket baru' }
			]
		},
		glossary: {
			badge: 'Referensi',
			heading_accent: 'Glosarium',
			desc: 'Daftar istilah penting yang digunakan dalam sistem HRIS Al-Khwarizmi.',
			terms: [
				{ term: 'HRIS', def: 'Human Resource Information System — sistem informasi SDM berbasis digital' },
				{ term: 'Clock-In / Out', def: 'Pencatatan waktu masuk dan pulang kerja secara digital' },
				{ term: 'Tanda Tangan Digital', def: 'Tanda tangan elektronik berkekuatan hukum melalui sistem HRIS' },
				{ term: 'KPI', def: 'Key Performance Indicator — indikator pengukur kinerja karyawan' },
				{ term: 'BPJS', def: 'Badan Penyelenggara Jaminan Sosial — program jaminan sosial nasional' },
				{ term: 'Offboarding', def: 'Proses administrasi pelepasan karyawan yang mengundurkan diri atau berakhir kontraknya' },
				{ term: 'Notice Period', def: 'Masa pemberitahuan wajib sebelum tanggal efektif resign (minimal 30 hari)' },
				{ term: 'Overtime', def: 'Lembur — jam kerja di luar jadwal normal yang diajukan karyawan dan disetujui Admin HR' },
				{ term: 'Shift', def: 'Jadwal kerja bergilir yang dikonfigurasi Admin dan di-assign ke karyawan tertentu' },
				{ term: 'Role', def: 'Level hak akses pengguna dalam sistem HRIS (Admin HR atau Karyawan)' },
				{ term: 'Audit Log', def: 'Catatan otomatis sistem atas setiap perubahan data dan aksi pengguna di HRIS' }
			]
		},
		cta: {
			badge: 'Mulai Sekarang',
			heading_plain: 'Siap Menggunakan ',
			heading_accent: 'HRIS',
			heading_end: '?',
			desc: 'Hubungi kami untuk mendapatkan demo langsung dan mulai kelola SDM perusahaan Anda secara digital, efisien, dan transparan.',
			btn_demo: 'Minta Demo Sekarang',
			btn_guide: 'Baca Panduan'
		},
		footer: {
			brand_desc: 'Sistem informasi SDM terintegrasi untuk perusahaan modern. Efisien, transparan, dan aman.',
			guide_heading: 'Panduan',
			module_heading: 'Modul',
			info_heading: 'Informasi',
			guide_links: [
				{ href: '#panduan-karyawan', label: 'Panduan Karyawan' },
				{ href: '#panduan-admin', label: 'Panduan Admin HR' },
				{ href: '#setting', label: 'Fitur Setting' },
				{ href: '#troubleshooting', label: 'Troubleshooting' }
			],
			module_list: [
				'Data Karyawan',
				'Absensi & Kehadiran',
				'Pengajuan Cuti',
				'Dokumen & TTD Digital',
				'Penilaian Kinerja',
				'Pengajuan Resign'
			],
			version: 'Versi Manual Book: 1.0',
			year: 'Tahun: 2025',
			bottom1: '© 2025 Al-Khwarizmi. Manual Book HRIS v1.0',
			bottom2: 'Dibuat untuk kemudahan pengelolaan SDM yang lebih baik.'
		}
	},

	en: {
		nav: {
			links: [
				{ href: '#tentang', label: 'About HRIS' },
				{ href: '#modul', label: 'Modules' },
				{ href: '#panduan-karyawan', label: 'Employee Guide' },
				{ href: '#panduan-admin', label: 'Admin Guide' },
				{ href: '#troubleshooting', label: 'Troubleshooting' },
				{ href: '#glosarium', label: 'Glossary' }
			],
			demo: 'Request Demo'
		},
		hero: {
			slogan: 'Digital HR System Guide',
			cta: 'Read Guide →',
			subtitle:
				'Complete guide to using the Human Resource Information System — a web-based integrated HR system for employees and HR Admins.',
			subtitle_strong: 'Human Resource Information System'
		},
		about: {
			badge: 'What is HRIS?',
			heading_plain: 'What is ',
			heading_accent: 'HRIS',
			heading_end: '?',
			desc_plain: ' is a web-based information system used to manage all company HR activities in a ',
			desc_accent: 'digital and integrated',
			desc_end: ' manner — accessible anytime and anywhere by employees and HR Admins.',
			highlights: [
				{
					title: 'Access from Anywhere',
					desc: 'Web-based — just open a browser, no app installation needed. Available on desktop and mobile.'
				},
				{
					title: 'GPS + Selfie Attendance',
					desc: 'Clock-in is validated by GPS location and selfie simultaneously to ensure accurate attendance tracking.'
				},
				{
					title: 'Real-Time Notifications',
					desc: 'Every submission — leave, overtime, resign — triggers automatic email notifications to all relevant parties.'
				},
				{
					title: 'Legally Binding Digital Signature',
					desc: 'Legally binding digital signatures per ITE Law. Three methods available: draw, type, or upload.'
				},
				{
					title: 'Secure & Audited',
					desc: 'Every data change is recorded in an automatic audit log — who changed what and when is permanently stored.'
				},
				{
					title: 'Structured Approval Flow',
					desc: 'Employee submissions go through a clear approval flow per hierarchy — nothing is processed outside the system.'
				}
			],
			center_tag: 'Al-Khwarizmi',
			center_title: 'Integrated Digital HR System',
			center_cta: 'View Access Matrix',
			cta_heading: 'Ready to use HRIS?',
			cta_sub: 'Manage your company\'s HR more efficiently, transparently, and digitally.',
			cta_btn: 'Request Demo Now'
		},
		module: {
			badge: 'Access Rights per Role',
			heading_plain: 'Who Can Do ',
			heading_accent: 'What?',
			desc: 'Each role has different access rights. Use this table as a quick reference before reading the full guide.',
			feature_names: [
				'Clock In/Out (Attendance)',
				'Attendance Correction',
				'Leave Request',
				'Leave Approval',
				'Overtime Request',
				'Overtime Approval',
				'Documents & Digital Signature',
				'Manage Employee Data',
				'Employee Transfer',
				'Resign Request',
				'Statistics & Reports'
			],
			role_labels: ['Employee', 'Finance', 'Manager', 'Admin HR'],
			badge_labels: { full: 'Access', submit: 'Submit', approval: 'Approval', manage: 'Manage', none: '—' },
			no_access: 'No Access'
		},
		employee: {
			badge: 'CHAPTER 2',
			section: 'SECTION',
			heading_plain: 'Employee ',
			heading_accent: 'Guide',
			desc: 'Complete guide for all employees to use HRIS features daily.',
			screenshot_pending: 'Screenshot not yet available',
			video_tutorial: 'Video Tutorial',
			tutorial_video: {
				badge: 'Video Tutorial',
				title: 'Complete Employee Guide Tutorial',
				desc: 'Watch this short guide to understand the main daily HRIS workflow before opening the feature-by-feature steps below.'
			},
			guides: [
				{
					id: '2.1',
					title: 'Login to the System',
					steps: [
						'Open your browser and go to https://khwarizmi.co.id',
						'Enter your Email/Username registered by the HR Admin',
						'Enter your initial Password (NIP or date of birth)',
						'Enter your active bank account number',
						'Click the Sign In button — the system redirects to the Dashboard'
					],
					tip: null as string | null
				},
				{
					id: '2.2',
					title: 'Update Profile',
					steps: [
						'Click the profile photo icon in the top right corner',
						'Select My Profile menu',
						'Click the Edit Profile button',
						'Update your data (phone number, address, etc.)',
						'Click Save Changes'
					],
					tip: null as string | null
				},
				{
					id: '2.3',
					title: 'Attendance & Clock-In',
					steps: [
						'Clock-In: Open Attendance › Clock-In, enable GPS, take a selfie, click Clock-In Now',
						'Clock-Out: Open Attendance › Clock-Out, review work hours summary, click Confirm',
						'History: Open Attendance › Attendance History, select a period — view On-time / Late status',
						'Export attendance history to Excel or PDF from the History page'
					],
					tip: 'Clock-in can only be done within a 100-meter radius of the office location. GPS and camera must be active during clock-in.'
				},
				{
					id: '2.4',
					title: 'Attendance Correction',
					steps: [
						'Open Attendance › Correction Request menu',
						'Click Create New Request',
						'Select the attendance date that needs correction',
						'Fill in the correct check-in and/or check-out time',
						'Write the correction reason clearly',
						'Click Submit Request — status will show Pending Approval',
						'Monitor status in Attendance › Request History'
					],
					tip: 'Correction request quota is limited per month. Ensure the reason provided is valid and verifiable by the Admin.'
				},
				{
					id: '2.5',
					title: 'Overtime Request',
					steps: [
						'Open Overtime › Create Request menu',
						'Select the overtime date',
						'Fill in the Start Time and End Time',
						'Fill in the Break Duration (if any) — the system automatically calculates Net Overtime Hours',
						'Describe the overtime work',
						'Click Submit and wait for supervisor approval',
						'Monitor overtime list in Overtime › Request List'
					],
					tip: 'The system automatically calculates total net overtime hours (minus break time). Approved requests are added to the compensation summary.'
				},
				{
					id: '2.6',
					title: 'Leave Request',
					steps: [
						'Open Leave › Request Leave menu',
						'Select Leave Type: Annual / Sick / Maternity / Special',
						'Select Start Date and End Date',
						'Fill in the reason for leave',
						'Attach supporting documents if required',
						'Click Submit and wait for supervisor approval'
					],
					tip: 'Annual leave must be submitted at least 3 working days in advance. Sudden leave must include a valid reason.'
				},
				{
					id: '2.7',
					title: 'Documents & Digital Signature',
					steps: [
						'View documents: Open Documents › My Documents, select category, click Download',
						'Upload document: Open Documents › Upload Document, select category & file (PDF max. 10 MB)',
						'Digital Signature: Open Documents › Needs Signing, select method — Draw / Type / Upload signature',
						'Position the signature box on the PDF page, confirm with PIN'
					],
					tip: 'Digital signatures have the same legal force as handwritten signatures per the ITE Law.'
				},
				{
					id: '2.8',
					title: 'Resign Request',
					steps: [
						'Open Resign › Submit Resignation menu',
						'Read the resignation terms and conditions',
						'Fill in the effective resignation date (minimum 30 calendar days notice period)',
						'Select reason for resignation',
						'Upload official resignation letter (PDF, signed)',
						'Click Submit and wait for supervisor & HR Admin confirmation'
					],
					tip: 'Once approved, you receive an offboarding checklist directly in the system.'
				}
			]
		},
		admin: {
			badge: 'CHAPTER 3',
			section: 'SECTION',
			heading_plain: 'Admin ',
			heading_accent: 'HR Guide',
			desc_plain: 'Guide for users with the ',
			desc_role: 'Admin HR',
			desc_end: ' role who have full access to all HR management modules.',
			screenshot_pending: 'Screenshot not yet available',
			video_tutorial: 'Video Tutorial',
			tutorial_video: {
				badge: 'Video Tutorial',
				title: 'Complete HR Admin Tutorial',
				desc: 'Watch this short guide to understand the main HR Admin workflow before opening the module-by-module steps below.'
			},
			guides: [
				{
					id: '3.1',
					title: 'Manage Employees',
					items: [
						{
							sub: 'Add New Employee',
							steps: [
								'Open Employees › Employee List, click Add Employee',
								'Fill in Personal Data tab: name, NIK/NIP, place & date of birth, address, phone, email',
								'Fill in Employment Data tab: position, department, contract status, grade, join date',
								'Fill in Bank & Tax Data tab: bank account, NPWP, BPJS Health & Employment',
								'Upload documents: photo, ID card, latest diploma',
								'Click Save — activation email is automatically sent to the new employee'
							]
						},
						{
							sub: 'Edit & Deactivate Employee',
							steps: [
								'Edit: Find employee, click Edit icon, update data, click Save Changes (audit log automatic)',
								'Deactivate: Click employee name › Change Status › Deactivate, select reason & effective date'
							]
						}
					]
				},
				{
					id: '3.2',
					title: 'Employee Transfer',
					items: [
						{
							sub: 'Manage Transfer Data',
							steps: [
								'Open Employees › Transfer, click Create New Transfer',
								'Search and select the employee to be transferred',
								'Fill in transfer details: target department/position, effective date, notes',
								'Click Save — transfer data is saved with status Processing',
								'Monitor transfer status in the list: search by name/NIP, view details, or delete if needed'
							]
						}
					]
				},
				{
					id: '3.3',
					title: 'Attendance Monitoring',
					items: [
						{
							sub: 'Recap & Filter Attendance',
							steps: [
								'Open Attendance › All Attendance',
								'Filter data by day, week, month, or year as needed',
								'Use the search feature to find specific employee data',
								'View attendance session details (check-in time, check-out time, GPS location)',
								'Export recap to Excel for payroll or audit purposes'
							]
						},
						{
							sub: 'Statistics & Attendance Correction',
							steps: [
								'Statistics: Open Attendance › Statistics — view charts per week/month/quarter/year',
								'Chart shows percentage of On-time, Late, and Absent per department',
								'Correction: Open Attendance › Correction Requests, find employee\'s request, click Approve or Reject'
							]
						}
					]
				},
				{
					id: '3.4',
					title: 'Overtime Approval',
					items: [
						{
							sub: 'Manage Overtime Requests',
							steps: [
								'Open Overtime › Request List',
								'Filter requests by status: Pending / Approved / Rejected',
								'Click request details to view date, time, and overtime description',
								'Click Approve — data automatically enters the employee\'s overtime recap',
								'Click Reject and fill in rejection reason notes that will be received by the employee'
							]
						}
					]
				},
				{
					id: '3.5',
					title: 'Document Management',
					items: [
						{
							sub: 'Issue, Monitor & Verify Documents',
							steps: [
								'Issue: Open Documents › Manage Documents, click Issue New Document, specify recipients',
								'Monitor Signatures: Open Documents › Signing Status, filter status, send reminders',
								'Verify: Open Documents › Verify Document, Accept or Reject with notes'
							]
						}
					]
				},
				{
					id: '3.6',
					title: 'Resign & Offboarding Process',
					items: [
						{
							sub: 'Resign Process Flow',
							steps: [
								'Open Resign › Request List, click employee name to see details',
								'Click Approve or Reject with notes',
								'If approved, the system automatically activates the offboarding checklist',
								'Monitor progress in Resign › Offboarding Tracking'
							]
						}
					]
				},
				{
					id: '3.7',
					title: 'Reports & Analytics',
					items: [
						{
							sub: 'Available Reports',
							steps: [
								'Monthly Attendance Report (per department / entire company)',
								'Leave Recap & Leave Balance Report',
								'Overtime Report — approved overtime recap per period',
								'Document Status & Signature Report',
								'Resign & Employee Turnover Report',
								'Headcount Analytics Dashboard & Department Composition'
							]
						}
					]
				}
			]
		},
		setting: {
			badge: 'CHAPTER 4 — Admin Only',
			heading_plain: 'Settings ',
			heading_accent: 'Features',
			desc: 'The Settings menu can only be accessed by HR Admins to configure the HRIS system according to company needs.',
			settings: [
				{
					title: 'Company Information',
					desc: 'Enter company name, logo, address, phone number, and timezone (default: WIB).'
				},
				{
					title: 'Attendance Configuration',
					desc: 'Set clock-in radius (meters), late tolerance (minutes), selfie photo feature, and default working hours.'
				},
				{
					title: 'Notification Configuration',
					desc: 'Choose notification types via email/in-app: leave approval, overtime, documents, and resign.'
				},
				{
					title: 'Department Management',
					desc: 'Add, edit, or deactivate departments. Assign Department Head for each unit.'
				},
				{
					title: 'Shift Configuration',
					desc: 'Create work shifts (morning/night/custom) and assign to employees/departments via drag-and-drop calendar.'
				},
				{
					title: 'Role & Permissions',
					desc: 'Manage 2-level access rights (Admin HR & Employee) and set specific permissions per feature/department.'
				}
			],
			roles: [
				{
					role: 'Admin HR',
					access: 'Full access: manage employees, attendance, documents, overtime, resign, and all Setting features',
					limit: 'Cannot change the role of other Admins without Super Admin confirmation'
				},
				{
					role: 'Employee',
					access: 'Limited access: own profile, own attendance, leave, overtime, documents, and resign',
					limit: 'Cannot view other employee data or access the Settings menu'
				}
			],
			role_heading: 'Access Rights Summary',
			access_label: 'Access',
			limit_label: 'Restriction'
		},
		workflow: {
			badge: 'Workflow',
			heading_plain: 'Overtime ',
			heading_accent: 'Submission Flow',
			desc: 'A transparent and automated overtime approval process within the system.',
			overtime_steps: [
				{ step: 1, actor: 'Employee', action: 'Submit overtime via Overtime menu', status: 'Submitted' },
				{ step: 2, actor: 'System', action: 'Notification sent to HR Admin', status: 'Pending' },
				{ step: 3, actor: 'HR Admin', action: 'Review details: date, time, reason', status: 'Review' },
				{ step: 4, actor: 'HR Admin', action: 'Click Approve or Reject with notes', status: 'Final' },
				{ step: 5, actor: 'System', action: 'Notification & overtime recorded in recap', status: 'Done' }
			],
			offboarding_badge: 'Offboarding',
			offboarding_heading: 'Offboarding Checklist',
			offboarding_desc: 'List of items that must be completed when an employee resigns.',
			offboarding_col_item: 'Item',
			offboarding_col_pic: 'Responsible Party',
			offboarding_items: [
				{ no: 1, item: 'Job handover & task documentation', pic: 'Employee & Supervisor' },
				{ no: 2, item: 'Return company assets (laptop, access card, etc.)', pic: 'GA / Admin' },
				{ no: 3, item: 'Financial administration settlement (reimbursement, etc.)', pic: 'Finance' },
				{ no: 4, item: 'Issuance of work experience letter', pic: 'HR Admin' },
				{ no: 5, item: 'Deactivation of system accounts & application access', pic: 'IT / HR Admin' },
				{ no: 6, item: 'Exit interview', pic: 'HR Manager' }
			]
		},
		troubleshooting: {
			badge: 'CHAPTER 5',
			heading_accent: 'Trouble',
			heading_plain: 'shooting',
			desc: 'Quick solutions for the most common issues encountered when using HRIS.',
			col_issue: 'Issue',
			col_cause: 'Possible Cause',
			col_solution: 'Solution',
			issues: [
				{ issue: 'Cannot login', cause: 'Wrong password / account locked', solution: 'Click "Forgot Password" or contact HR Admin' },
				{ issue: 'Clock-in failed', cause: 'GPS not active / out of range', solution: 'Enable GPS and ensure you\'re within office radius' },
				{ issue: 'Document not showing', cause: 'Not yet issued by HR Admin', solution: 'Contact HR Admin to verify document issuance' },
				{ issue: 'Leave not approved', cause: 'Supervisor hasn\'t approved / quota exhausted', solution: 'Contact supervisor directly or check leave balance' },
				{ issue: 'Cannot submit resign', cause: 'Notice period not met', solution: 'Ensure effective date is at least 30 days from today' },
				{ issue: 'Overtime not in recap', cause: 'Request not yet approved by Admin', solution: 'Check status in Overtime › Request History' },
				{ issue: 'Cannot access Settings menu', cause: 'Account role is not HR Admin', solution: 'Contact HR Admin to change account role' },
				{ issue: 'Data not saved', cause: 'Login session expired', solution: 'Refresh page and log in again' }
			],
			contact_heading: 'Need More Help?',
			contact_desc: 'Our support team is ready to assist you.',
			contacts: [
				{ label: 'Email Support', value: 'Contact via Email' },
				{ label: 'WhatsApp Support', value: 'Chat via WhatsApp' },
				{ label: 'Support Ticket', value: 'Create new ticket' }
			]
		},
		glossary: {
			badge: 'Reference',
			heading_accent: 'Glossary',
			desc: 'List of important terms used in the Al-Khwarizmi HRIS system.',
			terms: [
				{ term: 'HRIS', def: 'Human Resource Information System — a digital-based HR information system' },
				{ term: 'Clock-In / Out', def: 'Digital recording of work arrival and departure times' },
				{ term: 'Digital Signature', def: 'Electronic signature with legal force through the HRIS system' },
				{ term: 'KPI', def: 'Key Performance Indicator — an indicator for measuring employee performance' },
				{ term: 'BPJS', def: 'Badan Penyelenggara Jaminan Sosial — national social security program (Indonesia)' },
				{ term: 'Offboarding', def: 'The administrative process for releasing employees who resign or whose contracts have ended' },
				{ term: 'Notice Period', def: 'Mandatory notice period before the effective resignation date (minimum 30 days)' },
				{ term: 'Overtime', def: 'Extra working hours beyond normal schedule, submitted by employees and approved by HR Admin' },
				{ term: 'Shift', def: 'Rotating work schedule configured by Admin and assigned to specific employees' },
				{ term: 'Role', def: 'User access level within the HRIS system (HR Admin or Employee)' },
				{ term: 'Audit Log', def: 'Automatic system record of every data change and user action in HRIS' }
			]
		},
		cta: {
			badge: 'Get Started',
			heading_plain: 'Ready to Use ',
			heading_accent: 'HRIS',
			heading_end: '?',
			desc: 'Contact us for a live demo and start managing your company\'s HR digitally, efficiently, and transparently.',
			btn_demo: 'Request Demo Now',
			btn_guide: 'Read Guide'
		},
		footer: {
			brand_desc: 'Integrated HR information system for modern companies. Efficient, transparent, and secure.',
			guide_heading: 'Guide',
			module_heading: 'Modules',
			info_heading: 'Information',
			guide_links: [
				{ href: '#panduan-karyawan', label: 'Employee Guide' },
				{ href: '#panduan-admin', label: 'HR Admin Guide' },
				{ href: '#setting', label: 'Settings Features' },
				{ href: '#troubleshooting', label: 'Troubleshooting' }
			],
			module_list: [
				'Employee Data',
				'Attendance',
				'Leave Request',
				'Documents & Digital Signature',
				'Performance Evaluation',
				'Resign Request'
			],
			version: 'Manual Book Version: 1.0',
			year: 'Year: 2025',
			bottom1: '© 2025 Al-Khwarizmi. HRIS Manual Book v1.0',
			bottom2: 'Built for better HR management.'
		}
	}
};
