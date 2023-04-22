import { c as create_ssr_component, b as subscribe, e as escape } from './index2-f58250d6.js';
import { p as page } from './stores-427aca63.js';

const Error$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>+error.svelte id folder</h1>
<h2>${escape($page.status)}: ${escape($page.error?.message)}</h2>
<h3>Code: ${escape($page.error?.code)}</h3>`;
});

export { Error$ as default };
//# sourceMappingURL=_error.svelte-8cf0970d.js.map
