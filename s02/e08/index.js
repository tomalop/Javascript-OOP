// OOP in JavaScript - s02e08 - Avoid Extending Built-in Objects

// Do not modify Built-in Objects in JavaScript, although you easily can.
// Reason for that is, for example, you use some library and in that library someone has also
// extended the array prototype and added the shuffle method, but with a different implementation.

////////////////////////////////////////////////////////////////////////////////////////////////////
// "Do not modify objects you do not own!"
////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.shuffle = function() {
	console.log("shuffling");
};

const array = [];
array.shuffle();
