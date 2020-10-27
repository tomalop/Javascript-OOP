// s04e05 - Private Members Using Symbols

// To implement abstraction we use private properties and methods (amongst other things), which hides certain members of an
// object, so they won't be accessibel from the outside.

// Two approaches to private properties with ES6:

// A) ES6 Symbols to implement (kind of) private properites and methods.
// Symbol is a primitive type (other primitives are number, string, bool).
// We call Symbol function `Symbol()` to generate a symbol, we do not use it as a constructor (no `new`).
// A symbol is essentially a unique indentifier, two symbols are never the same, every time we call the symbol function new one.
// We use this unique value as the property name for an object.

// B) Use Maps to achieve private properties.

const _radius = Symbol();
const _draw = Symbol();
class Circle {
	constructor(radius) {
		// Private property using Symbol.
		// to access a property in an object we either use the dot notation `this.radius` or brackets `this['radius']`.
		// We can use a Symbol as a property name instead of a string.
		// this.radius = radius; // this is a public property, accessible on the derived object
		this[_radius] = radius;
	}
	// Private method using Symbol.
	// ES6 Computed property name (uses brackets) `[expression]`, when expression is evaluated, the resulting value will be used
	// as the name of a name of a property or method. We pass _draw, which is a symbol, when evaluated it returns a unique value,
	// a unique ID, which will be used as a name of this method.
	[_draw]() {}
}

const c = new Circle(1);
console.log('c :', c);
console.log('Object.getOwnPropertyNames(c); :', Object.getOwnPropertyNames(c));
console.log('Object.getOwnPropertySymbols(c) :', Object.getOwnPropertySymbols(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
