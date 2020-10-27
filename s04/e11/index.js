// s04e09 - Exercise - Implement a Stack

// Task: Implement a Stack using ES6+ classes
// a Stack has a...
// methods:	`Push()` - which stores new elements ontop of the stack,
//			`Peek()` - which only returns the first element, but does not remove it
//			`Pop()` - which returns and removes the first element from the stack,
// properties: `count` - (computed property) represents the number of elements on the stack and cannot be set from outside.
//
// Description of a stack:
// It is storing elements in a LIFO (last in, first out) pattern, where we store one
// element "A", add element "B" (so now we have 1. B, 2. A stored in this order on stack).
// Now, when want to get one element, we use `Pop()`, which gets the first element that is "on top" of the stack (B in this case)
// and it also removes it from the stack. There is also a `Peek()` function, which returns element from ontop of the stack, but
// does not remove it.

const _items = new WeakMap();
const _count = new WeakMap();
class Stack {
	constructor() {
		_items.set(this, []);
		_count.set(this, 0);
	}
	Push(obj) {
		_items.get(this).push(obj);
	}
	Peek() {
		const items = _items.get(this);
		if (items.length === 0) throw new Error('Stack is empty.');
		return items[items.length - 1];
	}
	Pop() {
		const items = _items.get(this);
		if (items.length === 0) throw new Error('Stack is empty.');
		return items.pop();
	}
	get count() {
		return _items.get(this).length;
	}
}

const s = new Stack();
console.log('s :', s);
s.Push(5);
s.Push(1);
console.log('s.Peek() :', s.Peek());
console.log('s.count :', s.count);
console.log('s.Pop() :', s.Pop());
console.log('s.count :', s.count);
