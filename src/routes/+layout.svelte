<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<svelte:head>
    <title>HRIS Manual Book — Al-Khwarizmi</title>
    <meta name="description" content="Panduan lengkap penggunaan Human Resource Information System (HRIS) untuk karyawan dan Admin HR." />
    
    <link rel="icon" type="image/png" href="/logo-khwarizmi.png" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}