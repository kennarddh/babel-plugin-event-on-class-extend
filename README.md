# Babel Plugin For Event On Class Extend

[Demo](https://github.com/kennarddh/test-babel-plugin-event-on-class-extend)

[Run Example To See Compiled Output](./example/index.ts)

[Stack Overflow Answer](https://stackoverflow.com/a/77031020/14813577)

[Changelog](./CHANGELOG.md)

[NPM Package](https://www.npmjs.com/package/babel-plugin-event-on-class-extend)

## Install

```bash
npm i -D babel-plugin-event-on-class-extend
```

Add this plugin to your babel config file or add it from the cli

### Babel Config

```json
{
	"plugins": ["babel-plugin-event-on-class-extend"]
}
```

### CLI

```
npx babel ... --plugins=babel-plugin-event-on-class-extend
```

## Usage

```ts
class X {
	static name = '"I\'m X"'

	public instanceMethod() {}

	// new (...args: any[]) => X Prevent calling instance method
	static onExtend(targetClass: new (...args: any[]) => X) {
		console.log(`Class X is extended by ${targetClass.name}`)
		// targetClass.instanceMethod() This will throw error
	}
}

class Y extends X {
	static name = '"I\'m Y"'
}

// X?.onExtend(Y) will be called here
```

This will output `Class X is extended by "I'm Y"` when ran.

## Options

### How To Use Plugin Options

Change the plugin usage to this in babel config file

```json
{
	"plugins": [
		[
			"babel-plugin-event-on-class-extend",
			{ "staticCallbackName": "onExtend" }
		]
	]
}
```

### List

| Option                      | Description                                                                  | Default  | Required |
| --------------------------- | ---------------------------------------------------------------------------- | -------- | -------- |
| staticCallbackName          | Change the default static method callback name                               | onExtend | false    |
| classOptionalChain          | Enable class optional operator. `X?.` optional chain                         | false    | false    |
| passDerivedClassAsParameter | If disable derived class will not be passed to `onExtend` as parameter false | true     | false    |
