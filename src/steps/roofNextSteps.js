import ButtonSection from 'components/ButtonSection';
import QuestionSection from 'components/QuestionSection';
import {roofContent} from './productContents/roof';

export default [
  {
    sectionName: "which",
    hasBorderEffect: true,
    getTitleFromLastValue: true,
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Which?",
      subTitle: "Which kind of roof would you like to renovate in your house?"
    },
    buttons: roofContent['which'].buttons
  },
  {
    sectionName: "slope",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Slope",
      subTitle: "Please choose your roof slope"
    },
    buttons: roofContent['slope'].buttons
  },
  {
    sectionName: "over-hang",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Over Hang",
      subTitle: "Please choose your roof over hang"
    },
    buttons: roofContent['over-hang'].buttons
  },
  {
    sectionName: "dimensions",
    sectionComponent: QuestionSection,
    labels: {
      mainTitle: "House Dimensions",
      subTitle: "How big is your house?"
    },
    questions: roofContent['dimensions'].questions
  }
]
