import { e as error } from './index-39e97e00.js';

const load$1 = async ({ data, fetch, depends }) => {
  fetch("https://dummyjson.com/products");
  fetch("https://dummyjson.com/users");
  depends("app:products");
  return {
    products: data.products,
    title: "Products List"
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async ({ fetch, depends, locals }) => {
  console.log("/products load function", locals);
  const response = await fetch("/api/products");
  depends("app:productServerLoad");
  if (response.ok) {
    return {
      products: response.json()
    };
  }
  const errorJSON = await response.json();
  throw error(response.status, errorJSON.message);
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-86a1dd4d.js')).default;
const file = '_app/immutable/entry/products-page.svelte.ffc066e7.js';
const universal_id = "src/routes/products/+page.ts";
const server_id = "src/routes/products/+page.server.ts";
const imports = ["_app/immutable/entry/products-page.svelte.ffc066e7.js","_app/immutable/chunks/index.c9973389.js","_app/immutable/chunks/navigation.91f9df7c.js","_app/immutable/chunks/singletons.246d78da.js","_app/immutable/entry/products-page.ts.bf9b5068.js","_app/immutable/chunks/_page.f7f7c20d.js"];
const stylesheets = ["_app/immutable/assets/_page.53181b91.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-f01fcd08.js.map
