import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
const name = 'out-of-character'

import pkg from './package.json' with { type: 'json' };

const banner = `/* ${name} ${pkg.version} MIT */`

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.mjs`,
        format: 'esm',
        banner: banner,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        // the package is "type": "module", so the commonjs build needs a .cjs extension
        file: `builds/${name}.cjs`,
        format: 'cjs',
        exports: 'named',
        banner: banner,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.js`,
        format: 'umd',
        sourcemap: false,
        name: 'outOfCharacter',
        banner: banner,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.min.js`,
        format: 'umd',
        name: 'outOfCharacter',
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      terser(),
    ],
  },
]
