/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: string (type)
 * output:
 */

/**
 * Check if type of value matches type received as argument
 * @param {*} value
 * @param {string} type
 * @returns whether 'value' marches 'type'
 */
function isTypeOf(value, type) {
  return type === "array" ? Array.isArray(value) : typeof value === type;
}

export default isTypeOf;
