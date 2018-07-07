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
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            email: '',
            password: '',
            loading: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Login, [{
        key: 'loginUser',
        value: function loginUser() {
            var _state = this.state,
                email = _state.email,
                password = _state.password;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.state.email);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Login'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'email'), _react2.default.createElement('input', {
                placeholder: 'email',
                onChange: function onChange(event) {
                    return _this2.setState({ email: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'password'), _react2.default.createElement('input', { placeholder: 'passwod',
                onChange: function onChange(event) {
                    return _this2.setState({ password: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit',
                onClick: function onClick() {
                    _this2.loginUser();
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Submit')), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, '\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u306F', _react2.default.createElement(_routes.Link, { route: '/users/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJGb3JtIiwiTGluayIsIkRpdiIsImRpdiIsIkxvZ2luIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2dpblVzZXIiLCJzdHlsZSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQVU7O0FBQzNCLEFBQVMsQUFBWTs7Ozs7Ozs7QUFFckIsSUFBTSxNQUFNLDJCQUFOLEFBQWEsSUFBbkI7O0lBYU0sQTs7Ozs7Ozs7Ozs7Ozs7OE0sQUFFRjttQkFBTSxBQUNLLEFBQ1A7c0JBRkUsQUFFUSxBQUNWO3FCQUhFLEEsQUFHTztBQUhQLEFBQ0Y7Ozs7O29DQUtRO3lCQUVvQixLQUZwQixBQUV5QjtnQkFGekIsQUFFQSxlQUZBLEFBRUE7Z0JBRkEsQUFFTyxrQkFGUCxBQUVPLEFBRWxCOzs7O2lDQUlRO3lCQUVMOztvQkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO21DQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDBCQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBOzZCQUFBLEFBQ2dCLEFBQ1o7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGM0Q7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzREFBTyxhQUFQLEFBQW1CLEFBQ1o7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUF6QyxBQUFTLEFBQWMsQUFBeUI7QUFEakU7OzhCQUFBO2dDQVZSLEFBUUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDJDQUFTLE9BQVYsQUFBZ0I7OEJBQWhCO2dDQWZSLEFBY0ksQUFDSSxBQUVKO0FBRkk7aUNBRUosQUFBQyx5Q0FBTyxNQUFSLEFBQWEsQUFDTDt5QkFBUyxtQkFBTSxBQUFDOzJCQUFBLEFBQUssQUFBWTtBQUR6Qzs7OEJBQUE7Z0NBQUE7QUFBQTtlQW5CUixBQUVJLEFBaUJJLEFBUUksNEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0ksOERBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBQ0ksQUFDSSx3QkEvQnhCLEFBRUksQUEyQlksQUFnQm5COzs7OztBQWhFZSxBOztBQW9FcEIsSUFBTTtZQUFOLEFBQWMsQUFDRixBQUdaO0FBSmMsQUFDVjs7a0JBR0osQUFBZSIsImZpbGUiOiJsb2dpbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva29zdWtleW9zaGltdXJhL3Byb2plY3RzL1RpbWVDYXBzdWxlRGFwcHMifQ==