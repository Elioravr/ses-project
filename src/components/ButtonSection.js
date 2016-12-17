import React, { Component, PropTypes } from 'react';

import Button from './Button'
import Section from './Section'

export default class ButtonSection extends Component {

  static propTypes = {
    buttons: PropTypes.array.isRequired,
    labels: PropTypes.shape({
      mainTitle: PropTypes.string,
      subTitle: PropTypes.string,
    }),
    hasBorderEffect: PropTypes.bool
  }

  renderButtons() {
    const {buttons} = this.props

    return buttons.map((button, index) => {
      const props = {
        labels: {
          text: button.text
        }
      }

      return <Button key={index} {...props}/>
    })
  }

  renderContent() {
    return (
      <div className={`buttons-container`}>
        {this.renderButtons()}
      </div>
    )
  }

  render() {
    return <Section
      content={this.renderContent()}
      {...this.props}
    />
  }
}
