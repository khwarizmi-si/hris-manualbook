<script lang="ts">
	import { onMount } from 'svelte';
	import { UserCheck, Bell, FileText, CheckCircle2, BarChart2, Briefcase, ClipboardList, FileCheck, Lock, MessageSquare } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	const flowIcons = [UserCheck, Bell, FileText, CheckCircle2, BarChart2];
	const flowColors = ['teal', 'orange', 'teal', 'orange', 'teal'];
	const offboardIcons = [Briefcase, ClipboardList, FileCheck, FileText, Lock, MessageSquare];

	let tr = $derived(t[$lang].workflow);

	let overtimeFlow = $derived(
		tr.overtime_steps.map((s, i) => ({ ...s, icon: flowIcons[i], color: flowColors[i] }))
	);
	let offboardingItems = $derived(
		tr.offboarding_items.map((c, i) => ({ ...c, icon: offboardIcons[i] }))
	);

	let sectionEl: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.06 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #fff7ed 0%, #f0fdf9 50%, #ffffff 100%);"
>
	<!-- Blobs -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>

	<div class="max-w-7xl mx-auto relative z-10">

		<!-- Overtime flow heading -->
		<div class="flex flex-col items-center text-center mb-14 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				{tr.badge}
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				{tr.heading_plain}<span class="text-[#0d9488]">{tr.heading_accent}</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				{tr.desc}
			</p>
		</div>

		<!-- Flow steps -->
		<div class="max-w-5xl mx-auto mb-24">
			<!-- Mobile: vertical list -->
			<div class="sm:hidden flex flex-col gap-3 max-w-sm mx-auto">
				{#each overtimeFlow as flow, i}
					<div
						class="flow-step flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
						class:in-view={isVisible}
						style="animation-delay: {i * 80}ms;"
					>
						<div class="relative flex-shrink-0">
							<div class="w-12 h-12 rounded-full flex items-center justify-center shadow-md
								{flow.color === 'teal' ? 'bg-[#0d9488]' : 'bg-[#f97316]'}">
								<flow.icon size={20} class="text-white" />
							</div>
							<span class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center
								{flow.color === 'teal' ? 'bg-[#f97316]' : 'bg-[#0d9488]'}">
								{flow.step}
							</span>
						</div>
						<div class="flex-1 min-w-0">
							<span class="text-xs font-bold {flow.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}">{flow.actor}</span>
							<p class="text-sm text-gray-700 font-medium leading-snug">{flow.action}</p>
						</div>
						<span class="flex-shrink-0 text-[10px] px-2 py-1 rounded-full font-semibold
							{flow.color === 'teal' ? 'bg-teal-50 text-[#0d9488]' : 'bg-orange-50 text-[#f97316]'}">
							{flow.status}
						</span>
					</div>
				{/each}
			</div>

			<!-- Desktop: horizontal -->
			<div class="hidden sm:flex relative items-center gap-0">
				<div class="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0d9488] via-[#f97316] to-[#0d9488] opacity-20"></div>
				{#each overtimeFlow as flow, i}
					<div
						class="flow-step relative flex-1 flex flex-col items-center text-center z-10 px-2"
						class:in-view={isVisible}
						style="animation-delay: {i * 100}ms;"
					>
						<div class="relative mb-4">
							<div class="w-14 h-14 rounded-full flex items-center justify-center shadow-lg
								{flow.color === 'teal' ? 'bg-[#0d9488]' : 'bg-[#f97316]'}">
								<flow.icon size={22} class="text-white" />
							</div>
							<span class="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center
								{flow.color === 'teal' ? 'bg-[#f97316]' : 'bg-[#0d9488]'}">
								{flow.step}
							</span>
						</div>
						<span class="text-xs font-bold mb-1 {flow.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}">{flow.actor}</span>
						<p class="text-xs text-gray-600 leading-snug mb-2 max-w-[120px]">{flow.action}</p>
						<span class="text-[10px] px-2.5 py-1 rounded-full font-semibold
							{flow.color === 'teal' ? 'bg-teal-50 text-[#0d9488]' : 'bg-orange-50 text-[#f97316]'}">
							{flow.status}
						</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Divider -->
		<div class="flex items-center gap-4 mb-16 max-w-3xl mx-auto">
			<div class="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
			<div class="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#0d9488] text-xs font-bold px-4 py-2 rounded-full shadow-sm uppercase tracking-wide">
				{tr.offboarding_badge}
			</div>
			<div class="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
		</div>

		<p class="text-center text-gray-500 mb-12 max-w-xl mx-auto">{tr.offboarding_desc}</p>

		<!-- Offboarding checklist -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
			{#each offboardingItems as c, i}
				<div
					class="offboard-card group bg-white rounded-2xl p-5 border border-gray-100
					hover:shadow-xl hover:-translate-y-1 hover:border-teal-100 transition-all duration-300 flex gap-4 items-start"
					class:in-view={isVisible}
					style="animation-delay: {i * 80}ms;"
				>
					<div class="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0d9488]/8 flex items-center justify-center
						group-hover:bg-[#0d9488] group-hover:shadow-md transition-all duration-300">
						<c.icon size={18} class="text-[#0d9488] group-hover:text-white transition-colors duration-300" />
					</div>
					<div>
						<div class="text-xs text-[#0d9488] font-bold mb-1">No. {c.no}</div>
						<p class="text-sm font-medium text-gray-800 leading-snug">{c.item}</p>
						<p class="text-xs text-[#f97316] font-semibold mt-1.5">{c.pic}</p>
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

	.flow-step {
		opacity: 0; transform: translateY(28px);
		transition: opacity 0.5s ease, transform 0.5s ease;
	}
	.flow-step.in-view { opacity: 1; transform: none; }

	.offboard-card {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s;
	}
	.offboard-card.in-view { opacity: 1; transform: none; }
</style>
