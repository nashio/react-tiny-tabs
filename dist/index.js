(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './scss/index.scss'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./scss/index.scss'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tabs = exports.Content = exports.Nav = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  var DEFAULTS = {
    index: 1,
    mainClass: 'tabs-container'
  };

  // DOC: custom attributes get inherited
  // add aria-roles or additonal classes
  var createSection = function createSection(sectionName) {
    return function (props) {
      var handleClick = props.handleClick,
          index = props.index,
          className = props.className,
          settings = props.settings,
          other = _objectWithoutProperties(props, ['handleClick', 'index', 'className', 'settings']);

      var autoWrapClass = settings.autoWrap ? 'auto-wrap' : '';
      return _react2.default.createElement(
        'div',
        _extends({ className: sectionName + ' ' + (className || '') + ' ' + autoWrapClass }, other),
        _react2.default.Children.map(props.children, function (child, i) {
          var active = i === props.index ? 'active' : '';
          var style = active ? { color: settings.color, background: settings.bgColor } : {};
          var handleClick = props.handleClick ? props.handleClick.bind(null, i) : null;
          return _react2.default.cloneElement(child, {
            key: i,
            className: sectionName + '-item ' + active + ' ' + (child.props.className || ''),
            onClick: handleClick,
            style: style
          });
        })
      );
    };
  };

  var withTabs = function withTabs(TabsWrapper, settings) {
    return function (_Component) {
      _inherits(WithTabs, _Component);

      function WithTabs(props) {
        _classCallCheck(this, WithTabs);

        var _this = _possibleConstructorReturn(this, (WithTabs.__proto__ || Object.getPrototypeOf(WithTabs)).call(this, props));

        _this.state = {
          index: settings.index
        };
        _this.settings = settings;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
      }

      _createClass(WithTabs, [{
        key: 'handleClick',
        value: function handleClick(index) {
          this.setState({ index: index });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(TabsWrapper, {
            className: settings.mainClass,
            index: this.state.index,
            handleClick: this.handleClick
          });
        }
      }]);

      return WithTabs;
    }(_react.Component);
  };

  var Tabs = function Tabs(props) {
    var settings = Object.assign({}, DEFAULTS, props.settings);
    var TabsWrapper = function TabsWrapper(p) {
      var classes = p.className + ' ' + (props.className || '');
      var styles = Object.assign({}, props.style, p.style);
      return _react2.default.createElement(
        'div',
        { className: classes, style: styles },
        _react2.default.createElement(
          'div',
          { className: 'wrapper ' + (settings.autoWrap && 'auto-wrap') + ' ' },
          _react2.default.cloneElement(props.children[0], {
            index: p.index,
            handleClick: p.handleClick,
            settings: settings
          }),
          _react2.default.cloneElement(props.children[1], {
            index: p.index,
            settings: settings
          })
        )
      );
    };
    var TabsClass = withTabs(TabsWrapper, settings);
    return _react2.default.createFactory(TabsClass)();
  };

  Tabs.propTypes = {
    children: _propTypes2.default.arrayOf(_propTypes2.default.object.isRequired).isRequired,
    settings: _propTypes2.default.object
  };

  var Nav = createSection('tab-nav');
  var Content = createSection('tab-panel');

  exports.Nav = Nav;
  exports.Content = Content;
  exports.Tabs = Tabs;
});