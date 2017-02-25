import ButtonSection from 'components/ButtonSection';
import QuestionSection from 'components/QuestionSection';
import SummarySection from 'components/SummarySection'
import {extPaintContent} from './productContents/exteriorPaint';

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
    buttons: extPaintContent['which'].buttons
  },
  {
    sectionName: "dimensions",
    sectionComponent: QuestionSection,
    labels: {
      mainTitle: "House Dimensions",
      subTitle: "How big is your house?"
    },
    questions: extPaintContent['dimensions'].questions
  },
  {
    sectionName: "over-hang",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Over Hang",
      subTitle: "Please choose your roof over hang"
    },
    buttons: extPaintContent['over-hang'].buttons
  },
  {
    sectionName: "paint-type",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Paint Type",
      subTitle: "Please choose your paint type"
    },
    buttons: extPaintContent['paint-type'].buttons
  },
  {
    sectionName: "windows",
    sectionComponent: QuestionSection,
    labels: {
      mainTitle: "Windows",
      subTitle: "How many windows would you like to paint?"
    },
    questions: extPaintContent['windows'].questions
  },
  {
    sectionName: 'summary',
    sectionComponent: SummarySection,
    labels: {
      mainTitle: 'Price!',
      subTitle: 'This is the price it is going to cost for you'
    }
  }
]
