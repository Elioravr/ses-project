import React, { Component, PropTypes } from 'react';
import {concat} from 'lodash';

import Button from './Button'

export default class Section extends Component {
  static propTypes = {
    content: PropTypes.isRequired,
    // buttons: PropTypes.array.isRequired,
    // src, text, action
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
    hasBorderEffect: PropTypes.bool
  }

  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  renderMainTitle() {
    const {mainTitle} = this.props

    if (mainTitle) {
      return <div className="title main-title">{mainTitle}</div>
    }
    else {
      return null;
    }
  }

  renderSubTitle() {
    const {subTitle} = this.props

    if (subTitle) {
      return <div className="title sub-title">{subTitle}</div>
    }
    else {
      return null;
    }
  }

  renderBorderBottom() {
    const {hasBorderEffect} = this.props

    if (hasBorderEffect) {
      return <div className={`border-bottom ${this.state.loaded ? 'visible' : ''}`}></div>
    }
    else {
      return null;
    }
  }

  // <div className="button tile-roof" onClick={this.props.nextStep}>Tile</div>
  // <div className="button composite-shingles-roof" onClick={this.props.nextStep}>Composite Shingles</div>
  // <div className="button flat-roof" onClick={this.props.nextStep}>Flat</div>
  // <div className="button spanish-tile-roof" onClick={this.props.nextStep}>Spanish Tile</div>
  render() {
    const content = concat(this.props.content);

    return (
      <div className="section-container">
        this.renderMainTitle()
        this.renderBorderBottom()
        this.renderSubTitle()
        {content}
      </div>
    )
  }
}
Å
