"use strict";

var _select_sort = _interopRequireDefault(require("./select_sort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('[TEST SELECT SORT] -', function () {
  it('should return sorted array', function () {
    var list = [1, 3, 8, 7, 6];
    var result = (0, _select_sort["default"])(list);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });
  it('should return sorted array', function () {
    var list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    var result = (0, _select_sort["default"])(list);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });
  it('should return sorted array', function () {
    var list = [1, 2, 3];
    var result = (0, _select_sort["default"])(list);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
//# sourceMappingURL=select_sort.test.js.map