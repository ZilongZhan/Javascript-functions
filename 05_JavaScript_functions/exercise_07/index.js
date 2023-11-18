//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js";

console.log(isTypeOf("penis", "string")); //true
console.log(isTypeOf("penis", "number")); //false
console.log(isTypeOf([1, 2, 3], "array")); //true
