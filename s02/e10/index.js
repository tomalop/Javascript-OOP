// s02e10 - Exercise - Refactoring the StopWatch

// Task: Move Stopwatch Object Constructor methods to the prototype of the Stopwatch.
// Also notice that, when you put the methods on the prototype, you will not be able to acces variables
// that are lmited to the scope of a (Object Constructor) function (those defined just as const and ).

// Sidenote: You should put methods on the prototype as a optimization technique, if you expect large number of those objects.
// HOWEVER, by doing so, you lose access to local members of the class we are moving those members from.
// Then your only option is to create public properties (with getters and setters), however then you are ruining your abstraction
// principle and it may lead to issues with object's state.
// The other lesson from this is that "Premature optimization is the root of all evils", this is the example of it.
// Optimization is a good idea, but as long as it doesn't violate the core priciples like KIS, SOLID, abstraction...

// So, if you are working with a large number of objects for the same type, you do not want to have multiple copies of
// these methods in memory. In case of a Stopwatch, we do not really have that requirement.
// If we are going to use the stopwatch in a program, we are going to need only one instance (in most common cases).

function Stopwatch() {
	console.log("Stopwatch instance has been created.", this);

	let startDate, endDate, duration;
	let isRunning = false;

	Object.defineProperties(this, {
		startDate: {
			get: function () {
				return startDate;
			},
			set: function (value) {
				startDate = value;
			},
		},
		endDate: {
			get: function () {
				return endDate;
			},
			set: function (value) {
				endDate = value;
			},
		},
		isRunning: {
			get: function () {
				return isRunning;
			},
			set: function (value) {
				isRunning = value;
			},
		},
		duration: {
			get: function () {
				if (!startDate) {
					return 0;
				}
				if (!isRunning) {
					return endDate - startDate;
				}
				return Date.now() - startDate;
			},
		},
	});

	// this.Start = () => {
	// 	if (isRunning) {
	// 		throw Error("Stopwatch is running already.");
	// 	}
	// 	console.log("Stopwatch has been started.");
	// 	isRunning = true;
	// 	startDate = Date.now();
	// };

	// this.Stop = () => {
	// 	if (isRunning === false) {
	// 		throw Error("Stopwatch is not running yet.");
	// 	}
	// 	console.log("Stopwatch has been stopped.");
	// 	isRunning = false;
	// 	endDate = Date.now();
	// };

	// this.Reset = () => {
	// 	startDate = null;
	// 	endDate = null;
	// 	isRunning = false;
	// 	console.log("Stopwatch has been reset.");
	// };
}

Stopwatch.prototype.Start = function () {
	if (this.isRunning) {
		throw Error("Stopwatch is running already.");
	}
	console.log("Stopwatch has been started.");
	this.isRunning = true;
	this.startDate = Date.now();
};

Stopwatch.prototype.Stop = function () {
	if (this.isRunning === false) {
		throw Error("Stopwatch is not running yet.");
	}
	console.log("Stopwatch has been stopped.");
	this.isRunning = false;
	this.endDate = Date.now();
};

Stopwatch.prototype.Reset = function () {
	this.startDate = null;
	this.endDate = null;
	this.isRunning = false;
	console.log("Stopwatch has been reset.");
};

/* Try it yourself in browser Console:
const sw = new Stopwatch();
sw.Start();
sw.Stop();
sw.duration;
console.log(`Total duration: ${sw.duration / 1000}s`); // Date is in milliseconds
*/
