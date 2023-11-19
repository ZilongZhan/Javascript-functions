//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js";

console.log(isTypeOf("pikachu", "string")); //true
console.log(isTypeOf("pikachu", "number")); //false
console.log(isTypeOf([1, 2, 3], "array")); //true
