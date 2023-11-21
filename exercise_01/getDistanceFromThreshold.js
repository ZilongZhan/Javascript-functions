/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Find threshold from one number to another
 * @param {number} value
 * @param {number} threshold
 * @returns numerical gap between value and threshold
 */
const getDistanceFromThreshold = function (value, threshold) {
  let gap = 0;

  if (value < threshold) {
    gap = threshold - value;
  }

  if (value > threshold) {
    gap = value - threshold;
  }

  return gap;
};

export default getDistanceFromThreshold;
