'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kosukeyoshimura/projects/TimeCapsuleDapps/components/Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            // var config = {
            //     apiKey: "AIzaSyBC5188TstyDNnw0AdbCTYqyp7YyAx0DQ0",
            //     authDomain: "timecapsule-3b1bd.firebaseapp.com",
            //     databaseURL: "https://timecapsule-3b1bd.firebaseio.com",
            //     projectId: "timecapsule-3b1bd",
            //     storageBucket: "timecapsule-3b1bd.appspot.com",
            //     messagingSenderId: "221653140896"
            // };
            // firebase.initializeApp(config);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_semanticUiReact.Menu, { color: 'blue', inverted: true, widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Time Coupsel', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJmaXJlYmFzZSIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBVTs7QUFDVixBQUFTLEFBQVk7O0FBQ3JCLEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7OzZDQUVtQixBQUVqQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7aUNBQ08sQUFFSjs7bUNBQ0ksQUFBQyx1Q0FBSyxPQUFOLEFBQVksUUFBTyxVQUFuQixNQUE0QixRQUE1QixBQUFvQzs4QkFBcEM7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0o7QUFESTtBQUFBLDZDQUNKLEFBQUMsc0JBQUQsQUFBTSxRQUFLLE1BQVgsQUFBZ0I7OEJBQWhCO2dDQUhKLEFBQ0ksQUFDSSxBQUNKLEFBR0E7QUFIQTtnREFHQSxBQUFDLHNCQUFELEFBQU07OzhCQUFOO2dDQU5KLEFBTUksQUFHQTtBQUhBO0FBQUEsOENBR0EsQUFBQyxzQkFBRCxBQUFNOzs4QkFBTjtnQ0FWUixBQUNJLEFBU0ksQUFLZjtBQUxlO0FBQUE7Ozs7O0FBMUJLLEEsQUFvQ3JCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva29zdWtleW9zaGltdXJhL3Byb2plY3RzL1RpbWVDYXBzdWxlRGFwcHMifQ==