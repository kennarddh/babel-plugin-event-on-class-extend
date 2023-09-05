import babel from '@babel/core'
import BabelPluginEventOnClassExtend from '../dist/index.mjs'

const code = `
class X {
	static name = '"I\\'m X"'

	public instanceMethod() {}

	// new (...args: any[]) => X Prevent calling instance method
	static onExtend(targetClass: new (...args: any[]) => X) {
		console.log(\`Class X is extended by \${targetClass.name}\`)
		// targetClass.instanceMethod() This will throw error
	}
}

class Y extends X {
	static name = '"I\\'m Y"'
}
`

const output = babel.transformSync(code, {
	filename: 'file.ts',
	plugins: [
		[
			BabelPluginEventOnClassExtend,
			{ staticCallbackName: 'staticCallbackName' },
		],
	],
	presets: ['@babel/preset-typescript'],
})

console.log(output?.code)
