<script lang="ts">
	import { onMount } from 'svelte';
	import { Building2, Timer, Bell, Layers, Repeat2, KeyRound } from 'lucide-svelte';

	const settings = [
		{ icon: Building2, title: 'Informasi Perusahaan',   desc: 'Isi nama perusahaan, logo, alamat, nomor telepon, dan zona waktu (default: WIB).',                                                        color: 'teal' },
		{ icon: Timer,     title: 'Konfigurasi Kehadiran',  desc: 'Atur radius clock-in (meter), toleransi keterlambatan (menit), fitur foto selfie, dan jam kerja default.',                                 color: 'orange' },
		{ icon: Bell,      title: 'Konfigurasi Notifikasi', desc: 'Pilih jenis notifikasi via email/in-app: persetujuan cuti, overtime, dokumen, dan resign.',                                                color: 'teal' },
		{ icon: Layers,    title: 'Manajemen Departemen',   desc: 'Tambah, edit, atau nonaktifkan departemen. Tentukan Kepala Departemen untuk setiap unit.',                                                  color: 'orange' },
		{ icon: Repeat2,   title: 'Konfigurasi Shift',      desc: 'Buat shift kerja (pagi/malam/custom) dan assign ke karyawan/departemen via kalender drag-and-drop.',                                      color: 'teal' },
		{ icon: KeyRound,  title: 'Role & Perizinan',       desc: 'Kelola hak akses 2 level (Admin HR & Karyawan) dan atur izin spesifik per fitur/departemen.',                                             color: 'orange' }
	];

	const roles = [
		{ role: 'Admin HR',   dot: 'orange', access: 'Akses penuh: kelola karyawan, kehadiran, dokumen, overtime, resign, dan semua fitur Setting', limit: 'Tidak dapat mengubah role milik Admin lain tanpa konfirmasi Super Admin' },
		{ role: 'Karyawan',   dot: 'teal',   access: 'Akses terbatas: profil sendiri, kehadiran sendiri, cuti, overtime, dokumen, dan resign',       limit: 'Tidak dapat melihat data karyawan lain atau mengakses menu Setting' }
	];

	let sectionEl: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.08 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	id="setting"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #ffffff 0%, #f0fdf9 50%, #ffffff 100%);"
>
	<!-- Blobs -->
	<div class="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[#f97316]/4 blur-3xl pointer-events-none"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-16 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				BAB 4 — Khusus Admin
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Fitur <span class="text-[#0d9488]">Setting</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				Menu Setting hanya dapat diakses Admin HR untuk mengonfigurasi sistem HRIS sesuai kebutuhan perusahaan.
			</p>
		</div>

		<!-- Settings grid -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
			{#each settings as s, i}
				<div
					class="setting-card group relative bg-white rounded-2xl p-6 border overflow-hidden
					hover:shadow-xl hover:-translate-y-1 transition-all duration-300
					{s.color === 'teal' ? 'border-teal-100 hover:border-teal-200' : 'border-orange-100 hover:border-orange-200'}"
					class:in-view={isVisible}
					style="animation-delay: {i * 80}ms;"
				>
					<!-- Corner gradient -->
					<div class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-50 pointer-events-none
						{s.color === 'teal' ? 'bg-teal-50' : 'bg-orange-50'}"></div>

					<div class="relative">
						<div class="w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110
							{s.color === 'teal' ? 'bg-[#0d9488]/10' : 'bg-[#f97316]/10'}">
							<s.icon size={22} class="{s.color === 'teal' ? 'text-[#0d9488]' : 'text-[#f97316]'}" />
						</div>
						<h3 class="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
						<p class="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
					</div>

					<div class="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500
						{s.color === 'teal' ? 'bg-gradient-to-r from-[#0d9488] to-[#14b8a6]' : 'bg-gradient-to-r from-[#f97316] to-[#fbbf24]'}">
					</div>
				</div>
			{/each}
		</div>

		<!-- Role table -->
		<div class="role-table max-w-4xl mx-auto" class:in-view={isVisible}>
			<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Level Role & Hak Akses</h3>
			<div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
				<table class="w-full text-sm min-w-[500px]">
					<thead>
						<tr style="background: linear-gradient(90deg, #0d9488, #0f766e);">
							<th class="text-left px-6 py-4 font-semibold text-white">Role</th>
							<th class="text-left px-6 py-4 font-semibold text-white">Hak Akses</th>
							<th class="text-left px-6 py-4 font-semibold text-white">Batasan</th>
						</tr>
					</thead>
					<tbody>
						{#each roles as row, i}
							<tr class="border-t border-gray-100 hover:bg-gray-50/70 transition-colors {i % 2 === 1 ? 'bg-gray-50/40' : 'bg-white'}">
								<td class="px-6 py-5 font-semibold text-gray-900 whitespace-nowrap align-top">
									<span class="inline-flex items-center gap-2">
										<span class="w-2.5 h-2.5 rounded-full flex-shrink-0 {row.dot === 'orange' ? 'bg-[#f97316]' : 'bg-[#0d9488]'}"></span>
										{row.role}
									</span>
								</td>
								<td class="px-6 py-5 text-gray-600 align-top leading-relaxed">{row.access}</td>
								<td class="px-6 py-5 text-gray-400 text-xs align-top leading-relaxed">{row.limit}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
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

	.setting-card {
		opacity: 0; transform: translateY(28px);
		transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s;
	}
	.setting-card.in-view { opacity: 1; transform: none; }

	.role-table {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
	}
	.role-table.in-view { opacity: 1; transform: none; }
</style>
