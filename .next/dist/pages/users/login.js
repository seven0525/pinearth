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

            firebase.auth().signInWithEmailAndPassword(email, password);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.state.email);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Login'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'email'), _react2.default.createElement('input', {
                placeholder: 'email',
                onChange: function onChange(event) {
                    return _this2.setState({ email: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'password'), _react2.default.createElement('input', { placeholder: 'passwod',
                onChange: function onChange(event) {
                    return _this2.setState({ password: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit',
                onClick: function onClick() {
                    _this2.loginUser();
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Submit')), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, '\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u306F', _react2.default.createElement(_routes.Link, { route: '/users/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJGb3JtIiwiTGluayIsIkRpdiIsImRpdiIsIkxvZ2luIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9hZGluZyIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2luVXNlciIsInN0eWxlIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBVTs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7OztBQUVyQixJQUFNLE1BQU0sMkJBQU4sQUFBYSxJQUFuQjs7SSxBQWFNOzs7Ozs7Ozs7Ozs7Ozs4TUFFRixBO21CQUFNLEFBQ0ssQUFDUDtzQkFGRSxBQUVRLEFBQ1Y7cUJBSEUsQUFHTyxBO0FBSFAsQUFDRjs7Ozs7b0NBS1E7eUJBRW9CLEtBRnBCLEFBRXlCO2dCQUZ6QixBQUVBLGVBRkEsQUFFQTtnQkFGQSxBQUVPLGtCQUZQLEFBRU8sQUFFZjs7cUJBQUEsQUFBUyxPQUFULEFBQWdCLDJCQUFoQixBQUEyQyxPQUEzQyxBQUFrRCxBQUlyRDs7OztpQ0FJUTt5QkFFTDs7b0JBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQkFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQTs2QkFBQSxBQUNnQixBQUNaOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRjNEOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFLSjtBQUxJO0FBQ0ksaUNBSVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0RBQU8sYUFBUCxBQUFtQixBQUNaOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBRGpFOzs4QkFBQTtnQ0FWUixBQVFJLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQywyQ0FBUyxPQUFWLEFBQWdCOzhCQUFoQjtnQ0FmUixBQWNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLEFBQUMseUNBQU8sTUFBUixBQUFhLEFBQ0w7eUJBQVMsbUJBQU0sQUFBQzsyQkFBQSxBQUFLLEFBQVk7QUFEekM7OzhCQUFBO2dDQUFBO0FBQUE7ZUFuQlIsQUFFSSxBQWlCSSxBQVFJLDRCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNJLDhEQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksd0JBL0J4QixBQUVJLEFBMkJZLEFBZ0JuQjs7Ozs7QUFwRWUsQTs7QUF3RXBCLElBQU07WUFBTixBQUFjLEFBQ0YsQUFHWjtBQUpjLEFBQ1Y7O2tCQUdKLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tvc3VrZXlvc2hpbXVyYS9wcm9qZWN0cy9UaW1lQ2Fwc3VsZURhcHBzIn0=