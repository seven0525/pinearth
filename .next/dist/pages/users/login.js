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

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kosukeyoshimura/projects/TimeCapsuleDapps/pages/users/login.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n    marginLeft:300px\n    \n'], ['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n    marginLeft:300px\n    \n']);

var Div = _styledComponents2.default.div(_templateObject);

var config = {
    apiKey: "AIzaSyBC5188TstyDNnw0AdbCTYqyp7YyAx0DQ0",
    authDomain: "timecapsule-3b1bd.firebaseapp.com",
    databaseURL: "https://timecapsule-3b1bd.firebaseio.com",
    projectId: "timecapsule-3b1bd",
    storageBucket: "timecapsule-3b1bd.appspot.com",
    messagingSenderId: "221653140896"
};

if (!_firebase2.default.apps.length) {
    _firebase2.default.initializeApp(config);
}

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

            _firebase2.default.auth().signInWithEmailAndPassword(email, password);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.state.email);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Login'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'email'), _react2.default.createElement('input', {
                placeholder: 'email',
                onChange: function onChange(event) {
                    return _this2.setState({ email: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'password'), _react2.default.createElement('input', { placeholder: 'passwod',
                onChange: function onChange(event) {
                    return _this2.setState({ password: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit',
                onClick: function onClick() {
                    _this2.loginUser();
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Submit')), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, '\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u306F', _react2.default.createElement(_routes.Link, { route: '/users/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJGb3JtIiwiTGluayIsImZpcmViYXNlIiwiRGl2IiwiZGl2IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJMb2dpbiIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibG9naW5Vc2VyIiwic3R5bGUiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFVOztBQUMzQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU87Ozs7Ozs7Ozs7QUFHUCxJQUFNLE1BQU0sMkJBQU4sQUFBYSxJQUFuQjs7QUFhQSxJQUFJO1lBQVMsQUFDRCxBQUNSO2dCQUZTLEFBRUcsQUFDWjtpQkFIUyxBQUdJLEFBQ2I7ZUFKUyxBQUlFLEFBQ1g7bUJBTFMsQUFLTSxBQUNmO3VCQU5KLEFBQWEsQUFNVTtBQU5WLEFBQ1Q7O0FBUUosSUFBSSxDQUFDLG1CQUFBLEFBQVMsS0FBZCxBQUFtQixRQUFRLEFBQ3ZCO3VCQUFBLEFBQVMsY0FBVCxBQUF1QixBQUMxQjs7O0ksQUFFSzs7Ozs7Ozs7Ozs7Ozs7OE1BRUYsQTttQkFBTSxBQUNLLEFBQ1A7c0JBRkUsQUFFUSxBQUNWO3FCQUhFLEFBR08sQTtBQUhQLEFBQ0Y7Ozs7O29DQUtRO3lCQUVvQixLQUZwQixBQUV5QjtnQkFGekIsQUFFQSxlQUZBLEFBRUE7Z0JBRkEsQUFFTyxrQkFGUCxBQUVPLEFBRWY7OytCQUFBLEFBQVMsT0FBVCxBQUFnQiwyQkFBaEIsQUFBMkMsT0FBM0MsQUFBa0QsQUFJckQ7Ozs7aUNBSVE7eUJBRUw7O29CQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7bUNBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMEJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0E7NkJBQUEsQUFDZ0IsQUFDWjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUYzRDs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNEQUFPLGFBQVAsQUFBbUIsQUFDWjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQURqRTs7OEJBQUE7Z0NBVlIsQUFRSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsMkNBQVMsT0FBVixBQUFnQjs4QkFBaEI7Z0NBZlIsQUFjSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixBQUFDLHlDQUFPLE1BQVIsQUFBYSxBQUNMO3lCQUFTLG1CQUFNLEFBQUM7MkJBQUEsQUFBSyxBQUFZO0FBRHpDOzs4QkFBQTtnQ0FBQTtBQUFBO2VBbkJSLEFBRUksQUFpQkksQUFRSSw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDSSw4REFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLHdCQS9CeEIsQUFFSSxBQTJCWSxBQWdCbkI7Ozs7O0FBcEVlLEE7O0FBd0VwQixJQUFNO1lBQU4sQUFBYyxBQUNGLEFBR1o7QUFKYyxBQUNWOztrQkFHSixBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb3N1a2V5b3NoaW11cmEvcHJvamVjdHMvVGltZUNhcHN1bGVEYXBwcyJ9