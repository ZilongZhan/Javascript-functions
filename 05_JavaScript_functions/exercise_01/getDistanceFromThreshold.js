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
    let message = "Is equal to threshold";
   
    if (value < threshold) {
        message = threshold - value + " is left to reach threshold";
    }

    if (value > threshold) {
        message =  "Exceeds threshold by " + (value - threshold);
    }

    return message;
};

export default getDistanceFromThreshold;
