"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./quick_sort"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./quick_sort"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.quick_sort);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _quick_sort = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = _quick_sort.default;
  exports.default = _default;
});
//# sourceMappingURL=index.js.map