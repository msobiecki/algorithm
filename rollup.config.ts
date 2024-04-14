import type { RollupOptions } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

import package_ from "./package.json";

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    output: [
      { file: package_.main, format: "cjs" },
      { file: package_.module, format: "es" },
      {
        name: "algorithm",
        file: package_.browser,
        format: "umd",
      },
    ],
    plugins: [esbuild()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/algorithm.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
export default config;
