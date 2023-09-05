import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import typescriptModule from 'typescript'
import del from 'rollup-plugin-delete'
import packageJSON from './package.json' assert { type: 'json' }

const RollupConfig: RollupOptions = {
	input: 'src/index.ts',
	output: [
		{
			file: packageJSON.exports['.'].import,
			format: 'esm',
		},
		{
			file: packageJSON.exports['.'].require,
			format: 'cjs',
		},
	],
	plugins: [
		del({ targets: 'dist/*' }),
		typescript({
			typescript: typescriptModule,
			outDir: 'dist',
			declarationDir: 'dist',
			declaration: true,
			sourceMap: true,
			exclude: ['rollup.config.ts'],
		}),
	],
}

export default RollupConfig
