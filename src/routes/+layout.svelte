<script lang="ts">
    import '../app.css';
    import { lang } from '$lib/stores/lang';
    let { children } = $props();
    $effect(() => { document.documentElement.lang = $lang; });
</script>

<svelte:head>
    <title>HRIS Manual Book — Al-Khwarizmi</title>
    <meta name="description" content="Panduan lengkap penggunaan Human Resource Information System (HRIS) untuk karyawan dan Admin HR." />
    <link rel="canonical" href="https://khwarizmi.co.id" />
    <meta name="theme-color" content="#0d9488" />

    <meta property="og:title" content="HRIS Manual Book — Al-Khwarizmi" />
    <meta property="og:description" content="Panduan lengkap penggunaan Human Resource Information System (HRIS) untuk karyawan dan Admin HR." />
    <meta property="og:image" content="https://khwarizmi.co.id/logo-khwarizmi.png" />
    <meta property="og:url" content="https://khwarizmi.co.id" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id_ID" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="HRIS Manual Book — Al-Khwarizmi" />
    <meta name="twitter:description" content="Panduan lengkap penggunaan Human Resource Information System (HRIS) untuk karyawan dan Admin HR." />
    <meta name="twitter:image" content="https://khwarizmi.co.id/logo-khwarizmi.png" />
    
    <link rel="icon" type="image/png" href="/logo-khwarizmi.png" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}
