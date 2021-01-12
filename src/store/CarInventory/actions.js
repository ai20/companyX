import axios from 'axios'

export { setCarInventory, getCarInfo }

function setCarInventory (context, car) {
/*  fetch('http://localhost:8083/Api/cars.json')
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
    }) */

  axios.get('https://github.com/ai20/companyX/blob/master/src/Api/cars.json', {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
      // 'api-key': '9038-203809340-98'
    },
    params: {
      token: 'ABX57MO2DNEMQTCI4MMW5LK77XMDK'
    }
  })
    .then(function (response) {
      // handle success
      // console.log(response)
      // console.log('fdfgfd')
      // console.log(response.data.data)
      // state.car = response.data.data
      context.commit('setCarInventory', response.cars)
    })
    .catch(function (error) {
      // handle error
      // eslint-disable-next-line no-console
      console.log(error)
    })
    .then(function (response) {
      // always executed
      // state.car = json.data
      // console.log(state.car)
    })
}

function getCarInfo (context) {
  return context.commit('getCarInfo')
}
