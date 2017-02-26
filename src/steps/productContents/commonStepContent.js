export const dimensions = {
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
}
