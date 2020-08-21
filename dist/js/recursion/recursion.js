"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recursion = recursion;
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function recursion(_x, _x2, _x3, _x4) {
  return _recursion.apply(this, arguments);
}

function _recursion() {
  _recursion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data, condition, operation, callback) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!condition(data)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", callback(data));

          case 4:
            _context.next = 6;
            return recursion(operation(data), condition, operation, callback);

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _recursion.apply(this, arguments);
}

var _default = recursion;
exports["default"] = _default;
//# sourceMappingURL=recursion.js.map