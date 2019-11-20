'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useSpoiler = function useSpoiler(text) {
  var blur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  var _useState = React.useState(text),
      _useState2 = _slicedToArray(_useState, 1),
      textState = _useState2[0];

  var _useState3 = React.useState(blur),
      _useState4 = _slicedToArray(_useState3, 2),
      blurState = _useState4[0],
      setBlurState = _useState4[1];

  var effectedClass = {
    filter: 'blur(' + blurState + 'px)',
    cursor: 'pointer'
  };
  return React__default.createElement("span", {
    style: effectedClass,
    onClick: function onClick() {
      setBlurState(blurState = 0);
    }
  }, textState);
};

exports.useSpoiler = useSpoiler;
//# sourceMappingURL=index.js.map
