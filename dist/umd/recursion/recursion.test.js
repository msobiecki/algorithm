"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./recursion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./recursion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.recursion);
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  var _recursion = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  describe('[TEST RECURSION] -', () => {
    it('should return 0',
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      var data = 5;

      var condition = data => data <= 0;

      var operation = data => data - 1;

      var callback = data => data;

      var result = yield (0, _recursion.default)(data, condition, operation, callback);
      expect(result).toBe(0);
    }));
    it('should return 5',
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      var data = 25;

      var condition = data => data <= 5;

      var operation = data => data - 1;

      var callback = data => data;

      var result = yield (0, _recursion.default)(data, condition, operation, callback);
      expect(result).toBe(5);
    }));
    it('should return 20',
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      var data = {
        arr: [5, 5, 10, 5],
        sum: 0
      };

      var condition = data => data.sum >= 20;

      var operation = data => {
        var value = data.arr.shift();
        return {
          arr: data.arr,
          sum: data.sum + value
        };
      };

      var callback = data => data;

      var result = yield (0, _recursion.default)(data, condition, operation, callback);
      expect(result.sum).toBe(20);
    }));
    it('should return 13',
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      var data = {
        arr: [2, 1, 10, 1, 5],
        sum: 0
      };

      var condition = data => data.sum >= 4;

      var operation = data => {
        var value = data.arr.shift();
        return {
          arr: data.arr,
          sum: data.sum + value
        };
      };

      var callback = data => data;

      var result = yield (0, _recursion.default)(data, condition, operation, callback);
      expect(result.sum).toBe(13);
    }));
  });
});
//# sourceMappingURL=recursion.test.js.map