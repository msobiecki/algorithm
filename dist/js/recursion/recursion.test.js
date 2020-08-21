"use strict";

var _recursion = _interopRequireDefault(require("./recursion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('[TEST RECURSION] -', function () {
  it('should return 0',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var data, condition, operation, callback, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = 5;

            condition = function condition(data) {
              return data <= 0;
            };

            operation = function operation(data) {
              return data - 1;
            };

            callback = function callback(data) {
              return data;
            };

            _context.next = 6;
            return (0, _recursion["default"])(data, condition, operation, callback);

          case 6:
            result = _context.sent;
            expect(result).toBe(0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should return 5',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var data, condition, operation, callback, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = 25;

            condition = function condition(data) {
              return data <= 5;
            };

            operation = function operation(data) {
              return data - 1;
            };

            callback = function callback(data) {
              return data;
            };

            _context2.next = 6;
            return (0, _recursion["default"])(data, condition, operation, callback);

          case 6:
            result = _context2.sent;
            expect(result).toBe(5);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should return 20',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var data, condition, operation, callback, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = {
              arr: [5, 5, 10, 5],
              sum: 0
            };

            condition = function condition(data) {
              return data.sum >= 20;
            };

            operation = function operation(data) {
              var value = data.arr.shift();
              return {
                arr: data.arr,
                sum: data.sum + value
              };
            };

            callback = function callback(data) {
              return data;
            };

            _context3.next = 6;
            return (0, _recursion["default"])(data, condition, operation, callback);

          case 6:
            result = _context3.sent;
            expect(result.sum).toBe(20);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should return 13',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var data, condition, operation, callback, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = {
              arr: [2, 1, 10, 1, 5],
              sum: 0
            };

            condition = function condition(data) {
              return data.sum >= 4;
            };

            operation = function operation(data) {
              var value = data.arr.shift();
              return {
                arr: data.arr,
                sum: data.sum + value
              };
            };

            callback = function callback(data) {
              return data;
            };

            _context4.next = 6;
            return (0, _recursion["default"])(data, condition, operation, callback);

          case 6:
            result = _context4.sent;
            expect(result.sum).toBe(13);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=recursion.test.js.map