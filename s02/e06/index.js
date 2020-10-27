// OOP in JavaScript - s02e06 - Prototype vs Instance Members

////////////////////////////////////////////////////////////////////////////////////////////////////
// Imporant personal note:
// When we use arrow notation to define a function, keyword `this` is undefined, to test this
// try it with Circle.prototype.toString override for example.

// Unlike if we use `function()` to define a function, keyword `this` refers to the Object
// (or rather, Object constructor's prototype?) from which the method is called (declared) from.
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// Sidenote: Some clarification about usage of keyword `this`.
// In general - `this` refers to this instance of object or
// to the object, which the method is called from.
// In detail - `this` refers to one of following things, depending on the current usage:
// TODO: Write down all the possible references of `this` keyword.
////////////////////////////////////////////////////////////////////////////////////////////////////

// Essentially, we have two kinds of properties and methods in JavaScript.
// - Instance members
// - Prototype members

function Circle(radius) {
	// Instance member
	this.radius = radius;

	this.move = function() {
		console.log("move");
	};
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log("c1 :", c1);
console.log("c2 :", c2);

console.log(
	"Circle.prototype === Object.getPrototypeOf(c1)",
	Circle.prototype === Object.getPrototypeOf(c1)
);

// Using `Ojbect.getProtoypeOf(c1)` we can simply access the object's (c1) prototype from which it has been created.
// And sice JS is a dynamic langugage, we can add some properties to it at the runtime.
// for example add draw method here:

// Prototype member
Circle.prototype.draw = function() {
	this.move();
	console.log("draw");
};

console.log("c1 :", c1);
console.log(
	"Circle.prototype === Object.getPrototypeOf(c1)",
	Circle.prototype === Object.getPrototypeOf(c1)
);
console.log(
	"Circle.prototype === c1.__proto__",
	Circle.prototype === c1.__proto__
);

// Notice what properties does the base Object.prototype have:
console.log("Object.prototype :", Object.prototype);

// We can override implementations of methods
// In this example, we are going to override the implmentation of
// `Object.toString()` method from it's prototype.

// Before -
console.log(
	"Before overriding Object.toString method: c1.toString():\n",
	c1.toString()
);
// After -
// Prototype method:
Circle.prototype.toString = function() {
	// To access the radius property from Circle.protoype, we use `this` keyword to reference to the
	// object that is calling the `.toString()` extension.
	return "Circle with radius " + this.radius;
};

console.log(
	"After overriding Object.toString method: c1.toString():\n",
	c1.toString()
);

// In both these kinds of members, you can reference other members.
