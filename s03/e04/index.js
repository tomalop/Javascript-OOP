// s03e04 - Intermediate Function Inheritance

// Tasks:
// 1. Create Square obj that inherits from Shape.
// 2. Refactor prototype chain setup.

function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function () {
	console.log("duplicate");
};
// After refactoring:
// note that these first letters are uppercase, because we are expecting these to be constructor functions.

// we call this Intermediate Function Inheritance
function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius, color) {
	Shape.call(this, color);
	this.radius = radius;
}
extend(Circle, Shape);

// these two lines for setting up a prototype chain are a little bit noisy, as we define multiple object, this logic get's in
// the way and chances are we might make a mistake along the way. In other words, good programmers do not repeat themselves.
// We extract these two lines into a function that we can reuse (principle of reusability).
// Before refactoring (reuse of following lines):
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
	console.log("draw");
};

function Square(size) {
	this.size = size;
}
extend(Square, Shape);

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const s = new Shape();
const c = new Circle(1);
console.log("circle c :", c);
console.log("shape s :", s);
