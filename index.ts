/**
 * coi.js
 * 
 * coi.js is a general-purpose library written in TypeScript.
 */

/**
 * Zero padding with specified number of digits
 * 
 * @module coi.js
 * @param {number} digit - number of digits
 * @param {number | String} value - value to be zero-filled
 */
export const zfill: (digit: number, value: number | String) => String = require('./src/string/zfill').zfill;
