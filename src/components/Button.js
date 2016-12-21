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
    console.log("======================");
    console.log(this.props);
    console.log("======================");
    const {className, labels: {text}, callbacks: {onClick}} = this.props
    const classes = `button ${className}`


    // If you want the button to have a specific background,
    // you can do it by css
    return (
      <div className={classes} onClick={onClick}>{text}</div>
    )
  }
}
