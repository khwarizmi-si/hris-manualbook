<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowRight, Globe, ShieldCheck, Bell, MapPin, Layers, FileCheck } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	const highlightIcons = [Globe, MapPin, Bell, FileCheck, ShieldCheck, Layers];
	const sides = ['left', 'left', 'left', 'right', 'right', 'right'];

	let tr = $derived(t[$lang].about);
	let highlights = $derived(
		tr.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i], side: sides[i] }))
	);

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
		class="absolute top-16 left-8 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none"
		style="transform: translateY({y1}px);"
	></div>
	<div
		class="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl pointer-events-none"
		style="transform: translateY({y2}px);"
	></div>

	<div class="container mx-auto max-w-6xl relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center mb-6 stagger-parent" class:in-view={isVisible}>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-center text-gray-900 text-balance stagger-2">
				{tr.heading_plain}<span class="font-bold text-brand-teal">{tr.heading_accent}</span>{tr.heading_end}
			</h2>
			<div class="accent-line stagger-3" class:expanded={isVisible}></div>
		</div>

		<p
			class="text-center max-w-2xl mx-auto mb-20 text-gray-500 leading-relaxed stagger-parent stagger-4"
			class:in-view={isVisible}
		>
			<strong class="text-gray-800">Human Resource Information System (HRIS)</strong>{tr.desc_plain}<span class="text-brand-teal font-semibold">{tr.desc_accent}</span>{tr.desc_end}
		</p>

		<!-- Three-column grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
			<!-- Left column -->
			<div class="space-y-8 md:space-y-14">
				{#each highlights.filter((h) => h.side === 'left') as item, i}
					<div
						class="flex flex-col group service-item"
						class:in-view={isVisible}
						style="animation-delay: {i * 150}ms;"
					>
						<div class="flex items-center gap-3 mb-3">
							<div
								class="relative text-brand-orange bg-brand-orange/10 p-3 rounded-xl transition-all duration-300
								group-hover:bg-brand-orange/20 group-hover:scale-110"
							>
								<item.icon size={22} />
							</div>
							<h3
								class="text-lg font-semibold text-gray-800 group-hover:text-brand-orange transition-colors duration-300"
							>
								{item.title}
							</h3>
						</div>
						<p class="text-sm text-gray-500 leading-relaxed pl-14">{item.desc}</p>
					</div>
				{/each}
			</div>

			<!-- Center image -->
			<div class="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
				<div class="relative w-full max-w-xs center-image-wrap" class:in-view={isVisible}>
					<div
						class="absolute inset-0 border-4 border-brand-teal/30 rounded-2xl -m-3 z-[-1]
						transition-all duration-700 scale-95 opacity-0"
						class:show-border={isVisible}
					></div>

					<div class="rounded-2xl overflow-hidden shadow-2xl relative">
						<img
							src="/present-khwarizmi.webp"
							alt="Tim HR Al-Khwarizmi"
							class="w-full h-full object-cover"
							loading="lazy"
							decoding="async"
							style="height: 480px;"
						/>
						<div
							class="absolute inset-0"
							style="background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(13,148,136,0.75) 100%);"
						></div>
						<div class="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
							<p class="text-white/80 text-xs font-medium uppercase tracking-widest">{tr.center_tag}</p>
							<h3 class="text-white font-bold text-lg leading-snug">{tr.center_title}</h3>
							<a
								href="#modul"
								class="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full
								text-sm font-semibold hover:bg-brand-orange hover:text-white transition-all w-fit mt-1"
							>
								{tr.center_cta} <ArrowRight size={14} />
							</a>
						</div>
					</div>

					<div
						class="absolute -top-5 -right-8 w-16 h-16 rounded-full bg-brand-orange/15"
						style="transform: translateY({y1 * 0.5}px);"
					></div>
					<div
						class="absolute -bottom-7 -left-10 w-20 h-20 rounded-full bg-brand-teal/10"
						style="transform: translateY({y2 * 0.5}px);"
					></div>
				</div>
			</div>

			<!-- Right column -->
			<div class="space-y-8 md:space-y-14">
				{#each highlights.filter((h) => h.side === 'right') as item, i}
					<div
						class="flex flex-col group service-item"
						class:in-view={isVisible}
						style="animation-delay: {(i + 3) * 150}ms;"
					>
						<div class="flex items-center gap-3 mb-3">
							<div
								class="relative text-brand-teal bg-brand-teal/10 p-3 rounded-xl transition-all duration-300
								group-hover:bg-brand-teal/20 group-hover:scale-110"
							>
								<item.icon size={22} />
							</div>
							<h3
								class="text-lg font-semibold text-gray-800 group-hover:text-brand-teal transition-colors duration-300"
							>
								{item.title}
							</h3>
						</div>
						<p class="text-sm text-gray-500 leading-relaxed pl-14">{item.desc}</p>
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
				<h3 class="text-2xl font-bold text-white mb-1">{tr.cta_heading}</h3>
				<p class="text-white/90 text-sm">{tr.cta_sub}</p>
			</div>
			<a
				href="https://wa.me/628128225136?text=Halo%2C+saya+ingin+meminta+demo+HRIS+Al-Khwarizmi"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white
				px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-900/20
				whitespace-nowrap"
			>
				{tr.cta_btn} <ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<style>
	.accent-line {
		height: 3px;
		width: 96px;
		background: linear-gradient(90deg, #0d9488, #f97316);
		border-radius: 2px;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.9s ease 0.5s;
	}
	.accent-line.expanded { transform: scaleX(1); }

	.stagger-parent .stagger-2,
	.stagger-parent .stagger-3 {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	.stagger-parent.in-view .stagger-2 { opacity: 1; transform: none; transition-delay: 0.25s; }
	.stagger-parent.in-view .stagger-3 { opacity: 1; transform: none; transition-delay: 0.45s; }

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
