import { e as error } from './index-39e97e00.js';

const load = async ({ params }) => {
  const products = await (await import('./dummy-products-c2f63627.js')).default;
  const product = products.products.find((p) => p.id === +params.id);
  if (!product) {
    throw error(404, {
      message: "Product not found",
      code: "NOT_FOUND"
    });
  }
  return {
    product,
    title: product.title,
    description: product.description
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-15b2182c.js')).default;
const file = '_app/immutable/entry/product-_id_-page.svelte.1a11ad8a.js';
const server_id = "src/routes/product/[id]/+page.server.ts";
const imports = ["_app/immutable/entry/product-_id_-page.svelte.1a11ad8a.js","_app/immutable/chunks/index.c9973389.js"];
const stylesheets = ["_app/immutable/assets/_page.b1baf09e.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-5f3f6dff.js.map
