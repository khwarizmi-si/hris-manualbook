<script lang="ts">
	import { onMount } from 'svelte';
	import { BookOpen, Clock, FileSignature, TrendingUp, ShieldCheck, LogOut, Bell, Timer, Repeat2, KeyRound, ClipboardList } from 'lucide-svelte';

	const glossary = [
		{ term: 'HRIS',               def: 'Human Resource Information System — sistem informasi SDM berbasis digital',                                     icon: BookOpen,     color: 'teal' },
		{ term: 'Clock-In / Out',     def: 'Pencatatan waktu masuk dan pulang kerja secara digital',                                                        icon: Clock,        color: 'orange' },
		{ term: 'Tanda Tangan Digital',def: 'Tanda tangan elektronik berkekuatan hukum melalui sistem HRIS',                                               icon: FileSignature, color: 'teal' },
		{ term: 'KPI',                def: 'Key Performance Indicator — indikator pengukur kinerja karyawan',                                              icon: TrendingUp,   color: 'orange' },
		{ term: 'BPJS',               def: 'Badan Penyelenggara Jaminan Sosial — program jaminan sosial nasional',                                         icon: ShieldCheck,  color: 'teal' },
		{ term: 'Offboarding',        def: 'Proses administrasi pelepasan karyawan yang mengundurkan diri atau berakhir kontraknya',                       icon: LogOut,       color: 'orange' },
		{ term: 'Notice Period',      def: 'Masa pemberitahuan wajib sebelum tanggal efektif resign (minimal 30 hari)',                                    icon: Bell,         color: 'teal' },
		{ term: 'Overtime',           def: 'Lembur — jam kerja di luar jadwal normal yang diajukan karyawan dan disetujui Admin HR',                       icon: Timer,        color: 'orange' },
		{ term: 'Shift',              def: 'Jadwal kerja bergilir yang dikonfigurasi Admin dan di-assign ke karyawan tertentu',                            icon: Repeat2,      color: 'teal' },
		{ term: 'Role',               def: 'Level hak akses pengguna dalam sistem HRIS (Admin HR atau Karyawan)',                                          icon: KeyRound,     color: 'orange' },
		{ term: 'Audit Log',          def: 'Catatan otomatis sistem atas setiap perubahan data dan aksi pengguna di HRIS',                                 icon: ClipboardList, color: 'teal' }
	];

	let sectionEl: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.08 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	id="glosarium"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #f0fdf9 0%, #ffffff 100%);"
>
	<!-- Blobs -->
	<div class="absolute top-0 right-10 w-80 h-80 rounded-full bg-[#0d9488]/6 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>

	<!-- Floating dots -->
	<div class="absolute top-1/3 left-10 w-3 h-3 rounded-full bg-[#0d9488]/25 float-dot"></div>
	<div class="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-[#f97316]/30 float-dot-2"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				Referensi
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				<span class="text-[#0d9488]">Glosarium</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				Daftar istilah penting yang digunakan dalam sistem HRIS Al-Khwarizmi.
			</p>
		</div>

		<!-- Glossary grid -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
			{#each glossary as item, i}
				<div
					class="glossary-card group bg-white rounded-2xl p-5 border overflow-hidden
					hover:shadow-xl hover:-translate-y-1 transition-all duration-300
					{item.color === 'teal' ? 'border-teal-100 hover:border-teal-200' : 'border-orange-100 hover:border-orange-200'}"
					class:in-view={isVisible}
					style="animation-delay: {i * 60}ms;"
				>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
							{item.color === 'teal' ? 'bg-[#0d9488]/10' : 'bg-[#f97316]/10'}">
							<item.icon size={18} class="{item.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
						</div>
						<div class="flex-1 min-w-0">
							<div class="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
								{item.term}
								<span class="w-1.5 h-1.5 rounded-full flex-shrink-0
									{item.color === 'teal' ? 'bg-[#0d9488]' : 'bg-[#f97316]'}"></span>
							</div>
							<div class="text-xs text-gray-500 leading-relaxed">{item.def}</div>
						</div>
					</div>

					<!-- Bottom bar -->
					<div class="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full
						{item.color === 'teal' ? 'bg-gradient-to-r from-[#0d9488] to-[#14b8a6]' : 'bg-gradient-to-r from-[#f97316] to-[#fbbf24]'}">
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

	.glossary-card {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s;
	}
	.glossary-card.in-view { opacity: 1; transform: none; }

	.float-dot  { animation: floatUp   3s ease-in-out infinite; }
	.float-dot-2{ animation: floatDown 4s ease-in-out infinite; animation-delay: 1.2s; }
	@keyframes floatUp   { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-12px);opacity:1} }
	@keyframes floatDown { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(12px);opacity:1} }
</style>
