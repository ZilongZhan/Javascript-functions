//imports
import transformCollectionToString from "./transformCollectionToString.js";

const result1 = transformCollectionToString(["Pichu", "Pikachu", "Raichu"]);
console.log(result1); // Pichu | Pikachu | Raichu

const result2 = transformCollectionToString([]);
console.log(result2); // ""
