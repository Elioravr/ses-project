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

  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  renderButtons() {
    const {buttons, nextStep} = this.props

    return buttons.map((button, index) => {
      const {text, ...restOfButtonProps} = button
      const props = {
        ...restOfButtonProps,
        labels: {
          text: text
        },
        callbacks: {
          onClick: (buttonValue) => {
            nextStep(buttonValue)
          }
        }
      }

      return <Button {...props} key={index} />
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
    return (
      <div className="buttons-container">
        <Section {...this.props} loaded={this.state.loaded}>
          {this.renderContent()}
        </Section>
      </div>
    )
  }
}
