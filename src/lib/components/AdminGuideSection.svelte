<script lang="ts">
	import { onMount } from 'svelte';
	import { Users, Clock, FileText, ClipboardList, TrendingUp, ChevronDown, ChevronRight, Image, PlayCircle, ArrowLeftRight, Timer } from 'lucide-svelte';

	// screenshot: taruh file di static/screenshots/, referensikan tanpa "static/"
	// videoId: ID video YouTube (bagian setelah ?v= atau youtu.be/)
	const guides = [
		{
			id: '3.1', icon: Users, title: 'Kelola Karyawan',
			screenshot: '/screenshots/admin/admin-karyawan.png',
			videoId: '',
			items: [
				{ sub: 'Tambah Karyawan Baru', steps: [
					'Buka Karyawan › Daftar Karyawan, klik Tambah Karyawan',
					'Isi tab Data Diri: nama, NIK/NIP, tempat & tanggal lahir, alamat, HP, email',
					'Isi tab Data Kepegawaian: jabatan, departemen, status kontrak, golongan, tanggal bergabung',
					'Isi tab Data Rekening & Pajak: rekening bank, NPWP, BPJS Kesehatan & Ketenagakerjaan',
					'Unggah dokumen: foto, KTP, ijazah terakhir',
					'Klik Simpan — email aktivasi otomatis terkirim ke karyawan baru'
				]},
				{ sub: 'Edit & Nonaktifkan Karyawan', steps: [
					'Edit: Cari karyawan, klik ikon Edit, perbarui data, klik Simpan Perubahan (audit log otomatis)',
					'Nonaktifkan: Klik nama karyawan › Ubah Status › Nonaktifkan, pilih alasan & tanggal efektif'
				]}
			]
		},
		{
			id: '3.2', icon: ArrowLeftRight, title: 'Transfer Karyawan',
			screenshot: '/screenshots/admin/admin-transfer.png',
			videoId: '',
			items: [{ sub: 'Kelola Data Transfer', steps: [
				'Buka Karyawan › Transfer, klik Buat Transfer Baru',
				'Cari dan pilih karyawan yang akan ditransfer',
				'Isi detail transfer: departemen/jabatan tujuan, tanggal efektif, keterangan',
				'Klik Simpan — data transfer tersimpan dengan status Diproses',
				'Pantau status transfer di daftar: cari by nama/NIP, lihat detail, atau hapus jika perlu'
			]}]
		},
		{
			id: '3.3', icon: Clock, title: 'Monitoring Kehadiran',
			screenshot: '/screenshots/admin/admin-kehadiran.png',
			videoId: '',
			items: [
				{ sub: 'Rekap & Filter Kehadiran', steps: [
					'Buka Kehadiran › Semua Kehadiran',
					'Filter data per hari, minggu, bulan, atau tahun sesuai kebutuhan',
					'Gunakan fitur pencarian untuk menemukan data karyawan tertentu',
					'Lihat detail sesi kehadiran (jam masuk, jam keluar, lokasi GPS)',
					'Ekspor rekap ke Excel untuk keperluan penggajian atau audit'
				]},
				{ sub: 'Statistik & Koreksi Kehadiran', steps: [
					'Statistik: Buka Kehadiran › Statistik — lihat grafik kehadiran per minggu/bulan/kuartal/tahun',
					'Grafik menampilkan persentase On-time, Terlambat, dan Tidak Hadir per departemen',
					'Koreksi: Buka Kehadiran › Pengajuan Koreksi, cari pengajuan karyawan, klik Setujui atau Tolak'
				]}
			]
		},
		{
			id: '3.4', icon: Timer, title: 'Approval Overtime',
			screenshot: '/screenshots/admin/admin-overtime.png',
			videoId: '',
			items: [{ sub: 'Kelola Pengajuan Lembur', steps: [
				'Buka Overtime › Daftar Pengajuan',
				'Filter pengajuan berdasarkan status: Menunggu / Disetujui / Ditolak',
				'Klik detail pengajuan untuk melihat tanggal, jam, dan keterangan lembur',
				'Klik Setujui — data otomatis masuk rekap overtime karyawan',
				'Klik Tolak dan isi catatan alasan penolakan yang akan diterima karyawan'
			]}]
		},
		{
			id: '3.5', icon: FileText, title: 'Manajemen Dokumen',
			screenshot: '/screenshots/admin/admin-dokumen.png',
			videoId: '',
			items: [{ sub: 'Terbitkan, Pantau & Verifikasi Dokumen', steps: [
				'Terbitkan: Buka Dokumen › Kelola Dokumen, klik Terbitkan Dokumen Baru, tentukan penerima',
				'Pantau TTD: Buka Dokumen › Status Penandatanganan, filter status, kirim pengingat',
				'Verifikasi: Buka Dokumen › Verifikasi Dokumen, Terima atau Tolak dengan catatan'
			]}]
		},
		{
			id: '3.6', icon: ClipboardList, title: 'Proses Resign & Offboarding',
			screenshot: '/screenshots/admin/admin-resign.png',
			videoId: '',
			items: [{ sub: 'Alur Proses Resign', steps: [
				'Buka Resign › Daftar Pengajuan, klik nama karyawan untuk lihat detail',
				'Klik Setujui atau Tolak dengan catatan',
				'Jika disetujui, sistem aktifkan checklist offboarding otomatis',
				'Pantau progress di Resign › Tracking Offboarding'
			]}]
		},
		{
			id: '3.7', icon: TrendingUp, title: 'Laporan & Analitik',
			screenshot: '/screenshots/admin/admin-laporan.png',
			videoId: '',
			items: [{ sub: 'Laporan yang Tersedia', steps: [
				'Laporan Kehadiran Bulanan (per departemen / seluruh perusahaan)',
				'Laporan Rekap Cuti & Saldo Cuti',
				'Laporan Overtime — rekap lembur yang disetujui per periode',
				'Laporan Status Dokumen & Tanda Tangan',
				'Laporan Resign & Turnover Karyawan',
				'Dashboard Analitik Headcount & Komposisi Departemen'
			]}]
		}
	];

	let sectionEl: HTMLElement;
	let isVisible = $state(false);
	let openCard = $state<string | null>(null);
	let imgErrors = $state<Record<string, boolean>>({});

	function toggle(id: string) {
		openCard = openCard === id ? null : id;
	}

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.08 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	id="panduan-admin"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden bg-white"
>
	<!-- Blobs -->
	<div class="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>

	<!-- Floating dots -->
	<div class="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-[#f97316]/25 float-dot"></div>
	<div class="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-[#0d9488]/30 float-dot-2"></div>

	<div class="max-w-6xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-orange-50 text-[#f97316] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				BAB 3
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Panduan <span class="text-[#f97316]">Admin HR</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				Panduan untuk pengguna dengan role <strong class="text-gray-700">Admin HR</strong> yang memiliki akses penuh ke seluruh modul pengelolaan SDM.
			</p>
		</div>

		<!-- Accordion -->
		<div class="space-y-3 max-w-4xl mx-auto">
			{#each guides as guide, i}
				<div
					class="accordion-item bg-white rounded-2xl overflow-hidden border transition-all duration-300
					{openCard === guide.id ? 'border-[#f97316]/40 shadow-lg shadow-orange-100/50' : 'border-gray-100 hover:border-[#f97316]/25 hover:shadow-md'}"
					class:in-view={isVisible}
					style="animation-delay: {i * 70}ms;"
				>
					<button
						class="w-full flex items-center justify-between px-6 py-5 text-left transition-colors
						{openCard === guide.id ? 'bg-gradient-to-r from-orange-50/80 to-white' : 'bg-white hover:bg-orange-50/30'}"
						onclick={() => toggle(guide.id)}
					>
						<div class="flex items-center gap-4">
							<div class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
								{openCard === guide.id ? 'bg-[#f97316] shadow-md shadow-orange-200' : 'bg-orange-50'}">
								<guide.icon size={20} class="{openCard === guide.id ? 'text-white' : 'text-[#f97316]'}" />
							</div>
							<div>
								<div class="text-xs text-[#f97316] font-bold mb-0.5 tracking-wide">BAGIAN {guide.id}</div>
								<div class="text-base font-bold text-gray-900">{guide.title}</div>
							</div>
						</div>
						<div class="flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
							{openCard === guide.id ? 'bg-[#f97316] rotate-180' : 'bg-gray-100'}">
							<ChevronDown size={16} class="{openCard === guide.id ? 'text-white' : 'text-gray-500'}" />
						</div>
					</button>

					{#if openCard === guide.id}
						<div class="px-6 pb-6 border-t border-orange-50">
							<div class="ml-4 sm:ml-[60px] mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

								<!-- Kiri: langkah-langkah -->
								<div class="space-y-5">
									{#each guide.items as item}
										<div>
											<div class="flex items-center gap-2 mb-3">
												<ChevronRight size={14} class="text-[#f97316]" />
												<h4 class="text-sm font-bold text-gray-800">{item.sub}</h4>
											</div>
											<div class="border-l-2 border-[#f97316]/20 pl-5">
												<ol class="space-y-3">
													{#each item.steps as step, idx}
														<li class="flex gap-3 items-start">
															<span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#f97316] text-white text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
																{idx + 1}
															</span>
															<span class="text-gray-700 text-sm leading-relaxed">{step}</span>
														</li>
													{/each}
												</ol>
											</div>
										</div>
									{/each}
								</div>

								<!-- Kanan: screenshot + video -->
								{#if guide.screenshot || guide.videoId}
									<div class="space-y-3">
										{#if guide.screenshot}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md">
												<!-- Browser bar mockup -->
												<div class="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
													<div class="flex gap-1.5 flex-shrink-0">
														<div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
													</div>
													<div class="flex-1 bg-white rounded text-xs text-gray-400 px-2 py-0.5 text-center truncate">
														hris.quranmemo.com
													</div>
												</div>
												{#if !imgErrors[guide.id]}
													<img
														src={guide.screenshot}
														alt="Screenshot {guide.title}"
														class="w-full block"
														onerror={() => { imgErrors[guide.id] = true; }}
													/>
												{:else}
													<!-- Placeholder sebelum screenshot asli ditambahkan -->
													<div class="bg-gradient-to-br from-orange-50 to-white flex flex-col items-center justify-center gap-2 py-10 text-gray-400">
														<Image size={28} />
														<p class="text-xs">Screenshot belum tersedia</p>
														<p class="text-[10px] text-gray-300">{guide.screenshot}</p>
													</div>
												{/if}
											</div>
										{/if}

										{#if guide.videoId}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md">
												<div class="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
													<PlayCircle size={14} class="text-[#f97316] flex-shrink-0" />
													<span class="text-xs font-medium text-gray-600">Video Tutorial</span>
												</div>
												<div class="aspect-video">
													<iframe
														src="https://www.youtube-nocookie.com/embed/{guide.videoId}"
														title="Tutorial {guide.title}"
														class="w-full h-full"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
														loading="lazy"
													></iframe>
												</div>
											</div>
										{/if}
									</div>
								{/if}

							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.accent-line {
		height: 3px; width: 0;
		background: linear-gradient(90deg, #f97316, #0d9488);
		border-radius: 2px;
		transition: width 0.9s ease 0.4s;
	}
	.accent-line.expanded { width: 80px; }

	.section-header {
		opacity: 0; transform: translateY(20px);
		transition: opacity 0.7s ease, transform 0.7s ease;
	}
	.section-header.in-view { opacity: 1; transform: none; }

	.accordion-item {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s;
	}
	.accordion-item.in-view { opacity: 1; transform: none; }

	.float-dot  { animation: floatUp   3s ease-in-out infinite; }
	.float-dot-2{ animation: floatDown 4s ease-in-out infinite; animation-delay: 1.2s; }
	@keyframes floatUp   { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-12px);opacity:1} }
	@keyframes floatDown { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(12px);opacity:1} }
</style>
