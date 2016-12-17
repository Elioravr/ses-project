import React, { Component, PropTypes } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

export default class StepperContainer extends Component {

  static propTypes = {
    steps: PropTypes.array.isRequired
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

    return steps[stepIndex].title
  }

  renderStepLabels(stepIndex) {
    const {steps} = this.props

    return (
      <StepLabel>{steps[stepIndex].content}</StepLabel>
    )
  }

  render() {
    const {finished, stepIndex} = this.state
    const contentStyle = {margin: '0 16px'}

    return (
      <div>
        <div className="stepper-container">
          <Stepper activeStep={stepIndex} className="stepper">
            <Step className="step">
              {this.renderStepLabels(stepIndex)}
            </Step>
          </Stepper>
        </div>
        <div style={contentStyle}>
           {this.renderStepContent(stepIndex)}
        </div>
      </div>
    )
  }
}
