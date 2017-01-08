export function createArrayPropType(componentName, propValue, fields) {
  let error = undefined

  Object.keys(fields).forEach((key) => {
    if (typeof fields[key] === 'object') {
      error = createArrayPropType(componentName, propValue[key], fields[key])
    }
    else if (typeof propValue[key] !== fields[key]) {
      error = new Error(`Expected ${key} of component ${componentName} to be from type of ${fields[key]}`)
    }
  })

  return error
}
