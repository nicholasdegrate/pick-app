import { createServer } from "http";
import { createRequestHandler } from "~/handler";
import "~/monitoring";

const PORT = 3000;

function main() {
  const server = createServer(createRequestHandler);

  server.listen(PORT, () => {
    const addr = server.address();
    if (addr && typeof addr === "object" && addr.address !== "::") {
      console.log(`Server running at http://${addr.address}:${addr.port}`);
      return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
  });
}

if (require.main === module) {
  main();
}
