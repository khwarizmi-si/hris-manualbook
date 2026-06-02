<script lang="ts">
	import { onMount } from 'svelte';
	import { Lock, Pencil, MapPin, CalendarDays, FileSignature, LogOut, ChevronDown, AlertCircle, Image, PlayCircle, ClipboardCheck, Timer } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	const guideIcons = [Lock, Pencil, MapPin, ClipboardCheck, Timer, CalendarDays, FileSignature, LogOut];
	const guideScreenshots = [
		'/screenshots/login.webp',
		'/screenshots/user/profile.webp',
		'/screenshots/user/absensi.webp',
		'/screenshots/user/koreksi-absensi.webp',
		'/screenshots/user/overtime.webp',
		'/screenshots/user/cuti.webp',
		'/screenshots/user/dokumen.webp',
		''
	];
	const tutorialVideo = '/videos/tutorial-karyawan.mp4';
	const guideVideoSrcs = [
		'/videos/tutorial-karyawan-login.mp4',
		'/videos/tutorial-karyawan-profile.mp4',
		'/videos/tutorial-karyawan-attendance.mp4',
		'/videos/tutorial-karyawan-attendance-correction.mp4',
		'/videos/tutorial-karyawan-overtime.mp4',
		'/videos/tutorial-karyawan-leave.mp4',
		'/videos/tutorial-karyawan-documents.mp4',  // 2.7 Dokumen & TTD
		''  // 2.8 Resign — no specific video yet
	];

	let tr = $derived(t[$lang].employee);
	let guides = $derived(
		tr.guides.map((g, i) => ({
			...g,
			icon: guideIcons[i],
			screenshot: guideScreenshots[i],
			videoSrc: guideVideoSrcs[i]
		}))
	);

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
	id="panduan-karyawan"
	bind:this={sectionEl}
	class="relative w-full py-20 sm:py-24 px-3 sm:px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #f0fdf9 0%, #ffffff 100%);"
>
	<!-- Blobs (hidden on mobile) -->
	<div class="hidden sm:block absolute top-20 left-0 w-72 h-72 rounded-full bg-[#0d9488]/6 blur-3xl pointer-events-none"></div>
	<div class="hidden sm:block absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>

	<!-- Floating dots (hidden on mobile) -->
	<div class="hidden md:block absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#0d9488]/25 float-dot"></div>
	<div class="hidden md:block absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-[#f97316]/30 float-dot-2"></div>

	<div class="max-w-6xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-12 sm:mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 tracking-wide uppercase">
				{tr.badge}
			</div>
			<h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
				{tr.heading_plain}<span class="text-[#0d9488]">{tr.heading_accent}</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed px-2">
				{tr.desc}
			</p>
		</div>

		<!-- General video tutorial -->
		<div
			class="video-card max-w-4xl mx-auto mb-8 sm:mb-10 bg-white rounded-2xl sm:rounded-3xl border border-teal-100 overflow-hidden shadow-xl shadow-teal-100/40"
			class:in-view={isVisible}
		>
			<div class="grid lg:grid-cols-[1fr_1.45fr]">
				<div class="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
					<div class="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full mb-3 sm:mb-4 uppercase tracking-wide w-fit">
						<PlayCircle size={14} />
						{tr.tutorial_video.badge}
					</div>
					<h3 class="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{tr.tutorial_video.title}</h3>
					<p class="text-xs sm:text-sm text-gray-500 leading-relaxed">{tr.tutorial_video.desc}</p>
				</div>
				<div class="bg-gray-950 p-2 sm:p-3">
					<video
						class="w-full aspect-video rounded-xl sm:rounded-2xl bg-black"
						controls
						preload="metadata"
						src={tutorialVideo}
						aria-label={tr.tutorial_video.title}
					>
						<track kind="captions" />
					</video>
				</div>
			</div>
		</div>

		<!-- Accordion -->
		<div class="space-y-2.5 sm:space-y-3 max-w-4xl mx-auto">
			{#each guides as guide, i}
				<div
					class="accordion-item bg-white rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 ease-out
					{openCard === guide.id
						? 'border-[#0d9488]/30 sm:border-[#0d9488]/40 shadow-lg shadow-teal-100/30'
						: 'border-gray-100 hover:border-[#0d9488]/20 hover:shadow-md shadow-sm shadow-gray-100/50'}"
					class:in-view={isVisible}
					style="animation-delay: {i * 70}ms;"
				>
					<!-- Accordion Header -->
					<button
						class="accordion-header w-full flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-5 text-left transition-colors duration-200 cursor-pointer select-none active:scale-[0.995]
						{openCard === guide.id ? 'bg-gradient-to-r from-teal-50/80 to-white' : 'bg-white hover:bg-teal-50/30'}"
						onclick={() => toggle(guide.id)}
						aria-expanded={openCard === guide.id}
						aria-controls="accordion-panel-{guide.id}"
					>
						<div class="flex items-center gap-2.5 sm:gap-4 min-w-0">
							<!-- Icon circle -->
							<div class="relative flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300
								{openCard === guide.id
									? 'bg-[#0d9488] shadow-md shadow-teal-200/60'
									: 'bg-teal-50'}">
								<guide.icon size={18} class="sm:hidden {openCard === guide.id ? 'text-white' : 'text-[#0d9488]'}" />
								<guide.icon size={20} class="hidden sm:block {openCard === guide.id ? 'text-white' : 'text-[#0d9488]'}" />
							</div>
							<div class="min-w-0">
								<div class="text-[10px] sm:text-xs text-[#0d9488] font-bold mb-0.5 tracking-wide">
									{tr.section} {guide.id}
								</div>
								<div class="text-sm sm:text-base font-bold text-gray-900 truncate">{guide.title}</div>
							</div>
						</div>
						<!-- Chevron -->
						<div class="flex-shrink-0 ml-2 sm:ml-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-out
							{openCard === guide.id ? 'bg-[#0d9488] text-white rotate-180' : 'bg-gray-100 text-gray-400'}">
							<ChevronDown size={14} class="sm:hidden" />
							<ChevronDown size={16} class="hidden sm:block" />
						</div>
					</button>

					<!-- Accordion Content — always rendered, animated via grid-rows -->
					<div
						class="accordion-panel"
						id="accordion-panel-{guide.id}"
						data-open={openCard === guide.id}
						role="region"
						aria-labelledby="accordion-header-{guide.id}"
					>
						<div class="accordion-inner px-3 sm:px-6 pb-5 sm:pb-6 pt-4 sm:pt-5 border-t border-teal-50/80">
							<div class="ml-0 sm:ml-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">

								<!-- Steps -->
								<div class="border-l-2 border-[#0d9488]/20 pl-3 sm:pl-5">
									<ol class="space-y-2.5 sm:space-y-3">
										{#each guide.steps as step, idx}
											<li class="flex gap-2.5 sm:gap-3 items-start">
												<span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0d9488] text-white text-[10px] sm:text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
													{idx + 1}
												</span>
												<span class="text-gray-700 text-xs sm:text-sm leading-relaxed">{step}</span>
											</li>
										{/each}
									</ol>
									{#if guide.tip}
										<div class="mt-4 sm:mt-5 flex gap-2.5 sm:gap-3 bg-amber-50/80 border border-amber-200/60 rounded-xl p-3 sm:p-4">
											<AlertCircle size={16} class="text-amber-500 flex-shrink-0 mt-0.5" />
											<p class="text-amber-800 text-xs sm:text-sm leading-relaxed">{guide.tip}</p>
										</div>
									{/if}
								</div>

								<!-- Screenshot + video -->
								{#if guide.screenshot || guide.videoSrc}
									<div class="space-y-3">
										{#if guide.screenshot}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
												<div class="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
													<div class="flex gap-1.5 flex-shrink-0">
														<div class="w-2.5 h-2.5 rounded-full bg-[#f87171]"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-[#facc15]"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></div>
													</div>
													<div class="flex-1 bg-white rounded-md border border-gray-100 text-[11px] text-gray-400 px-2 py-0.5 text-center truncate">
														khwarizmi.co.id
													</div>
												</div>
												{#if !imgErrors[guide.id]}
													<img
														src={guide.screenshot}
														alt="Screenshot {guide.title}"
														class="w-full block"
														loading="lazy"
														decoding="async"
														onerror={() => { imgErrors[guide.id] = true; }}
													/>
												{:else}
													<div class="bg-gradient-to-br from-teal-50/60 to-white flex flex-col items-center justify-center gap-2.5 py-10 text-gray-400">
														<Image size={24} class="opacity-60" />
														<p class="text-xs">{tr.screenshot_pending}</p>
													</div>
												{/if}
											</div>
										{/if}

										{#if guide.videoSrc}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
												<div class="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2.5">
													<PlayCircle size={14} class="text-[#0d9488] flex-shrink-0" />
													<span class="text-xs font-semibold text-gray-700">{tr.video_tutorial}</span>
												</div>
												<video
													class="w-full aspect-video bg-black"
													controls
													preload="metadata"
													src={guide.videoSrc}
													aria-label="Tutorial {guide.title}"
												>
													<track kind="captions" />
												</video>
											</div>
										{/if}
									</div>
								{/if}

							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Accent line */
	.accent-line {
		height: 3px;
		width: 80px;
		background: linear-gradient(90deg, #0d9488, #f97316);
		border-radius: 2px;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.9s ease 0.4s;
	}
	.accent-line.expanded {
		transform: scaleX(1);
	}

	/* Section header */
	.section-header {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
	}
	.section-header.in-view {
		opacity: 1;
		transform: none;
	}

	/* Accordion item entrance */
	.accordion-item {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.4s ease, transform 0.4s ease, border-color 0.3s, box-shadow 0.3s;
	}
	.accordion-item.in-view {
		opacity: 1;
		transform: none;
	}

	/* Accordion panel — smooth expand/collapse via grid-rows */
	.accordion-panel {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.accordion-panel[data-open='true'] {
		grid-template-rows: 1fr;
	}
	.accordion-inner {
		overflow: hidden;
		transition: opacity 0.3s ease 0.1s;
	}
	.accordion-panel:not([data-open='true']) .accordion-inner {
		opacity: 0;
		transition: opacity 0.2s ease;
	}
	.accordion-panel[data-open='true'] .accordion-inner {
		opacity: 1;
	}

	/* Video card */
	.video-card {
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s, box-shadow 0.3s ease;
	}
	.video-card.in-view {
		opacity: 1;
		transform: none;
	}

	/* Floating dots */
	.float-dot  { animation: floatUp   3s ease-in-out infinite; }
	.float-dot-2{ animation: floatDown 4s ease-in-out infinite; animation-delay: 1.2s; }
	@keyframes floatUp   { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-12px);opacity:1} }
	@keyframes floatDown { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(12px);opacity:1} }
</style>
