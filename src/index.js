import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/index.scss';

const DEFAULTS  = {
  index: 1,
  mainClass: 'tabs-container'
};

// DOC: custom attributes get inherited
// add aria-roles or additonal classes
const createSection = (sectionName) =>
  (props) => {
    const {handleClick, index, className, settings, ...other} = props;
    const autoWrapClass = settings.autoWrap ? 'auto-wrap' : '';
    return (<div className={`${sectionName} ${className || ''} ${autoWrapClass}`} {...other}>
    {React.Children.map(props.children, (child, i) => {
      const active = i === props.index ? 'active' : '';
      const style = active ? {color: settings.color, background: settings.bgColor} : {};
      const handleClick = props.handleClick ? props.handleClick.bind(null, i) : null;
      return React.cloneElement(child, {
        key: i,
        className: `${sectionName}-item ${active} ${child.props.className || ''}`,
        onClick: handleClick,
        style,
      })
    })}
    </div>
    )
  };

const withTabs = (TabsWrapper, settings) => {
  return class WithTabs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: settings.index
      };
      this.settings = settings;
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
      this.setState({ index });
    }

    render() {
      return (
        <TabsWrapper
          className={settings.mainClass}
          index={this.state.index}
          handleClick={this.handleClick}
        />
      );
    }
  }
};

const Tabs = (props) => {
  const settings = Object.assign({}, DEFAULTS, props.settings);
  const TabsWrapper = (p) => {
    const classes = `${p.className} ${props.className || ''}`;
    const styles = Object.assign({}, props.style, p.style);
    return (<div className={classes} style={styles}>
      <div className={`wrapper ${settings.autoWrap && 'auto-wrap'} `}>
        {React.cloneElement(props.children[0], {
          index: p.index,
          handleClick: p.handleClick,
          settings
        })}
        {React.cloneElement(props.children[1], {
          index: p.index,
          settings
        })}
      </div>
    </div>);
  };
  const TabsClass = withTabs(TabsWrapper, settings);
  return React.createFactory(TabsClass)();
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  settings: PropTypes.object
};

const Nav = createSection('tab-nav');
const Content = createSection('tab-panel');

export {
  Nav,
  Content,
  Tabs
};


