"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./select_sort", "./quick_sort"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./select_sort"), require("./quick_sort"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.select_sort, global.quick_sort);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _select_sort = _interopRequireDefault();

  var _quick_sort = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = {
    select_sort: _select_sort.default,
    quick_sort: _quick_sort.default
  };
  exports.default = _default;
});
//# sourceMappingURL=index.js.map