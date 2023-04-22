import { r as redirect } from "../../../chunks/index.js";
const load = async ({ parent }) => {
  const { user } = await parent();
  if (user)
    throw redirect(307, "/");
};
export {
  load
};
