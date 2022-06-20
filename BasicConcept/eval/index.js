var x = 2, y = 3;
console.log(eval("var x = 9; x"));               // prints 9
console.log(x);                                  // prints 9
console.log(eval("'use strict'; var x = 5; x")); // prints 5
console.log(eval("'use strict'; var x = 7; x")); // prints 7
console.log(eval("'use strict'; y"));            // prints 3
console.log(x);                                  // prints 9

"use strict";
var x = 2, y = 3;
// NB: Strictness propagates into eval code evaluated by a
//     direct call to eval — a call occurring through an
//     expression of the form eval(...).
console.log(eval("var x = 5; x")); // prints 5
console.log(eval("var x = 7; x")); // prints 7
console.log(eval("y"));            // prints 3
console.log(x);                    // prints 2