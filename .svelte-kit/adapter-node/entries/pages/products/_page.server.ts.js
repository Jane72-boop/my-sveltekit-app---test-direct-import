import { e as error } from "../../../chunks/index.js";
const load = async ({ fetch, depends, locals }) => {
  console.log("/products load function", locals);
  const response = await fetch("/api/products");
  depends("app:productServerLoad");
  if (response.ok) {
    return {
      products: response.json()
    };
  }
  const errorJSON = await response.json();
  throw error(response.status, errorJSON.message);
};
export {
  load
};
