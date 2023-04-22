import { j as json } from "../../../../chunks/index.js";
const POST = ({ cookies }) => {
  cookies.delete("token", { path: "/" });
  return json({ success: true });
};
export {
  POST
};
