# Babel Plugin For Event On Class Extend

[Demo](https://github.com/kennarddh/test-babel-plugin-event-on-class-extend)

[Run Example To See Compiled Output](./example/index.ts)

## Install

```bash
npm i -D babel-plugin-event-on-class-extend
```

Add this plugin to your babel config or add it from the cli

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

	// I don't know the type for class but not the instance
	static onExtend(targetClass: any) {
		console.log(`Class X is extended by ${targetClass.name}`)
	}
}

class Y extends X {
	static name = '"I\'m Y"'
}

// X?.onExtend(Y) will be called here
```

This will output `Class X is extended by "I'm Y"` when ran.
