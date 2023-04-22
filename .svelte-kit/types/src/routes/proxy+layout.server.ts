// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = ({ locals }: Parameters<LayoutServerLoad>[0]) => {
	//get user from token
	// throw error(401, 'not authorized')
	const user = locals.user;
	return {
		user
	};
};
