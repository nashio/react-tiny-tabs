import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/index.scss';

const DEFAULTS  = {
  index: 0,
  mainClass: 'tabs-container',
  contentWrap: false,
  bottomNav: false
};

// Handle state here
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

// Put togethermain component here
const Tabs = (props) => {
  const settings = {...DEFAULTS, ...props.settings};

  const TabsUI = (p) => {
    const classes = `${p.className} ${props.className || ''}`;
    const styles = {...props.style, ...p.style};

    const Nav = React.cloneElement(props.children[0], {
      index: p.index,
      handleClick: p.handleClick,
      settings
    });
    const Panels = React.cloneElement(props.children[1], {
      index: p.index,
      settings
    });
    const wrapperClass = `wrapper ${settings.contentWrap
        && 'content-wrap'} ${settings.bottomNav && 'bottom-nav'}`;
    return (
      <div className={classes} style={styles}>
        <div className={wrapperClass}>{Nav}{Panels}</div>
      </div>
    );
  };
  return React.createFactory(withTabs(TabsUI, settings))();
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  settings: PropTypes.object
};

// DOC: custom attributes get inherited
const createSection = (sectionName) =>
  (props) => {
    const {handleClick, index, className, settings, ...other} = props;

    // create each element/child of the section (Nav or Content)
    return (
      <div className={`${sectionName} ${className || ''}`} {...other}>
      {React.Children.map(props.children, (child, i) => {
        console.log('i: ', i, 'props.index:', props.index);
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


const Nav = createSection('tab-nav');
const Content = createSection('tab-panel');

export {
  Nav,
  Content,
  Tabs
};


