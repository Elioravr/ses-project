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
    const {buttons, ...rest} = this.props

    return buttons.map((button, index) => {
      const {text, className} = button
      const props = {
        ...rest,
        className,
        labels: {
          text: text
        }
      }

      console.log("button props", props);
      const key = index

      return <Button {...props} key={key} />
      // return <div key={key}>elior</div>
    })
    // return <Button labels={props.labels} callbacks={callbacks} key={index} />
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
