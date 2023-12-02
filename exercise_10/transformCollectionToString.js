import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";

/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * Transforms elements of collection into a string, joined by '|'.
 * @param {array} collection
 * @returns {string}
 */
const transformCollectionToString = function (collection) {
  let output = "";

  if (checkCollectionHasElements(collection)) {
    output = collection.join(" | ");
  }

  return output;
};

export default transformCollectionToString;
