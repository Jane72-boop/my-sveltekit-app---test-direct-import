import { c as create_ssr_component, f as each, e as escape } from "../../chunks/index2.js";
const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  return `<h1>Home</h1>

${data.length > 0 ? `<ul>${each(data, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>` : ``}

<button>Products
</button>`;
});
export {
  Page$ as default
};
