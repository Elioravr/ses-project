import React, { Component, PropTypes } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

import { createArrayPropType } from '../common'

export default class StepperContainer extends Component {
  static propTypes = {
    steps: PropTypes.arrayOf((propValue, key, componentName) => {
      const fields = {
        sectionName: 'string',
        sectionComponent: 'function', // Component class
        labels: {
          mainTitle: 'string',
          subTitle: 'string'
        }
      }

      return createArrayPropType(componentName, propValue[key], fields)
    })
  }

  state = {
    finished: false,
    stepIndex: 0,
  }

  handleNext = () => {
    const {stepIndex} = this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: this.props.steps.length === stepIndex,
    })
  }

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  }

  renderStepContent(stepIndex) {
    const {steps} = this.props
    const CurrentContentComponent = steps[stepIndex].sectionComponent

    const props = {
      ...steps[stepIndex],
      nextStep: (nextStepValue) => {
        this.setState({nextStepValue})
        this.handleNext()
      }
    }

    return <CurrentContentComponent {...props} />
  }

  renderStepLabels(stepIndex) {
    const {steps} = this.props

    return steps.map((step, index) => {
      return (
        <Step className="step" key={index}>
          <StepLabel>{step.labels.mainTitle}</StepLabel>
        </Step>
      )
    })
  }

  render() {
    const {stepIndex} = this.state
    const contentStyle = {margin: '0 16px'}

    return (
      <div>
        <div className="stepper-container">
          <Stepper activeStep={stepIndex} className="stepper">
            {this.renderStepLabels(stepIndex)}
          </Stepper>
        </div>
        <div style={contentStyle}>
          {this.renderStepContent(stepIndex)}
        </div>
      </div>
    )
  }
}
