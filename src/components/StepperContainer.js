import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {moveToNextStep} from '../actions/stepActions';
import {getSteps, getCurrentStepIndex} from '../reducers/selectors';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

import { createArrayPropType } from '../common'

class StepperContainer extends Component {
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
    }),
    currentStepIndex: PropTypes.number.isRequired
  }

  state = {
    finished: false,
  }

  handleNext = (lastStepValue) => {
    const {currentStepIndex, dispatch} = this.props
    dispatch(moveToNextStep(lastStepValue))

    this.setState({
      finished: this.props.steps.length === currentStepIndex,
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
      nextStep: (lastStepValue) => {
        this.setState({lastStepValue})
        this.handleNext(lastStepValue)
      },
      options: steps[stepIndex]
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
    const {currentStepIndex} = this.props
    const contentStyle = {margin: '0 16px'}

    return (
      <div>
        <div className="stepper-container">
          <Stepper activeStep={currentStepIndex} className="stepper">
            {this.renderStepLabels(currentStepIndex)}
          </Stepper>
        </div>
        <div style={contentStyle}>
          {this.renderStepContent(currentStepIndex)}
        </div>
      </div>
    )
  }
}


export default connect((store) => {
  return {
    steps: getSteps(store),
    currentStepIndex: getCurrentStepIndex(store)
  }
})(StepperContainer);
