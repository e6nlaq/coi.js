"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcm = exports.base_lcm = void 0;
const base_gcd = require('./gcd').gcd;
function base_lcm(a, b) {
    return (a * b) / (base_gcd(a, b));
}
exports.base_lcm = base_lcm;
function lcm() {
    if (arguments.length < 2)
        return undefined;
    let result = base_lcm(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i++) {
        result = base_lcm(result, arguments[i]);
    }
    return result;
}
exports.lcm = lcm;
