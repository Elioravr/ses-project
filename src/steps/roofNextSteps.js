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
  }
]
