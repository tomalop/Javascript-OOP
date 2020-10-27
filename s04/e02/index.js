// s04e02 - Hoisting

// Two ways to define functions (1)(2) - with Function Declaration or Function Expression.

// The critical difference between them is that Function declaration are hoisted.
// Which means they are raised to the top of the code. Hoised statements can be called before their declaration(3).
sayHello(); // (3) this is valid

// (1) Function declaration
function sayHello() {}

// (2) Function Expression
// It is a convention with function expressions to add semicolon at the end, since we use semicolons to end expressions.
const SayGoodbye = function() {};
const number = 1;

// Two ways to define Classes (1)(2) - using a Declaration or Expression syntax.
// Both are not hoisted (not moved to the top).

// Class Declaration
class Circle {}

// Class Expression
const Square = class {};
