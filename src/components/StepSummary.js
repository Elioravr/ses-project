import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {getStepValues} from 'store/reducers/selectors'
import 'style/StepSummary.scss';

class StepSummary extends Component {
  static propTypes = {
    stepValues: PropTypes.object.isRequired
  }

  renderListOfResults(result) {
    return (
      <ul className="list-of-answers">
        {
          Object.values(result).map(({result}, index) => {
            if (!result.value) {
              return null
            }

            return (
              <li key={index}>
                <div>{`${result.text}: ${result.value}`}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  renderValues() {
    const {stepValues} = this.props

    return Object.keys(stepValues).map((key, index) => {
      const {result, result: {value, text}, mainTitle} = stepValues[key]

      return (
        <div key={index} className="value-container">
          <div className="value-title">{mainTitle}</div>
          <div>{value ? text : this.renderListOfResults(result)}</div>
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
