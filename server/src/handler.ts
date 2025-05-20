import { IncomingMessage, ServerResponse } from "http";

type Handler = (
  req: IncomingMessage,
  res: ServerResponse
) => void | Promise<void>;

const routes: Record<string, Handler> = {};

type Methods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";

export function createRequestHandler(req: IncomingMessage, res: ServerResponse) {
  const { method = "", url = "" } = req;

  if (!method || !url) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid request");
    return;
  }

  const key = `${method.toUpperCase()} ${url}`;
  if (!routes[key]) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }

  return getHandler(method, url)?.(req, res);
}

export function addRouter(method: Methods, path: string, handler: Handler) {
  const key = formatRoutesKey(method, path);
  routes[key] = handler;
}

export function getHandler(method: string, url: string): Handler | undefined {
  const key = formatRoutesKey(method, url);
  return routes[key];
}

function formatRoutesKey(method: string, url: string) {
  return `${method.toUpperCase()} ${url}`;
}

class UnexpectedJsonSenderError extends Error {
  static message = "Failed to stringify json data";
  constructor() {
    super();
    this.name = "UnexpectedJsonSenderError";
  }
}

export function json(data: unknown) {
  return JSON.stringify(data);
}
