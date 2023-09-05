import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import packageJSON from './package.json' assert { type: 'json' }

const RollupConfig: RollupOptions = {
	input: 'src/index.ts',
	output: [
		{
			file: packageJSON.exports['.'].import,
			format: 'esm',
			sourcemap: true,
		},
		{
			file: packageJSON.exports['.'].require,
			format: 'cjs',
			sourcemap: true,
		},
	],
	plugins: [
		del({ targets: 'dist/*' }),
		typescript({
			exclude: ['rollup.config.ts'],
		}),
	],
	external: ['@babel/helper-plugin-utils'],
}

export default RollupConfig
