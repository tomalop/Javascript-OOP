function Circle(radius) {
	console.log("this", this);
	this.radius = radius;
	this.draw = () => {
		console.log("draw");
	};
}

const Circle1 = new Function(
	"radius",
	`
console.log("this", this);
this.radius = radius;
this.draw = () => {
	console.log("draw");
};
`
);
const circle = new Circle1(1);

Circle.call({}, 1); // Calls a function. First argument specifies target of `this`.
Circle.apply(); // Works similarly to Object.Call() function, but instead of passing all the arguments explicitely, you pass them in array.
// Useful if you already have an array elsewhere and you want to pass the array as the second argument to the applying method.

const anotherCircle = new Circle(1);

// Remember, functions ARE objects.
