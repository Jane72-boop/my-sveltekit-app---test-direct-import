import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	//get user from token
	// throw error(401, 'not authorized')
	const user = locals.user;
	return {
		user
	};
};
