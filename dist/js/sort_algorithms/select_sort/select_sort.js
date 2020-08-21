"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select_sort = select_sort;
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function find_smallest(arr) {
  var smallest_index = 0;
  var smallest = arr[smallest_index];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest_index = i;
      smallest = arr[smallest_index];
    }
  }

  return smallest_index;
}

function select_sort(arr) {
  var newArr = [];

  while (arr.length > 0) {
    newArr.push.apply(newArr, _toConsumableArray(arr.splice(find_smallest(arr), 1)));
  }

  return newArr;
}

var _default = select_sort;
exports["default"] = _default;
//# sourceMappingURL=select_sort.js.map