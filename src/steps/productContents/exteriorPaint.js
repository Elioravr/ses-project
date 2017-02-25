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
  'dimensions': {
    questions: [
      {
        name: 'floors',
        text: 'How many floors is your house?',
        options: [
          {text: '1', value: 1},
          {text: '2', value: 2},
          {text: '3', value: 3}
        ],
        shortText: 'Floors'
      },
      {
        name: 'homeSquareFoot',
        text: 'Please type your home square foot.',
        options: [
          {text: '500-700', value: 700},
          {text: '700-900', value: 900},
          {text: '900-1100', value: 1100},
          {text: '1100-1300', value: 1300},
          {text: '1300-1500', value: 1500},
          {text: '1500-1700', value: 1700},
          {text: '1700-1900', value: 1900},
          {text: '1900-2100', value: 2100},
          {text: '2100-2300', value: 2300},
          {text: '2300-2500', value: 2500}
        ],
        hintText: 'If you don’t know your home sq ft the easiest way to find it is on real estate websites such as Zillow or Trulia.',
        shortText: 'House Square Foot'
      },
      {
        name: 'garageSquareFoot',
        text: 'Please choose your garage square foot (if garage included).',
        options: [
          {text: '500-700', value: 700},
          {text: '700-900', value: 900},
          {text: '900-1100', value: 1100},
          {text: '1100-1300', value: 1300},
          {text: '1300-1500', value: 1500},
        ],
        optional: true,
        shortText: 'Garage Square Foot'
      },
    ]
  },
  'over-hang': {
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
        optional: true,
        text: 'How many windows to paint?',
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
