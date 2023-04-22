import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/index2.js";
import "devalue";
import { p as page } from "../../../chunks/stores.js";
const Page$ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    console.log($page.form, $page.status);
  }
  $$unsubscribe_page();
  return `${``}

<form method="POST" action="?/login"><label for="username">Username</label> <br>
	<input id="username" name="username" placeholder="username" type="text"${add_attribute("value", form?.username || "", 0)}>
	<br>
	${form?.usernameMissing ? `<p style="color: red; margin-bottom: 0;">Username is required</p>` : ``}
	<br><br>
	<label for="password">Password</label> <br>
	<input id="password" name="password" placeholder="password" type="password"> <br><br>
	<br>
	${form?.passwordMissing ? `<p style="color: red; margin-bottom: 0;">Password is required</p>` : ``}

	<button type="submit" ${""}>Login</button></form>`;
});
export {
  Page$ as default
};
