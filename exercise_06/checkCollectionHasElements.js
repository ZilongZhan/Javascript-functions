/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Check whether a given string is empty or not
 * @param {array} collection
 * @returns whether it is true that 'collection' is empty or not
 */
function checkCollectionHasElements(collection) {
  return collection.some((element) => element);
}

export default checkCollectionHasElements;
