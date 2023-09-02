import babel from '@babel/core'
import babelPluginEventOnClassExtend from '../dist/index.js'

const code = `
class X {
	static onExtend(targetClass: X) {
		console.log(\`Class X is extended by \${targetClass.toString()}\`)
	}
}

class Y extends X {
	toString() {
		return 'Y'
	}
}
`

const output = babel.transformSync(code, {
	filename: 'file.ts',
	plugins: [babelPluginEventOnClassExtend],
	presets: ['@babel/preset-typescript'],
})

console.log(output?.code)
