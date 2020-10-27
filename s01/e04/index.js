// Example Factory Function

// ES6 function declaration alternative using arrow functions,
// as opposted to traditional `function foo() {};`
const createCircle = radius => {
	return {
		radius,
		draw() {
			console.log("draw");
		}
	};
};

const circle = createCircle(1);

// Example Constructor Function (another way to create an object)

// Naming convetion for Constructors in JS is different, first letter should be uppercase
// With ES6 constructors in class (only) can be declared like this: `constructor(params) {}`
function Circle(radius) {
	console.log("this", this);
	this.radius = radius;
	this.draw = () => {
		console.log("draw");
	};
	// return this; happens automatically in constructors
}

const anotherCircle = new Circle(1);
