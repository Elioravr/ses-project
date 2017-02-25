export const parseDimensions = ({floors, homeSquareFoot, garageSquareFoot}) => {
  return {
    floors: parseInt(floors.result.value, 10),
    homeSquareFoot: parseInt(homeSquareFoot.result.value, 10),
    garageSquareFoot: parseInt(garageSquareFoot.result.value || '0', 10)
  }
}
