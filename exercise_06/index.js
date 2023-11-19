//import 'checkCollectionHasElements' and execute

import checkCollectionHasElements from "./checkCollectionHasElements.js";

const myArray = [1, 2, 3];

console.log(checkCollectionHasElements(myArray)); //true
console.log(checkCollectionHasElements(Array(5))); //false
