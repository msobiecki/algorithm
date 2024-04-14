import type { RollupOptions } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import { dts } from 'rollup-plugin-dts';

import pkg from './package.json';

const config: RollupOptions[] = [{
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    {
      name: 'algorithm',
      file: pkg.browser,
      format: 'umd',
    }],
  plugins: [
    esbuild(),
  ],
}, {
  input: 'src/index.ts',
  output: [{ file: 'dist/algorithm.d.ts', format: 'es' }],
  plugins: [dts()],
}];
export default config;
