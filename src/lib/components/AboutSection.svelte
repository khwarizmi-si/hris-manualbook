<script lang="ts">
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';
	import {
		Users,
		Clock,
		CalendarDays,
		FileSignature,
		Timer,
		LogOut,
		ArrowRight,
		CheckCircle,
		Sparkles,
		Star
	} from 'lucide-svelte';

	interface Service {
		icon: Component;
		badge: Component;
		title: string;
		desc: string;
		side: 'left' | 'right';
	}

	const services: Service[] = [
		{
			icon: Users,
			badge: Sparkles,
			title: 'Data Karyawan',
			desc: 'Kelola seluruh data kepegawaian secara digital dan terstruktur — dari biodata, jabatan, rekening, hingga dokumen BPJS dalam satu platform terintegrasi.',
			side: 'left'
		},
		{
			icon: Clock,
			badge: CheckCircle,
			title: 'Absensi & Kehadiran',
			desc: 'Clock-in/out berbasis GPS dengan validasi radius kantor, rekap kehadiran real-time, serta fitur koreksi absensi yang transparan dan tercatat dalam audit log.',
			side: 'left'
		},
		{
			icon: CalendarDays,
			badge: Star,
			title: 'Pengajuan Cuti',
			desc: 'Ajukan cuti tahunan, sakit, melahirkan, atau khusus secara digital. Alur persetujuan otomatis dengan notifikasi email di setiap tahap.',
			side: 'left'
		},
		{
			icon: FileSignature,
			badge: Sparkles,
			title: 'Dokumen & TTD Digital',
			desc: 'Terbitkan, unggah, dan tandatangani dokumen kepegawaian secara digital. Tanda tangan berkekuatan hukum sesuai UU ITE dengan audit trail lengkap.',
			side: 'right'
		},
		{
			icon: Timer,
			badge: CheckCircle,
			title: 'Manajemen Overtime',
			desc: 'Pengajuan lembur oleh karyawan diproses Admin melalui alur persetujuan yang jelas. Lembur yang disetujui otomatis masuk rekap dan laporan kompensasi.',
			side: 'right'
		},
		{
			icon: LogOut,
			badge: Star,
			title: 'Resign & Offboarding',
			desc: 'Proses pengunduran diri yang tertib — dari pengajuan, notice period 30 hari, hingga checklist offboarding serah terima aset dan penonaktifan akun otomatis.',
			side: 'right'
		}
	];

	let sectionEl: HTMLElement;

	let isVisible = $state(false);
	let scrollY = $state(0);
	let sectionTop = $state(0);

	let parallaxOffset = $derived(Math.max(0, scrollY - sectionTop));
	let y1 = $derived(parallaxOffset * -0.04);
	let y2 = $derived(parallaxOffset * 0.04);

	onMount(() => {
		const sectionObs = new IntersectionObserver(
			([e]) => {
				isVisible = e.isIntersecting;
				if (e.isIntersecting) sectionTop = sectionEl.getBoundingClientRect().top + scrollY;
			},
			{ threshold: 0.05 }
		);
		if (sectionEl) sectionObs.observe(sectionEl);

		const onScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			sectionObs.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<section
	id="tentang"
	bind:this={sectionEl}
	class="w-full py-24 px-4 overflow-hidden relative"
	style="background: linear-gradient(180deg, #f0fdf9 0%, #ffffff 60%);"
>
	<!-- Parallax blobs -->
	<div
		class="absolute top-16 left-8 w-72 h-72 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"
		style="transform: translateY({y1}px);"
	></div>
	<div
		class="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"
		style="transform: translateY({y2}px);"
	></div>

	<!-- Floating dots -->
	<div class="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#f97316]/30 float-dot"></div>
	<div class="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#0d9488]/25 float-dot-2"></div>
	<div class="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#fbbf24]/40 float-dot"></div>

	<div class="container mx-auto max-w-6xl relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center mb-6 stagger-parent" class:in-view={isVisible}>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-center text-gray-900 stagger-2">
				Apa itu <span class="font-bold text-[#0d9488]">HRIS</span>?
			</h2>
			<div class="accent-line stagger-3" class:expanded={isVisible}></div>
		</div>

		<p
			class="text-center max-w-2xl mx-auto mb-20 text-gray-500 leading-relaxed stagger-parent stagger-4"
			class:in-view={isVisible}
		>
			<strong class="text-gray-800">Human Resource Information System (HRIS)</strong> adalah sistem informasi
			berbasis web yang digunakan untuk mengelola seluruh aktivitas SDM perusahaan secara
			<span class="text-[#0d9488] font-semibold">digital dan terintegrasi</span> — dapat diakses kapan saja dan
			di mana saja oleh karyawan maupun Admin HR.
		</p>

		<!-- Three-column grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
			<!-- Left column -->
			<div class="space-y-8 md:space-y-14">
				{#each services.filter((s) => s.side === 'left') as service, i}
					<div
						class="flex flex-col group service-item"
						class:in-view={isVisible}
						style="animation-delay: {i * 150}ms;"
					>
						<div class="flex items-center gap-3 mb-3">
							<div
								class="relative text-[#f97316] bg-[#f97316]/10 p-3 rounded-xl transition-all duration-300
								group-hover:bg-[#f97316]/20 group-hover:scale-110"
							>
								<svelte:component this={service.icon} size={22} />
								<span class="absolute -top-1 -right-1 text-[#0d9488]">
									<svelte:component this={service.badge} size={14} />
								</span>
							</div>
							<h3
								class="text-lg font-semibold text-gray-800 group-hover:text-[#f97316] transition-colors duration-300"
							>
								{service.title}
							</h3>
						</div>
						<p class="text-sm text-gray-500 leading-relaxed pl-14">{service.desc}</p>
						<div
							class="mt-3 pl-14 flex items-center text-[#f97316] text-xs font-semibold
							opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1"
						>
							Pelajari lebih lanjut <ArrowRight size={12} />
						</div>
					</div>
				{/each}
			</div>

			<!-- Center image -->
			<div class="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
				<div class="relative w-full max-w-xs center-image-wrap" class:in-view={isVisible}>
					<div
						class="absolute inset-0 border-4 border-[#0d9488]/30 rounded-2xl -m-3 z-[-1]
						transition-all duration-700 scale-95 opacity-0"
						class:show-border={isVisible}
					></div>

					<div class="rounded-2xl overflow-hidden shadow-2xl relative">
						<img
							src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=750&fit=crop"
							alt="Tim HR Al-Khwarizmi"
							class="w-full h-full object-cover"
							style="height: 480px;"
						/>
						<div
							class="absolute inset-0"
							style="background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(13,148,136,0.75) 100%);"
						></div>
						<div class="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
							<p class="text-white/80 text-xs font-medium uppercase tracking-widest">Al-Khwarizmi</p>
							<h3 class="text-white font-bold text-lg leading-snug">Sistem SDM Digital Terintegrasi</h3>
							<a
								href="#modul"
								class="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full
								text-sm font-semibold hover:bg-[#f97316] hover:text-white transition-all w-fit mt-1"
							>
								Lihat Semua Modul <ArrowRight size={14} />
							</a>
						</div>
					</div>

					<div
						class="absolute -top-5 -right-8 w-16 h-16 rounded-full bg-[#f97316]/15"
						style="transform: translateY({y1 * 0.5}px);"
					></div>
					<div
						class="absolute -bottom-7 -left-10 w-20 h-20 rounded-full bg-[#0d9488]/10"
						style="transform: translateY({y2 * 0.5}px);"
					></div>
				</div>
			</div>

			<!-- Right column -->
			<div class="space-y-8 md:space-y-14">
				{#each services.filter((s) => s.side === 'right') as service, i}
					<div
						class="flex flex-col group service-item"
						class:in-view={isVisible}
						style="animation-delay: {(i + 3) * 150}ms;"
					>
						<div class="flex items-center gap-3 mb-3">
							<div
								class="relative text-[#0d9488] bg-[#0d9488]/10 p-3 rounded-xl transition-all duration-300
								group-hover:bg-[#0d9488]/20 group-hover:scale-110"
							>
								<svelte:component this={service.icon} size={22} />
								<span class="absolute -top-1 -right-1 text-[#f97316]">
									<svelte:component this={service.badge} size={14} />
								</span>
							</div>
							<h3
								class="text-lg font-semibold text-gray-800 group-hover:text-[#0d9488] transition-colors duration-300"
							>
								{service.title}
							</h3>
						</div>
						<p class="text-sm text-gray-500 leading-relaxed pl-14">{service.desc}</p>
						<div
							class="mt-3 pl-14 flex items-center text-[#0d9488] text-xs font-semibold
							opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1"
						>
							Pelajari lebih lanjut <ArrowRight size={12} />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA bar -->
		<div
			class="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 cta-bar"
			class:in-view={isVisible}
			style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);"
		>
			<div>
				<h3 class="text-2xl font-bold text-white mb-1">Siap menggunakan HRIS?</h3>
				<p class="text-teal-100 text-sm">Kelola SDM perusahaan Anda lebih efisien, transparan, dan digital.</p>
			</div>
			<a
				href="https://hris.quranmemo.com"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white
				px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-900/20
				whitespace-nowrap"
			>
				Buka HRIS Sekarang <ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<style>
	.float-dot {
		animation: floatUp 3s ease-in-out infinite;
	}
	.float-dot-2 {
		animation: floatDown 4s ease-in-out infinite;
		animation-delay: 1s;
	}
	@keyframes floatUp {
		0%, 100% { transform: translateY(0); opacity: 0.5; }
		50% { transform: translateY(-14px); opacity: 1; }
	}
	@keyframes floatDown {
		0%, 100% { transform: translateY(0); opacity: 0.5; }
		50% { transform: translateY(14px); opacity: 1; }
	}

	.accent-line {
		height: 3px;
		width: 0;
		background: linear-gradient(90deg, #0d9488, #f97316);
		border-radius: 2px;
		transition: width 0.9s ease 0.5s;
	}
	.accent-line.expanded { width: 96px; }

	.stagger-parent .stagger-1,
	.stagger-parent .stagger-2,
	.stagger-parent .stagger-3,
	.stagger-parent .stagger-4 {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	.stagger-parent.in-view .stagger-1 { opacity: 1; transform: none; transition-delay: 0.1s; }
	.stagger-parent.in-view .stagger-2 { opacity: 1; transform: none; transition-delay: 0.25s; }
	.stagger-parent.in-view .stagger-3 { opacity: 1; transform: none; transition-delay: 0.45s; }
	.stagger-parent.in-view .stagger-4 { opacity: 1; transform: none; transition-delay: 0.3s; }

	.service-item {
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.55s ease, transform 0.55s ease;
	}
	.service-item.in-view {
		opacity: 1;
		transform: none;
	}

	.center-image-wrap {
		opacity: 0;
		transform: scale(0.93);
		transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
	}
	.center-image-wrap.in-view {
		opacity: 1;
		transform: scale(1);
	}
	.show-border {
		opacity: 1 !important;
		transform: scale(1) !important;
	}

	.cta-bar {
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
	}
	.cta-bar.in-view {
		opacity: 1;
		transform: none;
	}
</style>
