<script lang="ts">
	import { onMount } from 'svelte';
	import { MessageCircle, BookOpen, ArrowRight } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	let sectionEl: HTMLElement;
	let isVisible = $state(false);
	let mounted = $state(false);
	let tr = $derived(t[$lang].cta);

	onMount(() => {
		mounted = true;
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.2 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	bind:this={sectionEl}
	class="relative w-full py-28 px-4 overflow-hidden"
	style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 60%, #134e4a 100%);"
>
	<!-- Decorative circles -->
	<div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none"></div>
	<div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 pointer-events-none"></div>

	<!-- Floating dots -->
	<div class="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-brand-orange/40 float-dot"></div>
	<div class="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white/30 float-dot-2"></div>
	<div class="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-brand-amber/25 float-dot"></div>

	<div class="max-w-4xl mx-auto text-center relative z-10">
		<div
			class="cta-content"
			class:will-animate={mounted}
			class:in-view={isVisible}
		>
			<!-- Badge -->
			<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
				{tr.badge}
			</div>

			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight text-balance">
				{tr.heading_plain}<span class="text-brand-amber">{tr.heading_accent}</span>{tr.heading_end}
			</h2>
			<p class="text-lg text-teal-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
				{tr.desc}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="https://wa.me/628128225136?text=Halo%2C+saya+ingin+meminta+demo+HRIS+Al-Khwarizmi"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark
					text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-900/30
					hover:shadow-2xl hover:-translate-y-0.5 text-base"
				>
					{tr.btn_demo}
					<MessageCircle size={18} />
				</a>
				<a
					href="#panduan-karyawan"
					class="inline-flex items-center justify-center gap-2 px-8 py-4
					bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold
					rounded-xl transition-all backdrop-blur-sm text-base"
				>
					<BookOpen size={18} />
					{tr.btn_guide}
					<ArrowRight size={16} />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-content {
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	.cta-content.will-animate { opacity: 0; transform: translateY(28px); }
	.cta-content.will-animate.in-view { opacity: 1; transform: none; }

	.float-dot  { animation: floatUp   3.5s ease-in-out infinite; }
	.float-dot-2{ animation: floatDown 4.5s ease-in-out infinite; animation-delay: 1s; }
	@keyframes floatUp   { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-16px);opacity:1} }
	@keyframes floatDown { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(16px);opacity:1} }
</style>
