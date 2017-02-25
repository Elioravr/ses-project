import ButtonSection from 'components/ButtonSection';
import ItemChooserSection from 'components/ItemChooserSection';
import {stepsContent} from './stepsContent';
import roofNextSteps from './roofNextSteps';
import extPaintNextSteps from './extPaintNextSteps';

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
    continueWithLastValueSteps: true,
    sectionComponent: ItemChooserSection,
    labels: {
      mainTitle: "What?",
      subTitle: "Where would you like to renovate in your house?"
    },
    options: stepsContent.what.options
  }
]

export const nextSteps = {
  roof: roofNextSteps,
  'exterior-paint': extPaintNextSteps
}
