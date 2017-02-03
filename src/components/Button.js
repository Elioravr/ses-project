import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  static propTypes = {
    callbacks: PropTypes.shape({
      onClick: PropTypes.func.isRequired
    }),
    labels: PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    buttonName: PropTypes.string
  }

  onClick = () => {
    const {buttonName, callbacks: {onClick}} = this.props
    onClick(buttonName)
  }

  render() {
    const {buttonName, className, labels: {text}} = this.props
    const classes = `button ${className} ${buttonName}`

    const style = {
      'backgroundImage': `url(${this.props.src})`
    }

    return (
      <div style={style} className={classes} onClick={this.onClick}>{text}</div>
    )
  }
}
