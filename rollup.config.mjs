import terser from '@rollup/plugin-terser'
import sizeCheck from 'rollup-plugin-filesize-check'
import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync('./package.json').toString())

const name = 'out-of-character'
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
      terser(),
      sizeCheck({
        expect: 7, // sizes in kb
        warn: 2, // acceptable change (+/-)
        throw: 5, // unacceptable change (+/-)
      })
    ],
  },
]
