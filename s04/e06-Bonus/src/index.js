// s04e06-Bonus - Private Members using private keyword/notation `#`.

// ! This feature is a proposal to ECMAScript Standards Committiees.

// https://github.com/tc39/proposal-class-fields

require("@babel/register");
import "@babel/register";

class Circle {
	#radius; #xpos; #ypos;
	constructor(radius, xpos, ypos) {
		this.#radius = radius;
		this.#xpos = xpos;
		this.#ypos = ypos;
	}
}

const c = new Circle(1, 0, 0);
console.log('c :', c);
