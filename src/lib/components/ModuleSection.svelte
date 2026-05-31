<script lang="ts">
	import { onMount } from 'svelte';
	import { Users, Clock, CalendarDays, FileSignature, BarChart2, LogOut } from 'lucide-svelte';

	const modules = [
		{ icon: Users,         title: 'Data Karyawan',        user: 'Admin HR',           desc: 'Kelola profil & data kepegawaian secara lengkap dan terstruktur.',                          color: 'teal',   num: '01' },
		{ icon: Clock,         title: 'Absensi & Kehadiran',  user: 'Semua Karyawan',     desc: 'Clock-in/out berbasis GPS, rekap kehadiran real-time.',                                      color: 'orange', num: '02' },
		{ icon: CalendarDays,  title: 'Pengajuan Cuti',       user: 'Semua Karyawan',     desc: 'Ajukan & pantau status cuti dengan alur persetujuan digital.',                              color: 'teal',   num: '03' },
		{ icon: FileSignature, title: 'Dokumen & TTD Digital',user: 'Karyawan & Admin HR',desc: 'Unggah, kelola, & tanda tangan dokumen kepegawaian secara digital.',                       color: 'orange', num: '04' },
		{ icon: BarChart2,     title: 'Penilaian Kinerja',    user: 'Manajer & Karyawan', desc: 'KPI, evaluasi performa, dan feedback terstruktur.',                                         color: 'teal',   num: '05' },
		{ icon: LogOut,        title: 'Pengajuan Resign',     user: 'Karyawan & Admin HR',desc: 'Ajukan & proses pengunduran diri dengan offboarding yang tertib.',                          color: 'orange', num: '06' }
	];

	let sectionEl: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.1 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	id="modul"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #ffffff 0%, #f0fdf9 60%, #ffffff 100%);"
>
	<!-- Decorative blobs -->
	<div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-orange-50 text-[#f97316] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				Ruang Lingkup Sistem
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Modul-Modul <span class="text-[#0d9488]">HRIS</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				6 modul utama yang mencakup seluruh kebutuhan pengelolaan SDM perusahaan Anda secara digital dan terintegrasi.
			</p>
		</div>

		<!-- Cards grid -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each modules as mod, i}
				<div
					class="module-card group relative bg-white rounded-2xl p-7 border border-gray-100
					hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-default"
					class:in-view={isVisible}
					style="animation-delay: {i * 80}ms;"
				>
					<!-- Number watermark -->
					<div class="absolute top-4 right-5 text-6xl font-black leading-none pointer-events-none
						{mod.color === 'teal' ? 'text-[#0d9488]/5' : 'text-[#f97316]/5'}">
						{mod.num}
					</div>

					<!-- Icon -->
					<div class="relative w-14 h-14 rounded-2xl mb-5 flex items-center justify-center
						{mod.color === 'teal' ? 'bg-[#0d9488]/10' : 'bg-[#f97316]/10'}
						group-hover:scale-110 transition-transform duration-300">
						<mod.icon size={24} class="{mod.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
					</div>

					<!-- Badge -->
					<span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3
						{mod.color === 'teal' ? 'bg-teal-50 text-[#0d9488]' : 'bg-orange-50 text-[#f97316]'}">
						{mod.user}
					</span>

					<h3 class="text-lg font-bold text-gray-900 mb-2">{mod.title}</h3>
					<p class="text-gray-500 text-sm leading-relaxed">{mod.desc}</p>

					<!-- Bottom accent bar -->
					<div class="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500
						{mod.color === 'teal' ? 'bg-gradient-to-r from-[#0d9488] to-[#14b8a6]' : 'bg-gradient-to-r from-[#f97316] to-[#fbbf24]'}">
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.accent-line {
		height: 3px; width: 0;
		background: linear-gradient(90deg, #0d9488, #f97316);
		border-radius: 2px;
		transition: width 0.9s ease 0.4s;
	}
	.accent-line.expanded { width: 80px; }

	.section-header {
		opacity: 0; transform: translateY(20px);
		transition: opacity 0.7s ease, transform 0.7s ease;
	}
	.section-header.in-view { opacity: 1; transform: none; }

	.module-card {
		opacity: 0; transform: translateY(32px);
		transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease, translate 0.3s ease;
	}
	.module-card.in-view { opacity: 1; transform: translateY(0); }
</style>
