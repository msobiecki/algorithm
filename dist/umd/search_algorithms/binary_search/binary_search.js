"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.binary_search = binary_search;
  exports.default = void 0;

  function binary_search(list, item) {
    var low = 0;
    var high = list.length - 1;

    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      var guess = list[mid];
      if (guess == item) return mid;
      if (guess > item) high = mid - 1;else low = mid + 1;
    }

    return null;
  }

  var _default = binary_search;
  exports.default = _default;
});
//# sourceMappingURL=binary_search.js.map