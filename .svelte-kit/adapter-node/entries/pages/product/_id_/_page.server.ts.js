import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const products = await (await import("../../../../chunks/dummy-products.js")).default;
  const product = products.products.find((p) => p.id === +params.id);
  if (!product) {
    throw error(404, {
      message: "Product not found",
      code: "NOT_FOUND"
    });
  }
  return {
    product,
    title: product.title,
    description: product.description
  };
};
export {
  load
};
