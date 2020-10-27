// Getters and Setters
// Sidenote: As in every lesson that has been so far, a lot of things have radically changed since ES6
// declaration of a class and it's properties can now take the advantage of

function Circle(radius) {
	console.log("New circle has been created.");

	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	// Option A) Use wrapping function to get private property
	this.getDefaultLocation = () => {
		return defaultLocation;
	};

	this.draw = () => {
		console.log("Drawing...");
	};
	// Option B) Object.defineProperty() (or .defineProperties), where:
	// - First argument is the object we are referencing to,
	// in this case it's the circle object, since we are inside it, we can use `this` to reference it.
	// - Second argument is the name of the property
	// - Third argument is an object, in this object we add a keyvalue pair, the `key` is get,
	// which is a special keyword for javascript and the value is a function. Use: `get: function() {}`

	Object.defineProperty(this, "defaultLocation", {
		// We use `get`, so we can expose some property,
		// while not making it only accessible to "read".
		// Get and Set are functions. Get should return the property (value). Set should set the value.
		get: function() {
			return defaultLocation;
		},
		// In order to let instances of this class change the value of this property, we use `set`,
		// we can also add some related logic into the setter (or getter) function, like a validation.
		set: function(value) {
			// Here we can validate defaultLocation's incoming object (`value` from parameter).
			// We use falsy, to see if any of the incoming object's properties (value) are boolean false.
			// Falsy is further described here: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
			if (!value.x || !value.y) {
				throw new Error("Invalid location.");
			}
			defaultLocation = value;
		}
	});
}

const circle = new Circle(10);
circle.defaultLocation = 1; // will throw an "Invalid location."" error as expected
circle.draw();
