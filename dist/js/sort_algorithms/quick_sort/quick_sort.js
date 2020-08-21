"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quick_sort = quick_sort;
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function quick_sort(arr) {
  if (arr.length < 2) return arr;else {
    var pivot = arr.shift();
    var less = arr.filter(function (i) {
      return i <= pivot;
    });
    var greater = arr.filter(function (i) {
      return i > pivot;
    });
    return [].concat(_toConsumableArray(quick_sort(less)), [pivot], _toConsumableArray(quick_sort(greater)));
  }
}

var _default = quick_sort;
exports["default"] = _default;
//# sourceMappingURL=quick_sort.js.map