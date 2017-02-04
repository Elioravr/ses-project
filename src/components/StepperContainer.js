import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {moveToNextStep, moveStepBack} from 'store/actions/stepActions';
import {getSteps, getCurrentStepIndex, getIsStepsFinished} from 'store/reducers/selectors';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

import { createArrayPropType } from 'common'
import StepSummary from './StepSummary'

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

  isNotFirstStep = () => {
    const {currentStepIndex} = this.props
    return currentStepIndex > 0
  }

  handleNext = (lastStepValue) => {
    const {steps, currentStepIndex, moveToNextStep} = this.props
    const {
      continueWithLastValueSteps,
      sectionName,
      labels: {
        mainTitle
      }
    } = steps[currentStepIndex]

    moveToNextStep(lastStepValue, {
      sectionName,
      mainTitle,
      continueWithLastValueSteps,
    })
  }

  handlePrev = () => {
    const {moveStepBack, steps, currentStepIndex} = this.props
    const lastStep = steps[currentStepIndex - 1]
    moveStepBack(lastStep)
  }

  renderStepContent() {
    const {steps, currentStepIndex} = this.props
    const CurrentContentComponent = steps[currentStepIndex].sectionComponent

    const props = {
      ...steps[currentStepIndex],
      nextStep: (lastStepValue) => {
        this.setState({lastStepValue})
        this.handleNext(lastStepValue)
      }
    }


    return <CurrentContentComponent {...props} />
  }

  renderStepLabels() {
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
    const {currentStepIndex, isFinished} = this.props
    const contentStyle = {margin: '0 16px', width: '100%'}

    return (
      <div className="wizard-container">
        {this.isNotFirstStep() && <StepSummary isFinished={isFinished} />}
        <div className="stepper-container">
          <Stepper activeStep={currentStepIndex} className="stepper">
            {this.renderStepLabels()}
          </Stepper>
        </div>
        <div className="section-container" style={contentStyle}>
          {!isFinished && this.renderStepContent()}
        </div>
        <div className={`back-button ${this.isNotFirstStep() && 'visible'}`}
             onClick={this.handlePrev}>
          <div className="arrow"></div>
          <div className="text">Go Back</div>
        </div>
      </div>
    )
  }
}


export default connect((store) => {
  return {
    steps: getSteps(store),
    currentStepIndex: getCurrentStepIndex(store),
    isFinished: getIsStepsFinished(store)
  }
}, {
  moveToNextStep,
  moveStepBack
})(StepperContainer);
