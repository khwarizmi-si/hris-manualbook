<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Globe, Phone, MapPin } from 'lucide-svelte';
	import logo from '$lib/assets/logo-khwarizmi.png';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	let mounted = $state(false);
	let tr = $derived(t[$lang].hero);

	onMount(() => { mounted = true; });
</script>

<section
	class="relative flex w-full min-h-screen flex-col overflow-hidden md:flex-row pt-16"
	style="background: linear-gradient(135deg, #f0fdf9 0%, #ffffff 60%);"
	role="banner"
>
	<!-- Subtle blob top-left -->
	<div class="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-teal/8 blur-3xl pointer-events-none"></div>

	<!-- Left Side: Content -->
	<div class="relative z-10 flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
		{#if mounted}
			<div>
				<!-- Logo header -->
				<header in:fly={{ y: 20, duration: 500, delay: 150 }} class="mb-10">
					<div class="flex items-center gap-3">
						<img src={logo} alt="Al-Khwarizmi" class="h-10 w-auto" />
						<div class="leading-tight">
							<p class="text-base font-bold text-gray-900">HRIS</p>
							<p class="text-xs tracking-wider text-brand-teal font-medium">Al-Khwarizmi</p>
						</div>
					</div>
				</header>

				<!-- Slogan -->
				<div in:fly={{ y: 20, duration: 500, delay: 250 }} class="mb-5">
					<span class="text-xs font-bold tracking-[0.2em] text-brand-teal-dark uppercase">
						{tr.slogan}
					</span>
				</div>

				<!-- Title -->
				<h1
					in:fly={{ y: 20, duration: 600, delay: 300 }}
					class="font-extrabold text-gray-900"
					style="font-size: clamp(36px, 5vw, 64px); letter-spacing: -0.02em; line-height: 1.1; text-wrap: balance;"
				>
					Manual Book<br />
					<span class="text-brand-orange">HRIS</span>
					<span class="block text-gray-500" style="font-size: 0.6em; font-weight: 700; margin-top: 6px;">
						Al-Khwarizmi
					</span>
				</h1>

				<!-- Accent bar -->
				<div
					in:fly={{ x: -20, duration: 600, delay: 400 }}
					class="my-6 h-1 w-20 bg-brand-teal rounded-full"
				></div>

				<!-- Subtitle -->
				<p
					in:fly={{ y: 20, duration: 500, delay: 450 }}
					class="mb-8 max-w-md text-base text-gray-500 leading-relaxed"
				>
					{tr.subtitle.split(tr.subtitle_strong)[0]}<strong class="text-gray-800">{tr.subtitle_strong}</strong>{tr.subtitle.split(tr.subtitle_strong)[1]}
				</p>

				<!-- CTA -->
				<a
					in:fly={{ y: 20, duration: 500, delay: 520 }}
					href="#panduan-karyawan"
					class="inline-block text-sm font-bold tracking-[0.2em] text-orange-700 transition-colors hover:text-orange-800 uppercase"
				>
					{tr.cta}
				</a>
			</div>

			<!-- Contact footer -->
			<footer in:fly={{ y: 20, duration: 500, delay: 650 }} class="mt-12 pt-6 border-t border-gray-100">
				<div class="grid grid-cols-1 gap-4 text-xs text-gray-500 sm:grid-cols-3">
					<div class="flex items-center gap-2">
						<Globe size={14} class="text-brand-teal flex-shrink-0" />
						<span>khwarizmi.co.id</span>
					</div>
					<div class="flex items-center gap-2">
						<Phone size={14} class="text-brand-teal flex-shrink-0" />
						<span>+62 812-8225-1136</span>
					</div>
					<div class="flex items-center gap-2">
						<MapPin size={14} class="text-brand-teal flex-shrink-0" />
						<span>Indonesia</span>
					</div>
				</div>
			</footer>
		{/if}
	</div>

	<!-- Right Side: Image with clip-path reveal animation -->
	<div
		class="hero-image w-full min-h-[45vw] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
		style="background-image: url('/kantor-khwarizmi.webp');"
		aria-hidden="true"
	></div>
</section>

<style>
	/* Mobile: slide up from bottom edge */
	.hero-image {
		animation: revealMobile 1s cubic-bezier(0.77, 0, 0.175, 1) 0.2s both;
	}
	@keyframes revealMobile {
		from { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
		to   { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
	}

	/* Desktop: reveal from right with diagonal left edge */
	@media (min-width: 768px) {
		.hero-image {
			animation: revealDesktop 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s both;
		}
		@keyframes revealDesktop {
			from { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
			to   { clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%); }
		}
	}
</style>
