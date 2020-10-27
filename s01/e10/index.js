// Abstraction
// The problem we are going to solve in next section is, that the default location and computeOptimumLocation
// are both implementation details. Our aim is to hide those, so noone can mess with them.
// when we use `this.member = member`, we are stating that `this.member` is a object's public property.
// However, if we use const or `let`, they only live in the scope of object and are not accessible
// from the outside (they are private members/properties).

function Circle(radius) {
	this.radius = radius;

	this.defaultLocation = { x: 0, y: 0 };

	this.computeOptimumLocation = factor => {
		// ...
	};

	this.draw = () => {
		this.computeOptimumLocation(0.1);
		console.log("draw");
	};
}

const circle = new Circle(10);
