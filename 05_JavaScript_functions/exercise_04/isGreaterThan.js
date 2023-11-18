/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check whether one number is greater than a given number
 * @param {number} value 
 * @param {number} threshold 
 * @returns whether 'value' is greater than 'threshold' or not
 */
function isGreaterThan (value, threshold) {
    return value > threshold;
}

export default isGreaterThan;
