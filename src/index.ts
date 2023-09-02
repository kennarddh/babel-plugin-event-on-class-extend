import babelCore, { PluginObj } from '@babel/core'

type Babel = typeof babelCore

const BabelPluginEventOnChassExtend = (babel: Babel): PluginObj => {
	return {
		visitor: {
			Identifier(path) {
				// in this example change all the variable `n` to `x`
				if (path.isIdentifier({ name: 'n' })) {
					path.node.name = 'x'
				}
			},
		},
	}
}

export default BabelPluginEventOnChassExtend
