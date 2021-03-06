import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
// import collectSass from 'rollup-plugin-collect-sass'
import sass from 'rollup-plugin-sass';
import pkg from './package.json'

export default {
  input: 'src/lib/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      include: ["src/*.ts+(|x)", "src/**/*.ts+(|x)"],
      exclude: ["src/example/**/*", "*.d.ts", "**/*.d.ts"],
      tsconfigOverride: {
        compilerOptions: { rootDir: './src/lib' },
        exclude: ['node_modules', 'src/example']
      },
    }),
    // collectSass({
    //   extract: true,
    // }),
    sass({
      insert: true,
    }),
    terser(),
  ],
}