//imports
import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = formatStringByWordsLength("I am so smart.");
console.log(result1); // i am so smart.

const result2 = formatStringByWordsLength(
  "I am even smarter than Albert Einstein.",
);
console.log(result2); // I AM EVEN SMARTER THAN ALBERT EINSTEIN.
