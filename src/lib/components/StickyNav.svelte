<script lang="ts">
	import { onMount } from 'svelte';
	import { MessageCircle, Menu, X } from 'lucide-svelte';
	import logo from '$lib/assets/logo-khwarizmi.png';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	let tr = $derived(t[$lang]);

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 60;
			if (!scrolled) mobileOpen = false;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="fixed top-0 inset-x-0 z-50 transition-all duration-300
		{scrolled
		? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
		: 'bg-transparent'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="#main-content" class="flex items-center gap-3">
				<img src={logo} alt="Al-Khwarizmi" class="h-8 w-auto" />
				<div class="leading-tight">
					<div class="text-sm font-bold {scrolled ? 'text-gray-900' : 'text-gray-900'}">HRIS</div>
					<div class="text-xs text-[#0d9488] font-medium">Al-Khwarizmi</div>
				</div>
			</a>

			<!-- Desktop links -->
			<div class="hidden lg:flex items-center gap-1">
				{#each tr.nav.links as link}
					<a
						href={link.href}
						class="px-3 py-2 text-sm font-medium transition-colors rounded-lg
						{scrolled
							? 'text-orange-950 hover:text-[#f97316] hover:bg-orange-50'
							: 'text-gray-700 hover:text-[#f97316] hover:bg-white/50'}"
					>
						{link.label}
					</a>
				{/each}

				<!-- Language toggle -->
				<button
					onclick={() => lang.update(l => l === 'id' ? 'en' : 'id')}
					class="ml-2 flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wider transition-all
					{scrolled
						? 'border-gray-200 text-gray-700 hover:border-[#0d9488] hover:text-[#0d9488] bg-white'
						: 'border-white/40 text-gray-700 hover:border-[#0d9488] hover:text-[#0d9488] bg-white/20'}"
					title="Switch language"
				>
					{#if $lang === 'id'}
						<span>ID</span><span class="text-gray-300">|</span><span class="opacity-40">EN</span>
					{:else}
						<span class="opacity-40">ID</span><span class="text-gray-300">|</span><span>EN</span>
					{/if}
				</button>

				<a
					href="https://wa.me/628128225136?text=Halo%2C+saya+ingin+meminta+demo+HRIS+Al-Khwarizmi"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-[#f97316] hover:bg-[#ea6c0a]
					text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
				>
					{tr.nav.demo}
					<MessageCircle size={14} />
				</a>
			</div>

			<!-- Mobile right side -->
			<div class="lg:hidden flex items-center gap-2">
				<!-- Language toggle mobile -->
				<button
					onclick={() => lang.update(l => l === 'id' ? 'en' : 'id')}
					class="flex items-center gap-1 px-3 py-2 min-h-[44px] rounded-lg border text-xs font-bold tracking-wider transition-all
					{scrolled
						? 'border-gray-200 text-gray-700 bg-white'
						: 'border-gray-300 text-gray-700 bg-white/20'}"
				>
					{$lang === 'id' ? 'EN' : 'ID'}
				</button>
				<!-- Hamburger -->
				<button
					onclick={() => (mobileOpen = !mobileOpen)}
					class="p-2.5 rounded-lg transition-colors
					{scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-700 hover:bg-white/40'}"
					aria-label="Toggle menu"
				>
					{#if mobileOpen}
						<X size={22} />
					{:else}
						<Menu size={22} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile dropdown -->
	{#if mobileOpen}
		<div class="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
			{#each tr.nav.links as link}
				<a
					href={link.href}
					onclick={() => (mobileOpen = false)}
					class="block px-4 py-2.5 text-sm font-medium text-orange-950 hover:text-[#f97316] hover:bg-orange-50 rounded-lg transition-colors"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://wa.me/628128225136?text=Halo%2C+saya+ingin+meminta+demo+HRIS+Al-Khwarizmi"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center gap-1.5 mt-2 px-4 py-2.5 bg-[#f97316] text-white text-sm font-semibold rounded-xl"
			>
				{tr.nav.demo} <MessageCircle size={14} />
			</a>
		</div>
	{/if}
</nav>
