"use strict";

var _quick_sort = _interopRequireDefault(require("./quick_sort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('[TEST QUICK SORT] -', function () {
  it('should return sorted array', function () {
    var list = [1, 3, 8, 7, 6];
    var result = (0, _quick_sort["default"])(list);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });
  it('should return sorted array', function () {
    var list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    var result = (0, _quick_sort["default"])(list);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });
  it('should return sorted array', function () {
    var list = [1, 2, 3];
    var result = (0, _quick_sort["default"])(list);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
//# sourceMappingURL=quick_sort.test.js.map