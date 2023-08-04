"use strict";
// https://qiita.com/suzuki-navi/items/a80677a0747232843957#javascript
Object.defineProperty(exports, "__esModule", { value: true });
exports.next_permutation = void 0;
function next_permutation(arr) {
    const len = arr.length;
    let left = len - 2;
    while (left >= 0 && arr[left] >= arr[left + 1])
        left--;
    if (left < 0)
        return false;
    let right = len - 1;
    while (arr[left] >= arr[right])
        right--;
    {
        const t = arr[left];
        arr[left] = arr[right];
        arr[right] = t;
    }
    left++;
    right = len - 1;
    while (left < right) {
        {
            const t = arr[left];
            arr[left] = arr[right];
            arr[right] = t;
        }
        left++;
        right--;
    }
    return true;
}
exports.next_permutation = next_permutation;
