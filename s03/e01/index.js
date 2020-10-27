// s03e01 - Creating Your Own Prototypical Inheritance

function Shape() {}

Shape.prototype.duplication = function () {
	console.log("duplicate");
};

function Circle(radius) {
	this.radius = radius;
}

// Object.create() creates an object with a given prototype (and properties, optionally).
Circle.prototype = Object.create(Shape.prototype); // before this line, our Circle base (constructor) was defined like this:
// Circle.prototype = Object.create(Object.prototype); // where Object.prototype is objectBase, the root protoype of all objects.

// There is a tiny problem with this implementation which we will discuss right in the next lecture.

Circle.prototype.draw = function () {
	console.log("draw");
};

const s = new Shape();
const c = new Circle(1); // is equal to new Circle.prototype.constructor(1)
console.log("shape s :", s);
console.log("circle c :", c);
