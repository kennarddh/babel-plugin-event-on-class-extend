import babel from '@babel/core'
import babelPluginEventOnClassExtend from '../dist/index.js'

const code = 'const n = 1'

const output = babel.transformSync(code, {
	plugins: [babelPluginEventOnClassExtend],
})

console.log(output?.code)
