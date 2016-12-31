import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  static propTypes = {
    callbacks: PropTypes.shape({
      onClick: PropTypes.func.isRequired
    }),
    labels: PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    className: PropTypes.string
  }

  render() {
    const {className, labels: {text}, callbacks: {onClick}} = this.props
    const classes = `button ${className}`

    const style = {
      'backgroundImage': `url(${this.props.src})`
    }

    return (
      <div style={style} className={classes} onClick={onClick}>{text}</div>
    )
  }
}
