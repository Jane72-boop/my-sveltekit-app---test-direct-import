import { e as error, j as json } from './index-39e97e00.js';

const POST = async ({ request, cookies }) => {
  const data = await request.json();
  if (!data.username) {
    throw error(400, "Username is required!");
  }
  if (!data.password) {
    throw error(400, "Password is required!");
  }
  cookies.set("token", "token_value", {
    path: "/"
  });
  return json({ name: data.username, id: 1 });
};

export { POST };
//# sourceMappingURL=_server.ts-64b65504.js.map
