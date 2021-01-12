import axios from 'axios'

export { setCarInfo }

function setCarInfo (context, data) {
  // return context.commit('setCarInfo', data)
  axios.get('../../Api/vinDecoder.json', {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'api-key': '9038-203809340-98'
    },
    params: {
      ID: 12345
    }
  })
    .then(function (response) {
      // handle success
      // console.log(response)
      // console.log('fdfgfd')
      // console.log(response.data.data)
      // state.car = response.data.data
      context.commit('SET_CAR_INFO', response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function (response) {
      // always executed
      // state.car = json.data
      // console.log(state.car)
    })
}
