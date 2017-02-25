import ButtonSection from 'components/ButtonSection';
import QuestionSection from 'components/QuestionSection';
import SummarySection from 'components/SummarySection'
import {extPaintContent} from '../productContents/exteriorPaint';

export default [
  {
    sectionName: "paint-type",
    sectionComponent: ButtonSection,
    hasBorderEffect: true,
    labels: {
      mainTitle: "Paint Type",
      subTitle: "Please choose your paint type"
    },
    buttons: extPaintContent['paint-type'].buttons
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
    sectionName: "overHang",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Over Hang",
      subTitle: "Please choose your roof over hang"
    },
    buttons: extPaintContent.overHang.buttons
  },
  {
    sectionName: "windows",
    sectionComponent: QuestionSection,
    labels: {
      mainTitle: "Windows",
      subTitle: "How many windows do you have in your house?"
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
