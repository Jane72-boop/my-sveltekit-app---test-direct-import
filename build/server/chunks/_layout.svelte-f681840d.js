import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from './index2-f58250d6.js';
import './utils-ae3035df.js';
import { p as page } from './stores-427aca63.js';

const Layout$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hjik0q_START -->${$$result.title = `<title>Website Name${escape($page.data.title ? ` - ${$page.data.title}` : "")}</title>`, ""}${$page.data.description ? `<meta name="description"${add_attribute("content", $page.data.description, 0)}>` : ``}<!-- HEAD_svelte-1hjik0q_END -->`, ""}

${data.user ? `<p>Logged in as ${escape(data.user.name)}</p>` : ``}
<nav data-sveltekit-preload-data="hover"><a href="/">Home</a>
	<a href="/products">Products</a>
	${!data.user ? `<a href="/login" data-sveltekit-preload-data="off">Login</a>` : ``}</nav>

${data.user ? `<form method="POST" action="${"/login?/logout&redirectTo=" + escape($page.url.pathname, true)}"><button type="submit">Logout</button></form>` : ``}

<form method="GET" action="/search"><input name="q"></form>

${slots.default ? slots.default({}) : ``}

${!data.user && $page.url.pathname !== "/login" ? `${``}
	<form method="POST" action="${"/login?/login&redirectTo=" + escape($page.url.pathname, true)}"><label for="username">Username</label> <br>
		<input id="username" name="username" placeholder="username" type="text"${add_attribute("value", "", 0)}>
		<br>
		${``}
		<br><br>

		<label for="password">Password</label> <br>
		<input id="password" name="password" placeholder="password" type="password"> <br><br>
		<br>
		${``}
		<br><br>

		<button type="submit" ${""}>Login</button></form>` : ``}
`;
});

export { Layout$ as default };
//# sourceMappingURL=_layout.svelte-f681840d.js.map
