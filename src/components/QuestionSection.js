import React, { Component, PropTypes } from 'react'
import {transform} from 'lodash'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import 'style/QuestionSection.css'

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
          value: null,
          optional: question.optional
        }
      }, {})
    }

    this.pageWidth = '500px'
  }

  onChange = (question, value) => {
    const {questionValues} = this.state
    const {name} = question

    const newState = {
      questionValues: {
        ...questionValues,
        [name]: {
          ...questionValues[name],
          value
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
      const question = questionValues[key]
      isValid = isValid && (question.optional || question.value)
    })

    return isValid
  }

  renderQuestions() {
    const {questions} = this.props

    const questionStyle = {
      width: this.pageWidth
    }

    return questions.map((question, index) => {
      return (
        <div key={index} className="question-container">
          <TextField
            onChange={(e, newValue) => {this.onChange(question, newValue)}}
            style={questionStyle}
            hintText={question.text}
            floatingLabelText={question.text}
            floatingLabelFocusStyle={{color: "#333"}}
            underlineStyle={{borderColor: "rgba(0, 0, 0, 0.36)"}}
            underlineFocusStyle={{borderColor: "#333"}}
          />
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
            style={{color: '#333', width: this.pageWidth}}
            onClick={this.onClick}
          >
            {this.props.nextButtonText || "Continue"}
          </FlatButton>
      </div>
    )
  }
}
