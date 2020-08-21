"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./binary_search"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./binary_search"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.binary_search);
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  var _binary_search = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe("[TEST BINARY SEARCH] -", () => {
    it("should return position 1", () => {
      var list = [1, 3, 5, 7, 9];
      var search = 3;
      var result = (0, _binary_search.default)(list, search);
      expect(result).toBe(1);
    });
    it("should return position 3", () => {
      var list = [1, 3, 5, 7, 9];
      var search = 7;
      var result = (0, _binary_search.default)(list, search);
      expect(result).toBe(3);
    });
    it("should return position null", () => {
      var list = [1, 3, 5, 7, 9];
      var search = 10;
      var result = (0, _binary_search.default)(list, search);
      expect(result).toBe(null);
    });
  });
});
//# sourceMappingURL=binary_search.test.js.map