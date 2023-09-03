# Babel Plugin For Event On Class Extend

[Demo](https://github.com/kennarddh/test-babel-plugin-event-on-class-extend)

## Usage

```ts
class X {
	static onExtend(targetClass: X) {
		console.log(`Class X is extended by ${targetClass.toString()}`)
	}
}

class Y extends X {
	toString() {
		return 'Y'
	}
}

// X?.onExtend(Y) will be called here
```
