import React, { Component, PropTypes } from 'react'
import {transform} from 'lodash'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import 'style/QuestionSection.scss'

const PAGE_WIDTH = 500

export default class QuestionSection extends Component {
  static propTypes = {
    labels: PropTypes.shape({
      subTitle: PropTypes.string.isRequired
    }),
    questions: PropTypes.array.isRequired
  }

  componentWillMount() {
    const {questions} = this.props

    this.state = {
      questionValues: transform(questions, (result, question) => {
        return result[question.name] = {
          result: {
            value: null,
            text: question.shortText
          },
          optional: question.optional
        }
      }, {})
    }
  }

  onChange = (question, value) => {
    const {questionValues} = this.state
    const {name} = question

    const newState = {
      questionValues: {
        ...questionValues,
        [name]: {
          ...questionValues[name],
          result: {
            ...questionValues[name].result,
            value
          }
        }
      }
    }

    this.setState(newState)
  }

  onClick = () => {
    const {nextStep} = this.props
    const {questionValues} = this.state

    nextStep(questionValues)
  }

  isValid = () => {
    const {questionValues} = this.state
    let isValid = true

    Object.keys(questionValues).forEach((key) => {
      const {optional, result: {value}} = questionValues[key]
      isValid = isValid && (optional || value)
    })

    return isValid
  }

  renderQuestions() {
    const {questions} = this.props
    const {questionValues} = this.state

    const questionStyle = {
      width: PAGE_WIDTH
    }

    return questions.map((question, index) => {
      const {result: {value}} = questionValues[question.name]
      const requiredClass = `required ${value && 'answered'}`

      return (
        <div key={index} className="question-container">
          {!question.optional && <div className={requiredClass}>*</div>}
          <SelectField
            onChange={(e, index, newValue) => {this.onChange(question, newValue)}}
            value={value}
            style={questionStyle}
            iconStyle={{fill: "#333"}}
            maxHeight={200}
            hintText={question.text}
            floatingLabelText={question.text}
            floatingLabelStyle={{color: "#333", left: '0'}}
            underlineStyle={{borderColor: "rgba(0, 0, 0, 0.36)"}}
            underlineFocusStyle={{borderColor: "#333"}}>
            {
              question.options.map(({value: optionValue, text}, index) => {
                return <MenuItem key={index} value={optionValue} primaryText={text} />
              })
            }
          </SelectField>
          {question.hintText && <div className="question-hint">{question.hintText}</div>}
        </div>
      )
    })
  }

  render() {
    const {labels: {subTitle}} = this.props
    return (
      <div className="question-section-container">
        <div className="sub-title">{subTitle}</div>
        <div className="questions-container">
          {this.renderQuestions()}
        </div>
          <FlatButton
            className={`submit-button ${this.isValid() ? 'visible' : ''}`}
            backgroundColor="rgba(255, 255, 255, 0.4)"
            hoverColor="rgba(255, 255, 255, 0.7)"
            style={{color: '#333', width: PAGE_WIDTH}}
            onClick={this.onClick}
          >
            {this.props.nextButtonText || "Continue"}
          </FlatButton>
      </div>
    )
  }
}
