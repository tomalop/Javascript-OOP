// s03e06 - Polymorphism

// Tasks:
// 1. Test polymorphic behavior.

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape() {}
// 1. We copy the method name, ->
Shape.prototype.duplicate = function () {
	console.log("Shape this :", this);
	console.log("Base duplicate ");
};

function Circle() {}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
	// calls base method function using `.call()` to set the referencing object to `this`
	// (here `this` referes to Circle and we pass that reference to Shape in `call()`, so in Shape `this` would be Circle).
	Shape.prototype.duplicate.call(this);
	console.log("Circle duplicate");
};

Circle.prototype.draw = function () {
	console.log("draw");
};

function Square() {}
extend(Square, Shape);
Square.prototype.duplicate = function () {
	Shape.prototype.duplicate.call(this);
	console.log("Square duplicate");
};

const shapes = [new Circle(), new Square()];
// 1. this:
for (const shape of shapes) {
	shape.duplicate();
}
// Why is this so powerful? Before OOP we would have to implement this logic by checking the type of each object and then,
// executing apropriate consequence/logic for given object.

// In OOP we ecapsulate our variables and functions into objects.
