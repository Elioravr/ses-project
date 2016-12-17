import React, { Component, PropTypes } from 'react';

import Section from './Section'

export default class ButtonSection extends Component {

  static propTypes = {
    buttons: PropTypes.array.isRequired,
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
    hasBorderEffect: PropTypes.bool
  }

  renderButtons() {
    const {buttons} = this.props

    return buttons.map((button, index) => {
      return <Button {...button}/>
    })
  }

  renderContent() {
    return <div className={`buttons-container ${this.state.loaded ? 'visible' : ''}`}>
      this.renderButtons()
    </div>
  }

  render() {
    <Section
      content={renderContent()}
      {...this.props}
    />
  }
}
