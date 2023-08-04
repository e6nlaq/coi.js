"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrwith = void 0;
function arrwith(arr) {
    let result = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (result.get(arr[i]) !== undefined) {
            result.set(arr[i], result.get(arr[i]) + 1);
        }
        else
            result.set(arr[i], 1);
    }
    return result;
}
exports.arrwith = arrwith;
