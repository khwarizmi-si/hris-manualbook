import { writable } from 'svelte/store';

export type Lang = 'id' | 'en';

export const lang = writable<Lang>('id');
