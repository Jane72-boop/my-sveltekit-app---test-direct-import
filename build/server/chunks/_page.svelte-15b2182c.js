import { c as create_ssr_component, d as add_attribute, e as escape } from './index2-f58250d6.js';

const css = {
  code: "img.svelte-1og64i1{width:100%}",
  map: null
};
const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let product;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  product = data.product;
  return `

<img${add_attribute("src", product?.thumbnail, 0)}${add_attribute("alt", product?.title, 0)} srcset="" class="svelte-1og64i1">
<h1>${escape(product?.title)}</h1>

<p>${escape(product?.description)}</p>`;
});

export { Page$ as default };
//# sourceMappingURL=_page.svelte-15b2182c.js.map
