/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Find number of characters in a string
 * @param {string} sentence
 * @returns number of characters in 'sentence'
 */
const getTotalWordsFromString = function (sentence) {
  const wordCount = sentence.split(" ").length;

  return wordCount;
};

export default getTotalWordsFromString;
