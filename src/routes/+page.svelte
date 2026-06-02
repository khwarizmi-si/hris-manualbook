<script lang="ts">
	import StickyNav from '$lib/components/StickyNav.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ModuleSection from '$lib/components/ModuleSection.svelte';
	import EmployeeGuideSection from '$lib/components/EmployeeGuideSection.svelte';
	import AdminGuideSection from '$lib/components/AdminGuideSection.svelte';
	import SettingSection from '$lib/components/SettingSection.svelte';
	import WorkflowSection from '$lib/components/WorkflowSection.svelte';
	import TroubleshootingSection from '$lib/components/TroubleshootingSection.svelte';
	import GlossarySection from '$lib/components/GlossarySection.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import FooterSection from '$lib/components/FooterSection.svelte';
</script>

<a href="#main-content" class="skip-link">Lewati ke konten utama</a>
<StickyNav />
<main id="main-content">
	<HeroSection />
	<AboutSection />
	<ModuleSection />
	<EmployeeGuideSection />
	<AdminGuideSection />
	<SettingSection />
	<WorkflowSection />
	<TroubleshootingSection />
	<GlossarySection />
	<CtaSection />
</main>
<FooterSection />
