// @ts-nocheck
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies, url, locals }: import('./$types').RequestEvent) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		await new Promise((resolve) => setTimeout(resolve, 1000));

		// throw new Error('Error');

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

		cookies.set('token', 'token_value', {
			path: '/'
		});

		locals.user = { name: 'John', id: 1 };

		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},
	logout: ({ cookies, url, locals }: import('./$types').RequestEvent) => {
		cookies.delete('token', { path: '/' });
		locals.user = undefined;
		throw redirect(302, url.searchParams.get('redirectTo') || '/');
	}
};
;null as any as Actions;