import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Error$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>+error.svelte routes folder</h1>
<h2>${escape($page.status)}: ${escape($page.error?.message)}</h2>
<h3>Code: ${escape($page.error?.code)}</h3>`;
});
export {
  Error$ as default
};
