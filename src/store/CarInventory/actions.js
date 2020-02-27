export { setCarInventory, getCarInfo }

function setCarInventory (context, car) {
  fetch('../../Api/cars.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status)
      }
      return response.json()
    })
    .then(json => {
      context.commit('setCarInventory', json.cars)
    })
    .catch(function () {
      this.dataError = true
    })
}

function getCarInfo (context) {
  return context.commit('getCarInfo')
}
