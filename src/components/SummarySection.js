import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getStepValues} from 'store/reducers/selectors'
import 'style/SummarySection.scss'

export class SummarySection extends Component {
  static propTypes = {
    stepValues: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props)
    return (
      <div className="summary-container">
        <label>Total:</label>
        <span>{this.props.stepValues.summary.result.value}</span>
      </div>
    )
  }
}

export default connect((state) => ({
  stepValues: getStepValues(state)
}))(SummarySection)
