import {dimensions} from './commonStepContent'

export const extPaintContent = {
  'which': {
    buttons: [
      {
        text: "Stucco",
        src: "http://www.aucklandroofing.net.nz/communities/0/004/009/612/140//images/4625618265.jpg",
        buttonName: "stucco"
      },
      {
        text: "Wood Siding",
        src: "http://s3-production.bobvila.com/blogs/wp-content/uploads/2013/03/CertainTeed_Symphony-Composite-Slate-Roofing.jpg",
        buttonName: "woodSiding"
      }
    ]
  },
  dimensions,
  'overHang': {
    buttons: [
      {
        text: "No over hang",
        src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
        buttonName: "noOverHang"
      },
      {
        text: "Up to 8''",
        src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
        buttonName: "UpTo8"
      },
      {
        text: "8'' to 16''",
        src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
        buttonName: "8To16"
      },
      {
        text: "16'' to 32''",
        src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
        buttonName: "16To32"
      }
    ]
  },
  'paint-type': {
    buttons: [{
      text: "Exterior paint",
      src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
      buttonName: "extPaint"
    },
    {
      text: "Exterior coating",
      src: "https://s-media-cache-ak0.pinimg.com/originals/a5/29/b5/a529b589ecc55d0184a34e1de15be2bc.jpg",
      buttonName: "extCoat"
    }],
    questions: [
      {
        name: 'paintType',
        text: 'What kind of paint do you want?',
        options: [
          {text: 'Exterior paint', value: 'extPaint'},
          {text: 'Exterior coating', value: 'extCoat'},
        ],
        shortText: 'Paint Type'
      },
    ]
  },
  'windows': {
    questions: [
      {
        name: 'windows',
        text: 'Please select the number of windows in your house?',
        options: [
          {text: '1', value: 1},
          {text: '2', value: 2},
          {text: '3', value: 3},
          {text: '4', value: 4},
          {text: '5', value: 5},
          {text: '6', value: 6},
          {text: '7', value: 7},
          {text: '8', value: 8},
          {text: '9', value: 9},
          {text: '10', value: 10},
        ],
        shortText: 'Windows'
      },
    ]
  }
}
