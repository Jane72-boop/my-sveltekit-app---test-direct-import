import { j as json } from './index-39e97e00.js';

const POST = ({ cookies }) => {
  cookies.delete("token", { path: "/" });
  return json({ success: true });
};

export { POST };
//# sourceMappingURL=_server.ts-ee48d018.js.map
