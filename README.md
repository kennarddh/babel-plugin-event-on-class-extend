# Babel Plugin For Event On Class Extend

## Usage

```ts
class X implements IOnExtendEvent {
	static onExtend(targetClass: X) {
		console.log(`Class X is extended by ${targetClass.toString()}`)
	}
}

class Y extends X {
	toString() {
		return "Y"
	}
}

// X?.onExtend(Y) will be called here
```
