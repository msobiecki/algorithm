"use strict";

var _binary_search = _interopRequireDefault(require("./binary_search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("[TEST BINARY SEARCH] -", function () {
  it("should return position 1", function () {
    var list = [1, 3, 5, 7, 9];
    var search = 3;
    var result = (0, _binary_search["default"])(list, search);
    expect(result).toBe(1);
  });
  it("should return position 3", function () {
    var list = [1, 3, 5, 7, 9];
    var search = 7;
    var result = (0, _binary_search["default"])(list, search);
    expect(result).toBe(3);
  });
  it("should return position null", function () {
    var list = [1, 3, 5, 7, 9];
    var search = 10;
    var result = (0, _binary_search["default"])(list, search);
    expect(result).toBe(null);
  });
});
//# sourceMappingURL=binary_search.test.js.map