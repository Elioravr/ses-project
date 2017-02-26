import {floorsDiscount, overHangRatio, overHang, windowPrice} from '../content/extPaint/categories'
import {parseDimensions} from './utils'

export const getParams = ({overHangValue, dimensions, windows}) => {
  return  {
    windows: parseInt(windows.result.value || '0', 10),
    overHang: overHang[overHangValue.result.value],
    dimensions: parseDimensions(dimensions.result)
  }
}

export const calculate = (stepValues) => {
  const params = getParams({
    windows: stepValues.windows.result.windows,
    overHangValue: stepValues.overHang,
    dimensions: stepValues.dimensions,
  })
  const {dimensions} = params
  const surfaceSize = (dimensions.homeSquareFoot * dimensions.floors)
  const discountedSurfaceSize = surfaceSize - (surfaceSize * floorsDiscount[dimensions.floors])
  const surfaceWithGarage = discountedSurfaceSize + dimensions.garageSquareFoot
  const overHangedPrice = params.overHang !== 'noOverHang' ? surfaceWithGarage * overHangRatio : surfaceWithGarage
  const windowPriced = (params.windows * windowPrice) + overHangedPrice
  return {value: windowPriced, price: windowPriced}
}
