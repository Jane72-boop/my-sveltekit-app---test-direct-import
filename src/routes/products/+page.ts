import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, fetch, depends }) => {
	fetch('https://dummyjson.com/products');
	fetch('https://dummyjson.com/users');
	depends('app:products');
	//    throw new Error('unexpectedadad')
	return {
		products: data.products,
		title: 'Products List'
	};
};
