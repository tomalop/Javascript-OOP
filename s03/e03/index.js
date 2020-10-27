// s03e03 - Calling the Super Constructor

// Tasks:
// 1. Add `color` as shape parameter, so every object created by it should have this variable.

// When we specify the param and add it as a variable, objects created from the Circle base still will NOT have it as a prop.
// So how do we achieve this? ->
function Shape(color) {
	this.color = color;
}

Shape.prototype.duplication = function () {
	console.log("duplicate");
};
// -> here in the Circle constructor, we should call the Shape constructor.
// - Do not simply call `Shape(color)` because keyword `this` would not point to the object we are creating
// (using `new Shape(color)` would create unnecessary object).
// - Instead, use `.call()` on Shape base (every function in JS is an object), parameters:
// 1. An object to be used as current object, in this case simply pass `this` so it refers to the instance of the circle object.
// 2. We pass our arguments, in this case the `color`, which we have declared as a parameter of Circle, since we need it for parent.
function Circle(radius, color) {
	Shape.call(this, color); // Calling the Super/Parent Constructor - part of the Inheritance Chaining
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
	console.log("draw");
};
// Reminder: when we use the `new` operator, three things happen:
// 1) creates a new object.
// 2) Sets `this` keyword to point to that newly created object.
// 3) Returns the new object from specified constructor.
// If you do not use the `new` operator, `this` by default will point to the global object, which is window in the browser
// and global in node.
const s = new Shape();
const c = new Circle(1);
console.log("circle c :", c);
console.log("shape s :", s);
