/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Find number of characters in a word
 * @param {string} word
 * @returns number of characters of word
 */
const getTotalWordsFromString = function (word) {
  return [...word].length;
};

export default getTotalWordsFromString;
