import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/index.scss';

const DEFAULTS  = {
  index: 0,
  mainClass: 'tabs-container',
  contentWrap: false,
  bottomNav: false,
  color: '#555555',
  colorNoFocus: 'darkGray',
  bgColor: 'white'
};

// Handle state here
const withTabs = (TabsWrapper, settings) => {
  return class WithTabs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: settings.index,
        fade: true,
        switchDone: true,
        prevIdx: settings.index
      };
      this.handleClick = this.handleClick.bind(this);
    }

    switchTo(idx) {
      this.setState({
        index: idx,
        switchDone: false,
        fade: false
      });
    }

    handleClick(index) {
      if (this.transition) return;
      this.transition = true;
      this.switchTo(index);
      setTimeout(() => {
        this.setState({
          switchDone: true,
          fade: true,
          prevIdx: index
        });
        this.transition = false;
      }, settings.fadeTime || 0);
    }
    render() {
      const fade = settings.fadeTime ? 'fade' : '';
      const fadeClass = this.state.fade ? `${fade} fadeIn` : `${fade} fadeOut`;
      return (
        <TabsWrapper
          className={`${fadeClass} ${settings.mainClass}`}
          index={this.state.index}
          prevIdx={this.state.prevIdx}
          switchDone={this.state.switchDone}
          handleClick={this.handleClick}
        />
      );
    }
  }
};

// Constructs main component
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
      switchDone: p.switchDone,
      prevIdx: p.prevIdx,
      settings
    });
    const contentWrap = settings.contentWrap ? 'content-wrap' : '';
    const bottomNav = settings.bottomNav ? 'bottom-nav' : '';
    const wrapperClass = `wrapper ${contentWrap} ${bottomNav}`;
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

const createSection = (sectionName) =>
  (props) => {
    const {handleClick, children, index, prevIdx, switchDone, className, settings, ...other} = props;
    // create each element/child of the section (Nav or Content)
    return (
      <div className={`${sectionName} ${className || ''}`} {...other}>
      {React.Children.map(children, (child, i) => {
        let active = '';
        if (i === index && (switchDone || (sectionName === 'tab-nav')) ||
           (i === prevIdx && sectionName === 'tab-panel')) {
          active = 'active';
        }
        const {color, bgColor, borderTopColor} = settings;
        const style = active ? {color, background: bgColor, borderTopColor} : {};
        const handle = handleClick ? handleClick.bind(null, i) : null;
        return React.cloneElement(child, {
          key: i,
          className: `${sectionName}-item ${active} ${child.props.className || ''}`,
          onClick: handle,
          style
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


