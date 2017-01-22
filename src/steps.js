import ButtonSection from './components/ButtonSection';
import ItemChooserSection from './components/ItemChooserSection';
import {stepsContent} from './stepsContent.js';

export const steps = [
  {
    sectionName: "welcome",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Welcome",
      subTitle: "Where would you like to renovate in your house?"
    },
    buttons: stepsContent.welcome.buttons
  },
  {
    sectionName: "what",
    sectionComponent: ItemChooserSection,
    labels: {
      mainTitle: "What?",
      subTitle: "Where would you like to renovate in your house?"
    },
    options: stepsContent.what.options
  },
  {
    sectionName: "which",
    hasBorderEffect: true,
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Which?",
      subTitle: "Which kind of roof would you like to renovate in your house?"
    },
    buttons: stepsContent.which.buttons
  }
]
