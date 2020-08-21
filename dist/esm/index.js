"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _search_algorithms = _interopRequireDefault(require("./search_algorithms"));

var _sort_algorithms = _interopRequireDefault(require("./sort_algorithms"));

var _recursion = _interopRequireDefault(require("./recursion"));

var _shortcut_tables = _interopRequireDefault(require("./shortcut_tables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Search: _search_algorithms.default,
  Sort: _sort_algorithms.default,
  Recursion: _recursion.default,
  ShortcutTables: _shortcut_tables.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map