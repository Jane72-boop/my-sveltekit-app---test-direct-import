import * as universal from '../entries/pages/products/_page.ts.js';
import * as server from '../entries/pages/products/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/products/_page.svelte.js')).default;
export const file = '_app/immutable/entry/products-page.svelte.ffc066e7.js';
export { universal };
export const universal_id = "src/routes/products/+page.ts";
export { server };
export const server_id = "src/routes/products/+page.server.ts";
export const imports = ["_app/immutable/entry/products-page.svelte.ffc066e7.js","_app/immutable/chunks/index.c9973389.js","_app/immutable/chunks/navigation.91f9df7c.js","_app/immutable/chunks/singletons.246d78da.js","_app/immutable/entry/products-page.ts.bf9b5068.js","_app/immutable/chunks/_page.f7f7c20d.js"];
export const stylesheets = ["_app/immutable/assets/_page.53181b91.css"];
export const fonts = [];
