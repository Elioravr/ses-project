import ButtonSection from 'components/ButtonSection';
import {stepsContent} from './stepsContent';

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
    buttons: stepsContent['roof.which'].buttons
  },
  {
    sectionName: "slope",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Slope",
      subTitle: "Please choose your roof slope"
    },
    buttons: stepsContent['roof.slope'].buttons
  },
  {
    sectionName: "over-hang",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Roof Over Hang",
      subTitle: "Please choose your roof over hang"
    },
    buttons: stepsContent['roof.over-hang'].buttons
  }
]
