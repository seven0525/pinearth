webpackHotUpdate(7,{

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(933);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(634);

var _Layout2 = _interopRequireDefault(_Layout);

var _styledComponents = __webpack_require__(923);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _semanticUiReact = __webpack_require__(451);

var _routes = __webpack_require__(906);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kosukeyoshimura/projects/TimeCapsuleDapps/pages/users/login.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kosukeyoshimura/projects/TimeCapsuleDapps/pages/users/login.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/users/login")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hNDM1NGFmMzJlNTM4MDQwZTNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlcnMvbG9naW4uanM/YmIzNmYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbkxlZnQ6MzAwcHhcbiAgICBcbmA7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlPXtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGxvYWRpbmc6ICcnXG4gICAgfVxuXG4gICAgbG9naW5Vc2VyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKVxuICAgICAgICByZXR1cm4oXG5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+ZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5wYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3Bhc3N3b2QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPSdJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9ucycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5sb2dpblVzZXIoKX19XG4gICAgICAgICAgICAgICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND7jgrXjgqTjg7PjgqLjg4Pjg5fjga9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi91c2Vycy9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44GT44Gh44KJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDjgbg8L2g0PlxuXG5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG5cblxuXG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luOiAxNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdXNlcnMvbG9naW4uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBOztBQUZBOzs7OztBQUtBO0FBRUE7QUFBQTtBQUFBOzs7O0FBTUE7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBOztBQUFBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBOztBQUFBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQUFBO0FBREE7O0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQWtCQTtBQUlBO0FBSEE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=