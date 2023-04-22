import { j as json, e as error } from './index-39e97e00.js';

const API_URL = "https://dummyjson.com";
const GET = async ({ fetch, locals }) => {
  const response = await fetch(`${API_URL}/products?limit=6`);
  if (response.ok) {
    const resJSON = await response.json();
    return json(resJSON, {
      status: 200
    });
  }
  throw error(response.status, response.statusText);
};

export { GET };
//# sourceMappingURL=_server.ts-6acfec1e.js.map
