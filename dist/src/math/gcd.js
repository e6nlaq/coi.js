"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = exports.base_gcd = void 0;
function base_gcd(a, b) {
    if (a % b == 0)
        return b;
    else
        return base_gcd(b, a % b);
}
exports.base_gcd = base_gcd;
function gcd() {
    if (arguments.length < 2)
        return undefined;
    let result = base_gcd(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i++) {
        result = base_gcd(result, arguments[i]);
    }
    return result;
}
exports.gcd = gcd;
