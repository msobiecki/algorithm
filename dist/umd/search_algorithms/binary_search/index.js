"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./binary_search"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./binary_search"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.binary_search);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _binary_search = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _default = _binary_search.default;
  exports.default = _default;
});
//# sourceMappingURL=index.js.map