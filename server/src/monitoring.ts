import { addRouter, json } from "~/handler";

addRouter("GET", "/ping", (_, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(json({ message: "pong" }));
});
