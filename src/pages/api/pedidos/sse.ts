import type { APIRoute } from "astro";

export const get: APIRoute = () => {
  const response = new Response("", {
    status: 200,
    headers: {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive"
    }
  });

  return response;
};
