// s01e14: Exercise - Stopwatch

// Can be solved many different ways, the simpler one (and better in terms of OOP) may be using
// duration as a simple value, rather than a property with so many variations (conditions).
// See stopwatchSolution.zip for more answers.

function Stopwatch() {
	console.log("Stopwatch instance has been created.", this);

	let startDate, endDate, duration;
	let isRunning = false;

	Object.defineProperty(this, "duration", {
		get: function() {
			if (!startDate) {
				return 0;
			}
			if (!isRunning) {
				return endDate - startDate;
			}
			return Date.now() - startDate;
		}
	});

	this.Start = () => {
		if (isRunning) {
			throw Error("Stopwatch is running already.");
		}
		console.log("Stopwatch has been started.");
		isRunning = true;
		startDate = Date.now();
	};

	this.Stop = () => {
		if (isRunning === false) {
			throw Error("Stopwatch is not running yet.");
		}
		console.log("Stopwatch has been stopped.");
		isRunning = false;
		endDate = Date.now();
	};

	this.Reset = () => {
		startDate = null;
		endDate = null;
		isRunning = false;
		console.log("Stopwatch has been reset.");
	};
}
/* Try it yourself in browser Console:
const sw = new Stopwatch();
sw.Start();
sw.Stop();
console.log(`Total duration: ${sw.duration / 1000}s`); // Date is in milliseconds
*/
