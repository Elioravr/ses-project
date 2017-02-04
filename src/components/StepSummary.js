import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {getStepValues} from 'store/reducers/selectors'
import 'style/StepSummary.css';

class StepSummary extends Component {
  static propTypes = {
    stepValues: PropTypes.object.isRequired
  }

  renderValues() {
    const {stepValues} = this.props

    return Object.keys(stepValues).map((key, index) => {
      const currentValue = stepValues[key]

      return (
        <div key={index} className="value-container">
          <div className="value-title">{currentValue.mainTitle}</div>
          <div>{currentValue.result.text}</div>
        </div>
      )
    })
  }

  render() {
    const {isFinished} = this.props
    const className = `step-summary-container ${isFinished ? 'finished' : ''}`
    return (
      <div className={className}>
        <div className="main-title">What did you ordered?</div>
        {this.renderValues()}
      </div>
    )
  }
}

export default connect((state) => ({
  stepValues: getStepValues(state)
}))(StepSummary)
