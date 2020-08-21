"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortcut_tables = shortcut_tables;
exports.default = void 0;

function shortcut_tables(arr) {
  var result = {};

  for (var item of arr) {
    if (result[item] !== undefined) result[item] = parseInt(result[item]) + 1;else result[item] = 1;
  }

  return result;
}

var _default = shortcut_tables;
exports.default = _default;
//# sourceMappingURL=shortcut_tables.js.map