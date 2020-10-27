// s03e02 - Resetting the Constructor

function Shape() {}

Shape.prototype.duplication = function () {
	console.log("duplicate");
};

function Circle(radius) {
	this.radius = radius;
}

console.log("Circle.prototype.constructor:", Circle.prototype.constructor); // before
Circle.prototype = Object.create(Shape.prototype); // PART ONE of solution (however it sets the wrong constructor for Circle)
// About the tiny problem, as you can see in the following state of Circle constructor. it returns a shape object,
// instead of a circle object.
console.log("Circle.prototype.constructor:", Circle.prototype.constructor); // midway (with a problem)
// The reason we are having this problem is, because we have reset the prototype of the circle.
// Before the `Circle.prototype = Object.create(Shape.prototype);` line, the prototype of this circle had this ctor property:
// `Circle.prototype.constructor = Circle;`
// That is why, we were able to create new Circle object like this:
// `new Circle.prototype.constructor();` or `new Circle();`

// So the best practice is, "whenever you reset the prototype of an object, you should also reset the constructor". Like this:
Circle.prototype.constructor = Circle; // PART TWO of solution (solves the wrong constructor in Circle by resetting it)
console.log("Circle.prototype.constructor:", Circle.prototype.constructor); // after (with a solution applied)

Circle.prototype.draw = function () {
	console.log("draw");
};

const s = new Shape();
const c = new Circle(1);
console.log("circle c :", c);
console.log("shape s :", s);
