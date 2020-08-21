"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./shortcut_tables"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./shortcut_tables"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.shortcut_tables);
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  var _shortcut_tables = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe("[TEST SHORTCUT TABLES] -", () => {
    it("should return 0", () => {
      var data = ["ONE", "TWO", "TWO", "THREE", "THREE", "FOUR"];
      var result = (0, _shortcut_tables.default)(data);
      expect(result).toStrictEqual({
        ONE: 1,
        TWO: 2,
        THREE: 2,
        FOUR: 1
      });
    });
    it("should return 0", () => {
      var data = ["TWO", "TWO", "THREE", "THREE", "FOUR", "ONE", "ONE", "ONE", "ONE"];
      var result = (0, _shortcut_tables.default)(data);
      expect(result).toStrictEqual({
        ONE: 4,
        TWO: 2,
        THREE: 2,
        FOUR: 1
      });
    });
  });
});
//# sourceMappingURL=shortcut_tables.test.js.map