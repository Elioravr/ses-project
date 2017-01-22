import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {getCurrentStepOptions} from '../reducers/selectors'
import '../style/ItemChooserSection.css';

class ItemChooserSection extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    labels: PropTypes.shape({
      subTitle: PropTypes.string.isRequired
    }),
    callbacks: PropTypes.shape({
      nextStep: PropTypes.func.isRequired
    }),
    nextButtonText: PropTypes.string,
    subTitleElement: PropTypes.object,
    lastStepValue: PropTypes.string,
  }

  state = {
    value: 0,
  };

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  onClick = () => {
    const {nextStep} = this.props
    const {value} = this.state

    nextStep(value)
  }

  renderMenuItems() {
    const {options} = this.props;

    const optionsWithPlaceHolder = [
      {
        text: "Please Choose Item",
        value: 0
      },
      ...options
    ]

    return optionsWithPlaceHolder.map((option, index) => {
      return(<MenuItem key={index} value={option.value} primaryText={option.text} />)
    })
  }

  render() {
    const {labels: {subTitle}} = this.props

    return (
      <div className="items-chooser-section">
        <div className="title sub-title">{subTitle}</div>
        <SelectField
          value={this.state.value}
          className="items-select"
          onChange={this.handleChange}
          labelStyle={{color: '#333'}}
          style={{margin: '30px 0'}}
        >
          {this.renderMenuItems()}

        </SelectField>
        <div className={`controls-container ${this.state.value !== 0 ? 'visible' : ''}`}>
          <FlatButton
            backgroundColor="rgba(255, 255, 255, 0.4)"
            hoverColor="rgba(255, 255, 255, 0.7)"
            style={{color: '#333', width: '80%'}}
            onClick={this.onClick}
          >
            {this.props.nextButtonText ? this.props.nextButtonText : "Continue"}
          </FlatButton>
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    options: getCurrentStepOptions(store)
  }
})(ItemChooserSection);
