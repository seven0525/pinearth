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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kosukeyoshimura/projects/TimeCapsuleDapps/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n'], ['\n    width: 300px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    margin: auto;\n']);

var Div = _styledComponents2.default.div(_templateObject);

var HomeIndex = function (_Component) {
    (0, _inherits3.default)(HomeIndex, _Component);

    function HomeIndex() {
        (0, _classCallCheck3.default)(this, HomeIndex);

        return (0, _possibleConstructorReturn3.default)(this, (HomeIndex.__proto__ || (0, _getPrototypeOf2.default)(HomeIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(HomeIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(Div, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_routes.Link, { route: '/messages/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                basic: true, color: 'orange',
                content: '\u4F1D\u3048\u308B',
                size: 'massive',
                style: styles.saveButtonStyle,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }))), _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'teal',
                content: '\u307F\u3066\u307F\u308B',
                size: 'massive'
                // style={styles.showButtonStyle}
                , __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })));
        }
    }]);

    return HomeIndex;
}(_react.Component);

var styles = {
    saveButtonStyle: {
        marginBottom: 20
    },
    showButtonStyle: {
        marginTop: 200
    }

};

exports.default = HomeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiTGluayIsInN0eWxlZCIsIkRpdiIsImRpdiIsIkhvbWVJbmRleCIsInN0eWxlcyIsInNhdmVCdXR0b25TdHlsZSIsIm1hcmdpbkJvdHRvbSIsInNob3dCdXR0b25TdHlsZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQVMsQUFBWTs7QUFDckIsQUFBTzs7Ozs7Ozs7OztBQUdQLElBQU0sTUFBTSwyQkFBTixBQUFhLElBQW5COztJLEFBYU07Ozs7Ozs7Ozs7O2lDQUVPLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsYUFBQSxrQkFDTSxjQUFEOzs4QkFBQTtnQ0FBQSxBQUVHO0FBRkg7QUFBQSwrQkFFRyxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSjtBQURJO0FBQUEsK0JBQ0osQUFBQzt1QkFBRCxNQUNVLE9BRFYsQUFDZ0IsQUFDWjt5QkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHUyxBQUNMO3VCQUFPLE9BSlgsQUFJa0I7OzhCQUpsQjtnQ0FKQyxBQUVHLEFBQ0EsQUFDSixBQVFBO0FBUkE7QUFDSSxrQ0FPSixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLEFBQ1o7eUJBRFIsQUFDZ0IsQUFDUjtzQkFBSyxBQUNMO0FBSFI7OzhCQUFBO2dDQWRSLEFBQ0ksQUFDSyxBQVlELEFBU1g7QUFUVzs7Ozs7O0FBakJRLEE7O0FBNkJ4QixJQUFNOztzQkFBUyxBQUNNLEFBQ0EsQUFFakI7QUFIaUIsQUFDYjs7bUJBRlIsQUFBZSxBQUlNLEFBQ0gsQUFNbEI7QUFQcUIsQUFDYjs7QUFMTyxBQUNYOztrQkFVSixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb3N1a2V5b3NoaW11cmEvcHJvamVjdHMvVGltZUNhcHN1bGVEYXBwcyJ9