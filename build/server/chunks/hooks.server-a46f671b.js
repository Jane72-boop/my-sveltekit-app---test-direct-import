function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          return i < length - 1 ? apply_handle(i + 1, event3, { transformPageChunk }) : resolve(event3, { transformPageChunk });
        }
      });
    }
  };
}
const handle1 = async ({ event, resolve }) => {
  const { locals, cookies, url } = event;
  if (!url.pathname.startsWith("/api")) {
    const token = cookies.get("token");
    locals.user = token ? { name: "John", id: 1 } : void 0;
  }
  const response = await resolve(event);
  return response;
};
const handle = sequence(handle1);
const handleFetch = ({ request, event, fetch }) => {
  if (request.url.startsWith("https://dummyjson.com/")) {
    const cookie = event.request.headers.get("cookie");
    if (cookie) {
      request.headers.set("cookie", cookie);
    }
  }
  return fetch(request);
};
const handleError = ({ error, event }) => {
  console.log("from handle error hook");
  console.log(error, event);
  return {
    message: "An unexpected error occurred",
    code: "UNEXPECTED"
  };
};

export { handle, handle1, handleError, handleFetch };
//# sourceMappingURL=hooks.server-a46f671b.js.map
