import { API_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, locals }) => {
	// const products = await (await import("$lib/dummy-products.json")).default
	const response = await fetch(`${API_URL}/products?limit=6`);

	if (response.ok) {
		const resJSON = await response.json();

		return json(resJSON, {
			status: 200
		});
	}
	throw error(response.status, response.statusText);

	// throw error(401, 'NOT AUTHORIZED')

	// return new Response(JSON.stringify(products), {
	//     status: 200,
	// })

	// return new Response(JSON.stringify({error: 'NOT AUTHORIZED'}), {
	//     status: 401,
	// })
};

// export const POST: RequestHandler = async ({ request }) => {
// 	const product = await request.json();

// 	if (!product.title) {
// 		throw error(400, 'Product title is required');
// 	}

// 	return json({ id: 1313, title: product.title });
// };
