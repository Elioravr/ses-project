import ButtonSection from './components/ButtonSection';
import ItemChooserSection from './components/ItemChooserSection';

export const steps = [
  {
    sectionName: "welcome",
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Welcome",
      subTitle: "Where would you like to renovate in your house?"
    },
    buttons: [
      {
        text: "Exterior",
        src: "http://mediacache.homeimprovementpages.com.au/creative/galleries/235001_240000/235801/557x418/94580.jpg",
        buttonName: "exterior"
      },
      {
        text: "Interior",
        src: "http://ecx.images-amazon.com/images/I/91VwILj26CL.jpg",
        buttonName: "interior"
      }
    ]
  },
  {
    sectionName: "what",
    sectionComponent: ItemChooserSection,
    labels: {
      mainTitle: "What?",
      subTitle: "Where would you like to renovate in your house?"
    },
    options: [
      { value: "roof", text: 'Roof' },
      { value: "windows", text: 'Windows' },
      { value: "exteriorPaint", text: 'Exterior Paint' },
      { value: "garden", text: 'Garden' },
      { value: "hardScope", text: 'Hard Scope' }
    ]
  },
  {
    sectionName: "which",
    hasBorderEffect: true,
    sectionComponent: ButtonSection,
    labels: {
      mainTitle: "Which?",
      subTitle: "Which kind of roof would you like to renovate in your house?"
    },
    buttons: [
      {
        text: "Tile",
        src: "http://www.aucklandroofing.net.nz/communities/0/004/009/612/140//images/4625618265.jpg",
        buttonName: "tile"
      },
      {
        text: "Composite Shingles",
        src: "http://s3-production.bobvila.com/blogs/wp-content/uploads/2013/03/CertainTeed_Symphony-Composite-Slate-Roofing.jpg",
        buttonName: "compositeShingles"
      },
      {
        text: "Flat",
        src: "http://soduspointroofing.com/wp-content/uploads/2013/06/flat-roof.gif",
        buttonName: "flat"
      },
      {
        text: "Spanish Tile",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Roof-Tile-3149.jpg",
        buttonName: "spanishTile"
      }
    ]
  },
]
