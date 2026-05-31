<script lang="ts">
	import { onMount } from 'svelte';
	import { Users, Clock, FileText, ClipboardList, TrendingUp, ChevronDown, ChevronRight, Image, PlayCircle, ArrowLeftRight, Timer } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	const guideIcons = [Users, ArrowLeftRight, Clock, Timer, FileText, ClipboardList, TrendingUp];
	const guideScreenshots = [
		'/screenshots/admin/admin-karyawan.png',
		'/screenshots/admin/admin-transfer.png',
		'/screenshots/admin/admin-kehadiran.png',
		'/screenshots/admin/admin-overtime.png',
		'/screenshots/admin/admin-dokumen.png',
		'/screenshots/admin/admin-resign.png',
		'/screenshots/admin/admin-laporan.png'
	];
	const guideVideos = ['', '', '', '', '', '', ''];

	let tr = $derived(t[$lang].admin);
	let guides = $derived(
		tr.guides.map((g, i) => ({
			...g,
			icon: guideIcons[i],
			screenshot: guideScreenshots[i],
			videoId: guideVideos[i]
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
				{tr.badge}
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				{tr.heading_plain}<span class="text-[#f97316]">{tr.heading_accent}</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				{tr.desc_plain}<strong class="text-gray-700">{tr.desc_role}</strong>{tr.desc_end}
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
								<div class="text-xs text-[#f97316] font-bold mb-0.5 tracking-wide">{tr.section} {guide.id}</div>
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

								<!-- Steps -->
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

								<!-- Screenshot + video -->
								{#if guide.screenshot || guide.videoId}
									<div class="space-y-3">
										{#if guide.screenshot}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md">
												<div class="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
													<div class="flex gap-1.5 flex-shrink-0">
														<div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
														<div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
													</div>
													<div class="flex-1 bg-white rounded text-xs text-gray-400 px-2 py-0.5 text-center truncate">
														khwarizmi.co.id
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
													<div class="bg-gradient-to-br from-orange-50 to-white flex flex-col items-center justify-center gap-2 py-10 text-gray-400">
														<Image size={28} />
														<p class="text-xs">{tr.screenshot_pending}</p>
														<p class="text-[10px] text-gray-300">{guide.screenshot}</p>
													</div>
												{/if}
											</div>
										{/if}

										{#if guide.videoId}
											<div class="rounded-xl overflow-hidden border border-gray-200 shadow-md">
												<div class="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
													<PlayCircle size={14} class="text-[#f97316] flex-shrink-0" />
													<span class="text-xs font-medium text-gray-600">{tr.video_tutorial}</span>
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
