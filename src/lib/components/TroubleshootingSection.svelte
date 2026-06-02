<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail, MessageSquare, Ticket, AlertTriangle, CheckCircle2 } from 'lucide-svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	const contactIcons = [Mail, MessageSquare, Ticket];
	const contactColors = ['teal', 'orange', 'teal'];

	let tr = $derived(t[$lang].troubleshooting);
	let contacts = $derived(
		tr.contacts.map((c, i) => ({ ...c, icon: contactIcons[i], color: contactColors[i] }))
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
	id="troubleshooting"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden bg-white"
>
	<!-- Blobs -->
	<div class="absolute top-10 left-0 w-80 h-80 rounded-full bg-red-50/60 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				{tr.badge}
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				<span class="text-red-500">{tr.heading_accent}</span>{tr.heading_plain}
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				{tr.desc}
			</p>
		</div>

		<!-- Issue cards -->
		<div class="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
			{#each tr.issues as row, i}
				<div
					class="issue-card group bg-white rounded-2xl border border-gray-100 p-5
					hover:shadow-xl hover:-translate-y-1 hover:border-[#0d9488]/20 transition-all duration-300 overflow-hidden"
					class:in-view={isVisible}
					style="animation-delay: {i * 60}ms;"
				>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center
							group-hover:bg-red-100 transition-colors duration-300">
							<AlertTriangle size={18} class="text-red-400" />
						</div>
						<div class="flex-1 min-w-0">
							<h4 class="text-sm font-bold text-gray-900 mb-1">{row.issue}</h4>
							<p class="text-xs text-gray-400 mb-3 leading-relaxed">{tr.col_cause}: {row.cause}</p>
							<div class="flex items-start gap-2 bg-teal-50/70 rounded-xl px-3 py-2.5">
								<CheckCircle2 size={14} class="text-[#0d9488] flex-shrink-0 mt-0.5" />
								<p class="text-xs text-[#0d9488] font-semibold leading-relaxed">{row.solution}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Contact section -->
		<div class="contact-wrap max-w-3xl mx-auto" class:in-view={isVisible}>
			<p class="text-center text-sm text-gray-400 font-medium mb-6 uppercase tracking-widest">{tr.contact_heading}</p>
			<div class="grid sm:grid-cols-3 gap-5">
				{#each contacts as contact, i}
					<div
						class="contact-card group flex flex-col items-center text-center p-6 rounded-2xl border
						hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer
						{contact.color === 'teal' ? 'border-teal-100 hover:border-teal-200 bg-teal-50/30' : 'border-orange-100 hover:border-orange-200 bg-orange-50/30'}"
						class:in-view={isVisible}
						style="animation-delay: {(i + 8) * 60}ms;"
					>
						<div class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300
							{contact.color === 'teal'
								? 'bg-teal-100 group-hover:bg-[#0d9488]'
								: 'bg-orange-100 group-hover:bg-[#f97316]'}">
							<contact.icon size={22} class="transition-colors duration-300
								{contact.color === 'teal' ? 'text-[#0d9488] group-hover:text-white' : 'text-[#f97316] group-hover:text-white'}" />
						</div>
						<div class="text-sm font-bold text-gray-900 mb-1">{contact.label}</div>
						<div class="text-sm font-medium transition-colors duration-300
							{contact.color === 'teal' ? 'text-[#0d9488] group-hover:text-[#f97316]' : 'text-[#f97316] group-hover:text-[#0d9488]'}">
							{contact.value}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.accent-line {
		height: 3px; width: 80px;
		background: linear-gradient(90deg, #ef4444, #f97316);
		border-radius: 2px;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.9s ease 0.4s;
	}
	.accent-line.expanded { transform: scaleX(1); }

	.section-header {
		opacity: 0; transform: translateY(20px);
		transition: opacity 0.7s ease, transform 0.7s ease;
	}
	.section-header.in-view { opacity: 1; transform: none; }

	.issue-card {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s;
	}
	.issue-card.in-view { opacity: 1; transform: none; }

	.contact-wrap {
		opacity: 0; transform: translateY(20px);
		transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
	}
	.contact-wrap.in-view { opacity: 1; transform: none; }

	.contact-card {
		opacity: 0; transform: translateY(16px);
		transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s;
	}
	.contact-card.in-view { opacity: 1; transform: none; }
</style>
