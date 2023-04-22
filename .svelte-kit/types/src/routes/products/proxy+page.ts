// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ data, fetch, depends }: Parameters<PageLoad>[0]) => {
	fetch('https://dummyjson.com/products');
	fetch('https://dummyjson.com/users');
	depends('app:products');
	//    throw new Error('unexpectedadad')
	return {
		products: data.products,
		title: 'Products List'
	};
};
