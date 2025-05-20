import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  format: ["esm", "cjs"],
  dts: false,
  splitting: false,
  clean: true,
  sourcemap: true,
  outDir: "dist",
  watch: true,
});
