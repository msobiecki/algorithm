"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./search_algorithms", "./sort_algorithms", "./recursion", "./shortcut_tables"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./search_algorithms"), require("./sort_algorithms"), require("./recursion"), require("./shortcut_tables"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.search_algorithms, global.sort_algorithms, global.recursion, global.shortcut_tables);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _search_algorithms = _interopRequireDefault();

  var _sort_algorithms = _interopRequireDefault();

  var _recursion = _interopRequireDefault();

  var _shortcut_tables = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = {
    Search: _search_algorithms.default,
    Sort: _sort_algorithms.default,
    Recursion: _recursion.default,
    ShortcutTables: _shortcut_tables.default
  };
  exports.default = _default;
});
//# sourceMappingURL=index.js.map