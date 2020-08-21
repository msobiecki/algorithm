"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quick_sort = quick_sort;
exports.default = void 0;

function quick_sort(arr) {
  if (arr.length < 2) return arr;else {
    var pivot = arr.shift();
    var less = arr.filter(i => i <= pivot);
    var greater = arr.filter(i => i > pivot);
    return [...quick_sort(less), pivot, ...quick_sort(greater)];
  }
}

var _default = quick_sort;
exports.default = _default;
//# sourceMappingURL=quick_sort.js.map