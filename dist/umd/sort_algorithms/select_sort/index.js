"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./recursion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./recursion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.recursion);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _recursion = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = _recursion.default;
  exports.default = _default;
});
//# sourceMappingURL=index.js.map