import { j as json, e as error } from "../../../../chunks/index.js";
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
export {
  GET
};
