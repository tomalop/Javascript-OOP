// Private Properties and methods

// To access private members, simply call them by their name (e.g. defaultLocation).
// To acess the properties (public members) of the `new Circle` (inside it), use `this` (e.g. this.radius).

function Circle(radius) {
	console.log("New circle has been created.");

	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	let computeOptimumLocation = factor => {
		console.log("Computing Optimum Location...");
	};

	this.draw = () => {
		console.log("Drawing...");
		computeOptimumLocation(0.1);
		// defaultLOcation
		// this.radius
	};
}

const circle = new Circle(10);
circle.draw();
