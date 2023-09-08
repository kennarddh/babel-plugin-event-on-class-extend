import { declare } from '@babel/helper-plugin-utils'

export interface IOptions {
	staticCallbackName?: string
}

const BabelPluginEventOnChassExtend = declare<IOptions>(
	(babel, { staticCallbackName = 'onExtend' }) => {
		return {
			name: 'babel-plugin-event-on-class-extend',
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
											babel.types.identifier(
												staticCallbackName
											),
											false,
											false
										),
										[babel.types.identifier(className)],
										true
									)
								)
							)
						}
					}
				},
			},
		}
	}
)

export default BabelPluginEventOnChassExtend
