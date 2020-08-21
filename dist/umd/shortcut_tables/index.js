"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./shortcut_tables"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./shortcut_tables"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shortcut_tables);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _shortcut_tables = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = _shortcut_tables.default;
  exports.default = _default;
});
//# sourceMappingURL=index.js.map