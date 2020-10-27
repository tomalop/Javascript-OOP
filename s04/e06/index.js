// s04e06 - Private Members Using WeakMaps

// WeakMap type is essentially a dictionary (a key-value pair), where keys are objects and values can be anything.
// We call it WeakMap because, keys are weak, if there are no references to these keys, they will be garbage collected.

// We can either use one WeakMap for each member we want to set to private, or have one WeakMap for all private members.

// ? How to make a private array that is empty on object creation . And how to make it with a value from arguments (and ensure
// ? that it always will be an array, which can happen, if we pass one argument).

const _radius = new WeakMap();
const _move = new WeakMap();
const privateProperties = new WeakMap();

class Circle {
	constructor(radius, xpos, ypos) {
		privateProperties.set(this, {
			xpos: xpos,
			ypos: ypos,
			getPosition2DVertex: () => {
				const twoDPos = {
					x: privateProperties.get(this).xpos,
					y: privateProperties.get(this).ypos
				};
				return twoDPos;
			}
		});
		// private property with WeakMap
		// first argument, the key we use is `this` which repesents the current instance of an object (circle object
		// in this example) as our key.
		// second argument, they value is the actual value we want to store (radius value in this example).
		_radius.set(this, radius);
		// private method with WeakMap
		// If we want to access the instance of the current circle object `this` from the method, we use arrow `()=>` function
		// declaration, instead of using regular `function()` function. Since arrow functions use `this` value of their
		// containing function. In other words, `this` is not going to be rebound and it is going to be inherited from ctor.
		_move.set(this, () => {
			console.log('move', this);
		});
	}
	draw() {
		// get member from "collection" of WeakMap properties:
		console.log('getPosition2DVertex() :', privateProperties.get(this).getPosition2DVertex());
		// to get move method from our WeakMap:
		_move.get(this)(); // then we add second parenthesis to execute the returned function from WeakMap.
		// to get radius property from our WeakMap:
		return _radius.get(this);
	}
}

const c = new Circle(1, 0, 0);
console.log('c :', c);
console.log('Object.getOwnPropertyNames(c); :', Object.getOwnPropertyNames(c));
console.log('c.draw() :', c.draw());
