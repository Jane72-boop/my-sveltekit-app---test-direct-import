const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0253ce61.js","imports":["_app/immutable/entry/start.0253ce61.js","_app/immutable/chunks/index.c9973389.js","_app/immutable/chunks/singletons.246d78da.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d6c6da17.js","imports":["_app/immutable/entry/app.d6c6da17.js","_app/immutable/chunks/index.c9973389.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-4a4adb1a.js'),
			() => import('./chunks/1-e7d222ee.js'),
			() => import('./chunks/2-1a06522a.js'),
			() => import('./chunks/3-beb9ea10.js'),
			() => import('./chunks/4-a5b8e1dc.js'),
			() => import('./chunks/5-5f3f6dff.js'),
			() => import('./chunks/6-f01fcd08.js'),
			() => import('./chunks/7-7e155686.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-64b65504.js')
			},
			{
				id: "/api/logout",
				pattern: /^\/api\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-ee48d018.js')
			},
			{
				id: "/api/products",
				pattern: /^\/api\/products\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-6acfec1e.js')
			},
			{
				id: "/api/random-number",
				pattern: /^\/api\/random-number\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-eeace7bc.js')
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/product/[id]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2], leaf: 5 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
