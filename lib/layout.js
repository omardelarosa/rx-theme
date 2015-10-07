'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactBootstrap = require('react-bootstrap');

var _topnavbar = require('./_topnavbar');

var _topnavbar2 = _interopRequireDefault(_topnavbar);

var _sidebar = require('./_sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _footer = require('./_footer');

var _footer2 = _interopRequireDefault(_footer);

var _alert = require('./_alert');

var _alert2 = _interopRequireDefault(_alert);

var nullPageComponent = _reactAddons2['default'].createElement(
  'div',
  { className: 'rx-main-panel' },
  ' '
);

// Example dropdown and menu items
var sidebarItems = [{
  href: "#",
  name: "Item 1",
  handlerName: "toggle"
}, {
  href: "#",
  name: "Item 2",
  handlerName: "toggle"
}, {
  href: "#",
  name: "Item 3",
  handlerName: "toggle",
  children: [{
    name: "Item 3a",
    href: "#",
    handlerName: "toggle"
  }]
}];

var dropdownItems = [{
  name: 'one',
  href: '#'
}, {
  name: 'two',
  href: '#'
}, {
  name: 'three',
  href: '#'
}];

var Layout = (function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).call(this, props);

    this.state = {};
  }

  _createClass(Layout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}
  }, {
    key: 'render',
    value: function render() {
      var projectLogo = this.props.projectLogoComponent || _reactAddons2['default'].createElement(
        'span',
        { className: 'rx-project-name' },
        this.props.projectName
      );
      return _reactAddons2['default'].createElement(
        'div',
        { className: 'main-layout' },
        _reactAddons2['default'].createElement(
          _reactBootstrap.Grid,
          { className: 'outer-grid', fluid: true },
          _reactAddons2['default'].createElement(
            _reactBootstrap.Row,
            { fill: true, className: 'topnavbar-wrapper' },
            _reactAddons2['default'].createElement(_topnavbar2['default'], { mdOffset: 0, md: 12, projectLogo: projectLogo, dropdownItems: this.props.dropdownItems })
          ),
          _reactAddons2['default'].createElement(
            _reactBootstrap.Row,
            { fill: true, className: 'main-panel' },
            _reactAddons2['default'].createElement(
              _reactBootstrap.Col,
              { mdOffset: 0, md: 12 },
              _reactAddons2['default'].createElement(
                'aside',
                { className: 'aside' },
                _reactAddons2['default'].createElement(_sidebar2['default'], { items: this.props.sidebarItems })
              ),
              _reactAddons2['default'].createElement(
                'section',
                { className: 'content-wrapper' },
                _reactAddons2['default'].createElement(_alert2['default'], null),
                this.props.pageComponent,
                _reactAddons2['default'].createElement(_footer2['default'], null)
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
})(_reactAddons2['default'].Component);

Layout.defaultProps = {
  pageComponent: nullPageComponent,
  sidebarItems: sidebarItems,
  dropdownItems: dropdownItems
};

exports['default'] = Layout;
module.exports = exports['default'];