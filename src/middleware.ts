import { defineMiddleware, sequence } from "astro/middleware";
import APIError from "./server/model/APIError";
import { responses } from "./server/api";

const errorHandler = defineMiddleware(async (_, next) => {
  try {
    const response = await next();
    return response;
  } catch (error) {
    if (error instanceof APIError) return error.toResponse();

    console.error(error);
    return responses.internalServerError();
  }
});

export const onRequest = sequence(errorHandler);
