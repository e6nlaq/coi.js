"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zfill = void 0;
function zfill(digit, value) {
    if (typeof value === 'number') {
        const floor_num = Math.floor(value);
        if (value >= 0)
            return zfill(digit + String(value).length - String(floor_num).length, String(value));
        else
            return "-" + zfill(digit + String(value).length - String(floor_num).length, String(0 - value));
    }
    else {
        digit = Math.floor(digit);
        if (digit <= value.length)
            return value;
        else {
            return "0".repeat(digit - value.length) + value;
        }
    }
}
exports.zfill = zfill;
