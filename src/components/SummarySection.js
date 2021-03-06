import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {FormattedNumber} from 'react-intl';
import {getStepValues} from 'store/reducers/selectors'
import 'style/SummarySection.scss'

export class SummarySection extends Component {
  static propTypes = {
    stepValues: PropTypes.object.isRequired
  }

  render() {
    const {stepValues} = this.props
    const {summary} = stepValues
    const {result} = summary
    return (
      <div className="summary-container">
        <label>Total:</label>
        <FormattedNumber value={result.value} style="currency" currency="USD" />
      </div>
    )
  }
}

export default connect((state) => ({
  stepValues: getStepValues(state)
}))(SummarySection)
