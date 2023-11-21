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
  let wordCount = 0;
  let isWord = false;

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " " && !isWord) {
      wordCount++;
      isWord = true;
    } else if (sentence[index] === " ") {
      isWord = false;
    }
  }

  return wordCount;
};

export default getTotalWordsFromString;
