import React, { Component, PropTypes } from 'react';

import {welcome} from '../config.json'
import ButtonSection from './ButtonSection'

export default class Welcome extends Component {
  render() {
    const props = {
      labels: welcome.labels,
      buttons: welcome.buttons
    }

    return (
      <ButtonSection {...props}/>
    )
  }
}
