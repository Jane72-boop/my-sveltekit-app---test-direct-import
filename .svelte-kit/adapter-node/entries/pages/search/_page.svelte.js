import { c as create_ssr_component, b as subscribe, e as escape } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h2>Search Result for: ${escape($page.url.searchParams.get("q"))}</h2>`;
});
export {
  Page$ as default
};
