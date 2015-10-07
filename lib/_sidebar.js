'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactBootstrap = require('react-bootstrap');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var Sidebar = (function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this = this;

    _classCallCheck(this, Sidebar);

    _get(Object.getPrototypeOf(Sidebar.prototype), 'constructor', this).call(this, props);

    Object.keys(this.eventHandlers).map(function (e) {
      var fn = _this.eventHandlers[e];
      return _this.eventHandlers[e] = fn.bind(_this);
    });

    this.state = {};
  }

  _createClass(Sidebar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      // Do stuff with props

    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buildLineItem = function buildLineItem(item, idx) {
        return _reactAddons2['default'].createElement(
          'li',
          { className: 'nav-link', key: idx },
          _reactAddons2['default'].createElement(
            'a',
            { href: item.href || undefined, onClick: _this2.eventHandlers[item.handlerName] || undefined },
            _reactAddons2['default'].createElement('em', { className: item.iconClass || "" }),
            _reactAddons2['default'].createElement(
              'span',
              null,
              item.name || ""
            )
          ),
          !_.isEmpty(item.children) ? _reactAddons2['default'].createElement(
            'ul',
            { className: 'nav sidebar-subnav' },
            item.children.map(buildLineItem)
          ) : null
        );
      };

      return _reactAddons2['default'].createElement(
        'div',
        { className: 'aside-inner' },
        _reactAddons2['default'].createElement(
          'nav',
          { className: "sidebar" + (this.state.closed ? " closed" : ""), 'data-sidebar-anyclick-close': '' },
          _reactAddons2['default'].createElement(
            'ul',
            { className: 'nav' },
            _reactAddons2['default'].createElement(
              'li',
              { className: 'nav-heading' },
              _reactAddons2['default'].createElement('span', null)
            ),
            (function () {
              return _this2.props.items.map(buildLineItem);
            })()
          )
        )
      );
    }
  }]);

  return Sidebar;
})(_reactAddons2['default'].Component);

;

// Define event handlers usable by component
Sidebar.prototype.eventHandlers = {
  toggle: function toggle(ev) {
    this.setState({ closed: !this.state.closed });
  }
};

Sidebar.defaultProps = {
  items: [{
    name: 'Toggle',
    icon: 'fa chevron',
    href: '#',
    handlerName: 'toggle'
  }]
};

exports['default'] = Sidebar;
module.exports = exports['default'];