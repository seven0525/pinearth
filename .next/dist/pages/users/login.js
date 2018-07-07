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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kosukeyoshimura/projects/TimeCapsuleDapps/pages/users/login.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n    marginLeft:300px\n    \n'], ['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n    marginLeft:300px\n    \n']);

var Div = _styledComponents2.default.div(_templateObject);

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login() {
        (0, _classCallCheck3.default)(this, Login);

        return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Login'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'email'), _react2.default.createElement('input', { placeholder: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'password'), _react2.default.createElement('input', { placeholder: 'passwod', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Submit')), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, '\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u306F', _react2.default.createElement(_routes.Link, { route: '/users/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, '\u3053\u3061\u3089')), '\u3078'));
        }
    }]);

    return Login;
}(_react.Component);

var style = {
    margin: 15
};

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJGb3JtIiwiTGluayIsIkRpdiIsImRpdiIsIkxvZ2luIiwic3R5bGUiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFVOztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7O0FBRXJCLElBQU0sTUFBTSwyQkFBTixBQUFhLElBQW5COztJLEFBYU07Ozs7Ozs7Ozs7O2lDQUlPLEFBQ0w7bUNBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMEJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbURBQU8sYUFBUCxBQUFtQjs4QkFBbkI7Z0NBSFIsQUFDSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzREFBTyxhQUFQLEFBQW1COzhCQUFuQjtnQ0FQUixBQUtJLEFBRUksQUFFSjtBQUZJO2lDQUVILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQywyQ0FBUyxPQUFWLEFBQWdCOzhCQUFoQjtnQ0FWUixBQVNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLEFBQUMseUNBQU8sTUFBUixBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFkUixBQUVJLEFBWUksQUFNSSw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDSSw4REFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLHdCQXhCeEIsQUFFSSxBQW9CWSxBQWdCbkI7Ozs7O0FBM0NlLEE7O0FBK0NwQixJQUFNO1lBQU4sQUFBYyxBQUNGLEFBR1o7QUFKYyxBQUNWOztrQkFHSixBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb3N1a2V5b3NoaW11cmEvcHJvamVjdHMvVGltZUNhcHN1bGVEYXBwcyJ9