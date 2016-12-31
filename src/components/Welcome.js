import React, { Component } from 'react';

import {welcome} from '../config.json'
import ButtonSection from './ButtonSection'

export default class Welcome extends Component {
  render() {
    const props = {
      ...welcome,
      callbacks: {
        onClick: () => {
          console.log("onClick");
        }
      }
    }

    return (
      <ButtonSection {...props}/>
    )
  }
}
