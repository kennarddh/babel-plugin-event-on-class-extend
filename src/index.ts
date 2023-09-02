import babelCore, { PluginObj } from '@babel/core'

type Babel = typeof babelCore

const BabelPluginEventOnChassExtend = (babel: Babel): PluginObj => {
	return {
		visitor: {
			ClassDeclaration(path) {
				if (path.isClassDeclaration()) {
					if (
						path.node.superClass !== null &&
						path.node.superClass.type === 'Identifier'
					) {
						const className = path.node.id.name
						const superClass = path.node.superClass.name

						path.insertAfter(
							babel.types.expressionStatement(
								babel.types.optionalCallExpression(
									babel.types.optionalMemberExpression(
										babel.types.identifier(superClass),
										babel.types.identifier('onExtend'),
										false,
										true
									),
									[babel.types.identifier(className)],
									false
								)
							)
						)
					}
				}
			},
		},
	}
}

export default BabelPluginEventOnChassExtend
