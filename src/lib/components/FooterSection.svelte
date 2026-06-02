<script lang="ts">
	import { ArrowRight, ExternalLink, Phone } from 'lucide-svelte';
	import logo from '$lib/assets/logo-khwarizmi.png';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	let tr = $derived(t[$lang].footer);
</script>

<footer class="relative bg-gray-950 text-gray-400 pt-16 pb-8 overflow-hidden">
	<div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent"></div>
	<div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
			<!-- Brand -->
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-3 mb-5">
					<img src={logo} alt="Al-Khwarizmi" class="h-10 w-auto" />
					<div>
						<div class="text-white font-bold text-sm leading-tight">HRIS</div>
						<div class="text-[#14b8a6] text-xs font-medium">Al-Khwarizmi</div>
					</div>
				</div>
				<p class="text-sm leading-relaxed text-gray-400 max-w-xs">
					{tr.brand_desc}
				</p>
				<div class="mt-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#0d9488] to-[#f97316]"></div>
			</div>

			<!-- Guide links -->
			<div>
				<h4 class="text-white font-semibold mb-5 text-sm tracking-wide">{tr.guide_heading}</h4>
				<ul class="space-y-3 text-sm">
					{#each tr.guide_links as link}
						<li>
							<a
								href={link.href}
								class="group inline-flex items-center gap-2 text-gray-400 hover:text-[#14b8a6] transition-colors"
							>
								<ArrowRight size={12} class="text-gray-600 group-hover:text-[#14b8a6] group-hover:translate-x-0.5 transition-all" />
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Module list -->
			<div>
				<h4 class="text-white font-semibold mb-5 text-sm tracking-wide">{tr.module_heading}</h4>
				<ul class="space-y-3 text-sm">
					{#each tr.module_list as mod}
						<li class="text-gray-400 text-sm">{mod}</li>
					{/each}
				</ul>
			</div>

			<!-- Info -->
			<div>
				<h4 class="text-white font-semibold mb-5 text-sm tracking-wide">{tr.info_heading}</h4>
				<ul class="space-y-3 text-sm text-gray-400">
					<li class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
						{tr.version}
					</li>
					<li class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
						{tr.year}
					</li>
					<li class="pt-2">
						<a
							href="https://khwarizmi.co.id"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-[#14b8a6] hover:text-[#f97316] transition-colors font-medium text-sm"
						>
							khwarizmi.co.id
							<ExternalLink size={12} />
						</a>
						<a
							href="https://wa.me/628128225136?text=Halo%2C+saya+ingin+meminta+demo+HRIS+Al-Khwarizmi"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#f97316] transition-colors text-sm mt-1"
						>
							<Phone size={12} />
							+62 812-8225-1136
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="border-t border-gray-800/60 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
			<p>{tr.bottom1}</p>
			<p>{tr.bottom2}</p>
		</div>
	</div>
</footer>
