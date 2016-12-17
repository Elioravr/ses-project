import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  static propTypes = {
    callbacks: PropTypes.shape({
      onClick: PropTypes.func.isRequired
    }),
    labels: PropTypes.shape({
      buttonText: PropTypes.string.isRequired
    }),
    className: PropTypes.string
  }

  render() {
    const {className, {labels: buttonText}, {callbacks: onClick}} = this.props
    const classes = `button ${className}`

    // If you want the button to have a specific background,
    // you can do it by css
    return (
      <div className="{classes}" onClick={onClick}>{buttonText}</div>
    )
  }
}
