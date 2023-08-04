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
 * @returns {String} String after zero-filling
 */
export declare const zfill: (digit: number, value: number | String) => String;
/**
 * Associative array by value
 *
 * N as the number of elements. O(N)
 *
 * @module coi.js
 * @param {Array<any>} arr - array
 * @returns {Map<keyof (typeof arr), number>} Associative array by value
 */
export declare const arrwith: (arr: Array<any>) => Map<keyof (typeof arr), number>;
export declare const next_permutation: (arr: Array<any>) => boolean;
/**
 * returns the greatest common divisor
 * returns undefined if the number of arguments is less than 2
 *
 * Arguments are variable length arguments
 *
 * @module coi.js
 * @returns {number | undefined} greatest common divisor
 */
export declare const gcd: () => number | undefined;
/**
 * returns the lowest common multiple
 * returns undefined if the number of arguments is less than 2
 *
 * Arguments are variable length arguments
 *
 * @module coi.js
 * @returns {number | undefined} lowest common multiple
 */
export declare const lcm: () => number | undefined;
