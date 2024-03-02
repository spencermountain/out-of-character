import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
const name = 'out-of-character'

import pkg from './package.json' assert { type: 'json' };

const banner = `/* ${name} ${pkg.version} MIT */`

const babelConfig = {
  babelHelpers: 'bundled',
  babelrc: false,
  presets: ['@babel/preset-env'],
}

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
      babel(babelConfig),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.js`,
        format: 'umd',
        sourcemap: true,
        name: 'outOfCharacter',
        banner: banner,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel(babelConfig),
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
      babel(babelConfig),
      terser(),
    ],
  },
]
