// s03e05 - Method Overriding

// Sometimes as you work with inheritance, you may face a situation, where some method implementation that you have defined
// in parent object may not work or be ideal in a child object.
// In this lecture, we are going to assume that default `Shape.duplicate();` method implementation works for the most,
// but maybe it should behave differently for some objects (differently for circle objects in this example).
// This is when we use Method Overriding. -> We override a method that is defined in the base object by using the same name,
// but using a different implementation.

// Sidenote: Note that from what it seems, we do not need to override the method by using its exact signature (name and params),
// but just by using its name.
// TODO: Confirm this sidenote theory about method overriding by signature/name.

// Tasks:
// 1. Override the `Shape.duplicate();` method.
// 2. Call the implementation on the parent object aswell, which should result in executing the base method and then the latter.

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape() {}
// 1. We copy the method name, ->
Shape.prototype.duplicate = function (message) {
	console.log("base duplicate " + message);
};

function Circle() {}
extend(Circle, Shape);
// -> re-use it here, assign it to a different object and then create a different implementation.
// It is very important to put this after extending the circle, because at this point, we are resetting the prototype.
// If we would define this before resetting the prototype, then this implementation would to disappear.
Circle.prototype.duplicate = function (message) {
	// 2. If we are not using `this` in the base implementation, you can simply call that like a normal function.
	// If you are using `this` in the base implementation, then we need to use the `.call()` method to set the context for `this`.
	// So we call the `.call()` method, pass `this` as the context for the current object (reference to the current object) and
	// passing the arguments for parameters of base method, if there are any.
	Shape.prototype.duplicate.call(this, message);
	console.log("circle duplicate");
};
// The reason why this worked, goes back to how prototypical inheritance works in JavaScript, when we access a property or
// a method on a object, JavaScript engine goes up the prototype chain (where parent is lower) and picks the first implementation.

Circle.prototype.draw = function () {
	console.log("draw");
};

function Square() {}
extend(Square, Shape);

const c = new Circle();
console.log("circle c :", c);
