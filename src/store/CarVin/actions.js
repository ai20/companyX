import axios from 'axios'

export { setCarInfo }

function setCarInfo (context, data) {
  // return context.commit('setCarInfo', data)
  axios.get('https://raw.githubusercontent.com/ai20/companyX/master/src/Api/vinDecoder.json', {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
      // 'api-key': '9038-203809340-98'
    },
    params: {
      token: 'ABX57MIGA4G2FZGHR57LGES77XFO4'
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
      // eslint-disable-next-line no-console
      console.log(error)
    })
    .then(function (response) {
      // always executed
      // state.car = json.data
      // console.log(state.car)
    })
}
