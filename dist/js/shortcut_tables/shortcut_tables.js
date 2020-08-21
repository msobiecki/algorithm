"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortcut_tables = shortcut_tables;
exports["default"] = void 0;

function shortcut_tables(arr) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      if (result[item] !== undefined) result[item] = parseInt(result[item]) + 1;else result[item] = 1;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

var _default = shortcut_tables;
exports["default"] = _default;
//# sourceMappingURL=shortcut_tables.js.map