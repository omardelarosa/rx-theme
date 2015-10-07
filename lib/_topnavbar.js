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

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var TopNavbar = (function (_React$Component) {
  _inherits(TopNavbar, _React$Component);

  function TopNavbar(props) {
    _classCallCheck(this, TopNavbar);

    _get(Object.getPrototypeOf(TopNavbar.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _createClass(TopNavbar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {}
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _reactAddons2['default'].createElement(
        _reactBootstrap.Col,
        { role: 'navigation', className: 'navbar topnavbar' },
        _reactAddons2['default'].createElement(
          'div',
          { className: 'navbar-header' },
          _reactAddons2['default'].createElement(
            'a',
            { href: '/', className: 'navbar-brand' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'brand-logo' },
              _reactAddons2['default'].createElement(
                'span',
                { className: 'rx-project-name' },
                'Project'
              )
            )
          )
        ),
        _reactAddons2['default'].createElement(
          'div',
          { className: 'nav-wrapper' },
          _reactAddons2['default'].createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _reactAddons2['default'].createElement(
              'li',
              null,
              _reactAddons2['default'].createElement(
                'a',
                { href: '#', 'data-toggle-state': 'aside-collapsed', className: 'hidden-xs' },
                _reactAddons2['default'].createElement('em', { className: 'fa fa-navicon' })
              ),
              _reactAddons2['default'].createElement(
                'a',
                { href: '#', 'data-toggle-state': 'aside-toggled', 'data-no-persist': 'true', className: 'visible-xs sidebar-toggle' },
                _reactAddons2['default'].createElement('em', { className: 'fa fa-navicon' })
              )
            )
          ),
          _reactAddons2['default'].createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            _reactAddons2['default'].createElement(
              'li',
              null,
              (function () {
                if (_this.props.dropdownItems && _this.props.dropdownItems.length > 0) {
                  return _reactAddons2['default'].createElement(
                    'div',
                    { className: 'btn-group segments-upload navbar-btn', 'data-toggle': 'tooltip', 'data-placement': 'left', title: 'Upload current company\'s segments' },
                    _reactAddons2['default'].createElement(
                      'button',
                      { type: 'button', className: 'btn btn-default main', 'data-url': '--= start_uploading_segments_path --', disabled: true },
                      'Select an item'
                    ),
                    _reactAddons2['default'].createElement(
                      'button',
                      { type: 'button', 'data-toggle': 'dropdown', className: 'btn dropdown-toggle btn-default', 'aria-expanded': 'false' },
                      _reactAddons2['default'].createElement('span', { className: 'caret' }),
                      _reactAddons2['default'].createElement(
                        'span',
                        { className: 'sr-only' },
                        'default'
                      )
                    ),
                    _reactAddons2['default'].createElement(
                      'ul',
                      { role: 'menu', className: 'dropdown-menu' },
                      _this.props.dropdownItems.map(function (item, idx) {
                        return _reactAddons2['default'].createElement(
                          'li',
                          { key: idx },
                          _reactAddons2['default'].createElement(
                            'a',
                            { href: '#' },
                            item.name
                          )
                        );
                      })
                    )
                  );
                } else {
                  return _reactAddons2['default'].createElement(
                    'div',
                    { className: 'btn-group segments-upload navbar-btn', 'data-toggle': 'tooltip', 'data-placement': 'left', title: 'Upload current company\'s segments' },
                    _reactAddons2['default'].createElement(
                      'button',
                      { type: 'button', className: 'btn btn-default main', disabled: true },
                      'No dropdown items'
                    )
                  );
                }
              })()
            ),
            _reactAddons2['default'].createElement(
              'li',
              null,
              _reactAddons2['default'].createElement(
                'a',
                null,
                _reactAddons2['default'].createElement('em', null)
              )
            )
          )
        )
      );
    }
  }]);

  return TopNavbar;
})(_reactAddons2['default'].Component);

TopNavbar.defaultProps = {
  dropdownItems: [{ name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four' }]
};

exports['default'] = TopNavbar;
module.exports = exports['default'];