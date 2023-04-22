import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from './index2-f58250d6.js';

const css = {
  code: "ul.svelte-vkvtha{padding:0;margin:0;list-style:none;display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:30px}img.svelte-vkvtha{width:100%}",
  map: null
};
const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  products = data.products.products;
  return `<h2>${escape(data.title)}</h2>
<button>Re-run load function</button>

${products && products.length > 0 ? `<ul data-sveltekit-preload-data="hover" class="svelte-vkvtha">${each(products, (product) => {
    return `<li><img${add_attribute("src", product.thumbnail, 0)}${add_attribute("alt", product.title, 0)} class="svelte-vkvtha">
				<h3><a${add_attribute("data-sveltekit-noscroll", "off", 0)} href="${"/product/" + escape(product.id, true)}">${escape(product.title)}</a></h3>
				<p>${escape(product.description)}</p>
			</li>`;
  })}</ul>` : ``}

`;
});

export { Page$ as default };
//# sourceMappingURL=_page.svelte-86a1dd4d.js.map
