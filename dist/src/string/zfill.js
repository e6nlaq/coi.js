"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zfill = void 0;
function zfill(digit, value) {
    if (typeof digit === 'number') {
        return zfill(digit, String(value));
    }
    else {
        return "A";
    }
}
exports.zfill = zfill;
