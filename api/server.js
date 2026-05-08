import { createStartHandler } from "@tanstack/react-start/server";
import { getRouter } from "../src/router";

const handler = createStartHandler({
  createRouter: getRouter,
});

export default async function (req, res) {
  return await handler(req, res);
}
