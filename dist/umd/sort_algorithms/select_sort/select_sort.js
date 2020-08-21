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
  exports.select_sort = select_sort;
  exports.default = void 0;

  function find_smallest(arr) {
    var smallest_index = 0;
    var smallest = arr[smallest_index];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest_index = i;
        smallest = arr[smallest_index];
      }
    }

    return smallest_index;
  }

  function select_sort(arr) {
    var newArr = [];

    while (arr.length > 0) {
      newArr.push(...arr.splice(find_smallest(arr), 1));
    }

    return newArr;
  }

  var _default = select_sort;
  exports.default = _default;
});
//# sourceMappingURL=select_sort.js.map