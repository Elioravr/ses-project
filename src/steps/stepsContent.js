import { productContent } from './productContent'

export const stepsContent = {
  welcome: {
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
  what: {
    options: {
      exterior: [
        { value: "roof", text: 'Roof' },
        { value: "windows", text: 'Windows' },
        { value: "exteriorPaint", text: 'Exterior Paint' },
        { value: "garden", text: 'Garden' },
        { value: "hardScope", text: 'Hard Scope' }
      ],
      interior: [
        { value: "interior_roof", text: 'Interior_Roof' },
        { value: "interior_windows", text: 'Interior_Windows' },
        { value: "interior_exteriorPaint", text: 'Interior_Exterior Paint' },
        { value: "interior_garden", text: 'Interior_Garden' },
        { value: "interior_hardScope", text: 'Interior_Hard Scope' }
      ]
    },
    productContent
  }
}
