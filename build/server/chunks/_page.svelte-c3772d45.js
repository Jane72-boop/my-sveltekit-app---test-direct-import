import { c as create_ssr_component, f as each, e as escape } from './index2-f58250d6.js';

const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  return `<h1>Home</h1>

${data.length > 0 ? `<ul>${each(data, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>` : ``}

<button>Products
</button>`;
});

export { Page$ as default };
//# sourceMappingURL=_page.svelte-c3772d45.js.map
