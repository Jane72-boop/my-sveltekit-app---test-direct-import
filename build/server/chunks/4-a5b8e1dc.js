import { r as redirect, f as fail } from './index-39e97e00.js';

const load = async ({ parent }) => {
  const { user } = await parent();
  if (user)
    throw redirect(307, "/");
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const actions = {
  login: async ({ request, cookies, url, locals }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    if (!username) {
      return fail(400, {
        usernameMissing: true
      });
    }
    if (!password) {
      return fail(400, {
        passwordMissing: true,
        username
      });
    }
    cookies.set("token", "token_value", {
      path: "/"
    });
    locals.user = { name: "John", id: 1 };
    throw redirect(303, url.searchParams.get("redirectTo") || "/");
  },
  logout: ({ cookies, url, locals }) => {
    cookies.delete("token", { path: "/" });
    locals.user = void 0;
    throw redirect(302, url.searchParams.get("redirectTo") || "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
const component = async () => (await import('./_page.svelte-8bac9e8d.js')).default;
const file = '_app/immutable/entry/login-page.svelte.4b3a63ad.js';
const universal_id = "src/routes/login/+page.ts";
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/entry/login-page.svelte.4b3a63ad.js","_app/immutable/chunks/index.c9973389.js","_app/immutable/chunks/forms.794d1d53.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.246d78da.js","_app/immutable/chunks/navigation.91f9df7c.js","_app/immutable/chunks/stores.69002488.js","_app/immutable/entry/login-page.ts.c5048e02.js","_app/immutable/chunks/_page.1ae1c675.js","_app/immutable/chunks/control.e7f5239e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-a5b8e1dc.js.map
