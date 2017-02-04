import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {moveToNextStep, moveStepBack} from 'store/actions/stepActions';
import {getSteps, getCurrentStepIndex} from 'store/reducers/selectors';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

import { createArrayPropType } from 'common'

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

    this.setState({
      finished: this.props.steps.length === currentStepIndex,
    })
  }

  handlePrev = () => {
    const {moveStepBack} = this.props
    moveStepBack()
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
    const {currentStepIndex} = this.props
    const contentStyle = {margin: '0 16px', width: '100%'}

    return (
      <div>
        <div className="stepper-container">
          <Stepper activeStep={currentStepIndex} className="stepper">
            {this.renderStepLabels()}
          </Stepper>
        </div>
        <div style={contentStyle}>
          {this.renderStepContent()}
        </div>
        <div className={`back-button ${currentStepIndex > 0 && 'visible'}`}
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
    currentStepIndex: getCurrentStepIndex(store)
  }
}, {
  moveToNextStep,
  moveStepBack
})(StepperContainer);
