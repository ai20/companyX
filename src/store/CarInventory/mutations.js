export { setCarInventory, setCarCategory }

function setCarCategory (state, carCat) {
  state.carCat += carCat
}

function setCarInventory (state, cars) {
  state.carInventory = cars
}
