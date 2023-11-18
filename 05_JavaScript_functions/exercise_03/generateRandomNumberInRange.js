/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate random number between 0 and limit
 * @param {number} limit 
 * @returns number between 0 and limit
 */
function generateRandomNumberInRange (limit) {
    return Math.floor(Math.random() * limit);
}

export default generateRandomNumberInRange;
