import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { secret } from './secrets.server';

export const load: PageServerLoad = async ({ fetch, depends, locals }) => {
	console.log('/products load function', locals);

	const response = await fetch('/api/products');
	depends('app:productServerLoad');
	if (response.ok) {
		return {
			products: response.json()
		};
	}
	const errorJSON = await response.json();
	throw error(response.status, errorJSON.message);
};
