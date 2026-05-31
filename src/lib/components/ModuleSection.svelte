<script lang="ts">
	import { onMount } from 'svelte';
	import { Check, Minus } from 'lucide-svelte';

	// level: 'full' | 'submit' | 'approval' | 'manage' | 'none'
	type Level = 'full' | 'submit' | 'approval' | 'manage' | 'none';

	interface Feature {
		name: string;
		karyawan: Level;
		finance: Level;
		manager: Level;
		admin: Level;
	}

	const features: Feature[] = [
		{ name: 'Absensi (Clock In/Out)',   karyawan: 'full',     finance: 'full',     manager: 'full',     admin: 'full'   },
		{ name: 'Koreksi Absensi',          karyawan: 'submit',   finance: 'submit',   manager: 'submit',   admin: 'manage' },
		{ name: 'Pengajuan Cuti',           karyawan: 'submit',   finance: 'submit',   manager: 'submit',   admin: 'manage' },
		{ name: 'Approval Cuti',            karyawan: 'none',     finance: 'approval', manager: 'approval', admin: 'manage' },
		{ name: 'Pengajuan Overtime',       karyawan: 'submit',   finance: 'submit',   manager: 'none',     admin: 'manage' },
		{ name: 'Approval Overtime',        karyawan: 'none',     finance: 'none',     manager: 'approval', admin: 'manage' },
		{ name: 'Dokumen & TTD Digital',    karyawan: 'full',     finance: 'full',     manager: 'none',     admin: 'manage' },
		{ name: 'Kelola Data Karyawan',     karyawan: 'none',     finance: 'full',     manager: 'none',     admin: 'manage' },
		{ name: 'Transfer Karyawan',        karyawan: 'none',     finance: 'full',     manager: 'none',     admin: 'manage' },
		{ name: 'Pengajuan Resign',         karyawan: 'submit',   finance: 'none',     manager: 'none',     admin: 'manage' },
		{ name: 'Statistik & Laporan',      karyawan: 'none',     finance: 'none',     manager: 'none',     admin: 'full'   },
	];

	const roles = [
		{ key: 'karyawan', label: 'Karyawan',  color: 'teal'   },
		{ key: 'finance',  label: 'Finance',   color: 'blue'   },
		{ key: 'manager',  label: 'Manager',   color: 'violet' },
		{ key: 'admin',    label: 'Admin HR',  color: 'orange' },
	] as const;

	const badge: Record<Level, { label: string; cls: string }> = {
		full:     { label: 'Akses',    cls: 'bg-teal-50 text-[#0d9488] border border-teal-200' },
		submit:   { label: 'Ajukan',   cls: 'bg-blue-50 text-blue-600 border border-blue-200'  },
		approval: { label: 'Approval', cls: 'bg-orange-50 text-[#f97316] border border-orange-200' },
		manage:   { label: 'Kelola',   cls: 'bg-gray-900 text-white border border-gray-800'    },
		none:     { label: '—',        cls: 'text-gray-300'                                    },
	};

	const roleHeaderCls: Record<string, string> = {
		teal:   'bg-teal-50 text-[#0d9488]',
		blue:   'bg-blue-50 text-blue-600',
		violet: 'bg-violet-50 text-violet-600',
		orange: 'bg-orange-50 text-[#f97316]',
	};

	let sectionEl: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const obs = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0.1 });
		if (sectionEl) obs.observe(sectionEl);
		return () => obs.disconnect();
	});
</script>

<section
	id="modul"
	bind:this={sectionEl}
	class="relative w-full py-24 px-4 overflow-hidden"
	style="background: linear-gradient(180deg, #ffffff 0%, #f0fdf9 60%, #ffffff 100%);"
>
	<!-- Decorative blobs -->
	<div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0d9488]/5 blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f97316]/5 blur-3xl pointer-events-none"></div>

	<div class="max-w-5xl mx-auto relative z-10">
		<!-- Heading -->
		<div class="flex flex-col items-center text-center mb-12 section-header" class:in-view={isVisible}>
			<div class="inline-flex items-center gap-2 bg-orange-50 text-[#f97316] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
				Hak Akses per Role
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Siapa Bisa <span class="text-[#0d9488]">Apa?</span>
			</h2>
			<div class="accent-line" class:expanded={isVisible}></div>
			<p class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
				Setiap role memiliki akses berbeda. Gunakan tabel ini sebagai referensi cepat sebelum membaca panduan lengkap.
			</p>
		</div>

		<!-- Legend -->
		<div class="flex flex-wrap justify-center gap-3 mb-8 legend" class:in-view={isVisible}>
			{#each Object.entries(badge).filter(([k]) => k !== 'none') as [, b]}
				<span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full {b.cls}">
					<Check size={11} />
					{b.label}
				</span>
			{/each}
			<span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-gray-400 bg-gray-50 border border-gray-200">
				<Minus size={11} />
				Tidak Ada Akses
			</span>
		</div>

		<!-- Matrix table -->
		<div class="matrix-wrap overflow-x-auto rounded-2xl border border-gray-100 shadow-sm" class:in-view={isVisible}>
			<table class="w-full min-w-[560px] text-sm border-collapse">
				<!-- Role header -->
				<thead>
					<tr class="border-b border-gray-100">
						<th class="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-44 bg-gray-50">
							Fitur
						</th>
						{#each roles as role}
							<th class="px-3 py-4 text-center bg-gray-50">
								<span class="inline-block text-xs font-bold px-3 py-1 rounded-full {roleHeaderCls[role.color]}">
									{role.label}
								</span>
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each features as feat, i}
						<tr
							class="feature-row border-b border-gray-50 last:border-0 transition-colors hover:bg-gray-50/60"
							class:in-view={isVisible}
							style="animation-delay: {i * 50}ms;"
						>
							<td class="px-5 py-3.5 font-medium text-gray-700 bg-white">{feat.name}</td>
							{#each roles as role}
								{@const lvl = feat[role.key] as Level}
								{@const b = badge[lvl]}
								<td class="px-3 py-3.5 text-center bg-white">
									{#if lvl === 'none'}
										<span class="text-gray-200 select-none">—</span>
									{:else}
										<span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full {b.cls}">
											{b.label}
										</span>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Footer note -->
		<p class="text-center text-xs text-gray-400 mt-5 note" class:in-view={isVisible}>
			<strong class="text-gray-500">Kelola</strong> = akses penuh termasuk melihat, menyetujui, mengedit, dan menghapus data milik semua pengguna.
		</p>
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

	.legend {
		opacity: 0; transform: translateY(12px);
		transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
	}
	.legend.in-view { opacity: 1; transform: none; }

	.matrix-wrap {
		opacity: 0; transform: translateY(24px);
		transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
	}
	.matrix-wrap.in-view { opacity: 1; transform: none; }

	.feature-row {
		opacity: 0; transform: translateX(-8px);
		transition: opacity 0.4s ease, transform 0.4s ease;
	}
	.feature-row.in-view { opacity: 1; transform: none; }

	.note {
		opacity: 0;
		transition: opacity 0.6s ease 0.6s;
	}
	.note.in-view { opacity: 1; }
</style>
