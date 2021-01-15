import axios from 'axios'

export { setCarInventory, getCarInfo }

function setCarInventory (context, car) {
  axios.get('http://localhost:3000/cars')
    .then(function (response) {
      // handle success
      // eslint-disable-next-line no-console
      console.log(response.data)
      context.commit('setCarInventory', response.data)
    })
    .catch(function (error) {
      // handle error
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

function getCarInfo (context) {
  return context.commit('getCarInfo')
}
