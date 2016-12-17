import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class ItemChooserSection extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    callbacks: PropTypes.shape({
      nextStep: PropTypes.func.isRequired
    }),
    nextButtonText: PropTypes.string,
    subTitleElement: PropTypes.object
    // <div className="title sub-title">What would you like to renovate in your house?</div>
  }

  state = {
    value: 0,
  };

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  renderMenuItems() {
    const {options} = this.props;

    options.map((option, index) => {
      return(<MenuItem key={index} value={option.value} primaryText="{option.text}" />)
    })
  }

  render() {
    return (
      <div className="items-chooser-section">
        <SelectField
          value={this.state.value}
          className="items-select"
          onChange={this.handleChange}
          labelStyle={{color: '#333'}}
          style={{margin: '30px 0'}}
          floatingLabelText="Please Choose Items"
        >
          {this.renderMenuItems()}

        </SelectField>
        <div className={`controls-container ${this.state.value !== 0 ? 'visible' : ''}`}>
          <FlatButton
            backgroundColor="rgba(255, 255, 255, 0.4)"
            hoverColor="rgba(255, 255, 255, 0.7)"
            style={{color: '#333', width: '80%'}}
            onClick={this.props.nextStep}
          >
            {this.props.nextButtonText ? this.props.nextButtonText : "Continue"}
          </FlatButton>
        </div>
      </div>
    )
  }
}
