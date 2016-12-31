import React, { Component, PropTypes } from 'react';

export default class Section extends Component {
  static propTypes = {
    labels: PropTypes.shape({
      mainTitle: PropTypes.string,
      subTitle: PropTypes.string,
    }),
    hasBorderEffect: PropTypes.bool
  }

  renderMainTitle() {
    const {labels: {mainTitle}} = this.props

    if (mainTitle) {
      return <div className="title main-title">{mainTitle}</div>
    }
    else {
      return null;
    }
  }

  renderSubTitle() {
    const {labels: {subTitle}} = this.props

    if (subTitle) {
      return <div className="title sub-title">{subTitle}</div>
    }
    else {
      return null;
    }
  }

  renderBorderBottom() {
    const {hasBorderEffect, loaded} = this.props

    if (hasBorderEffect) {
      return <div className={`border-bottom ${loaded ? 'visible' : ''}`}></div>
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div className="section-container">
        {this.renderMainTitle()}
        {this.renderBorderBottom()}
        {this.renderSubTitle()}
        {this.props.children}
      </div>
    )
  }
}
