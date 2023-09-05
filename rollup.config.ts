import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import typescriptModule from 'typescript'
import del from 'rollup-plugin-delete'

const RollupConfig: RollupOptions = {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.js',
		format: 'esm',
	},
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
