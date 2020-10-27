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
circle.draw();
