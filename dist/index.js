"use strict";
/**
 * coi.js
 *
 * coi.js is a general-purpose library written in TypeScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcm = exports.gcd = exports.next_permutation = exports.arrwith = exports.zfill = void 0;
/**
 * Zero padding with specified number of digits
 *
 * @module coi.js
 * @param {number} digit - number of digits
 * @param {number | String} value - value to be zero-filled
 * @returns {String} String after zero-filling
 */
exports.zfill = require('./src/string/zfill').zfill;
/**
 * Associative array by value
 *
 * N as the number of elements. O(N)
 *
 * @module coi.js
 * @param {Array<any>} arr - array
 * @returns {Map<keyof (typeof arr), number>} Associative array by value
 */
exports.arrwith = require('./src/array/arrwith').arrwith;
exports.next_permutation = require('./src/array/next_permutation').next_permutation;
/**
 * returns the greatest common divisor
 * returns undefined if the number of arguments is less than 2
 *
 * Arguments are variable length arguments
 *
 * @module coi.js
 * @returns {number | undefined} greatest common divisor
 */
exports.gcd = require('./src/math/gcd').gcd;
/**
 * returns the lowest common multiple
 * returns undefined if the number of arguments is less than 2
 *
 * Arguments are variable length arguments
 *
 * @module coi.js
 * @returns {number | undefined} lowest common multiple
 */
exports.lcm = require('./src/math/lcm').lcm;
