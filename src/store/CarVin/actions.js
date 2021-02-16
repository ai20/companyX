import axios from 'axios'

export { setCarInfo }

function setCarInfo (context, data) {
  axios.get('http://localhost:3000/' + data.state, {
    params: {
      q: data.plate
    }
  })
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response)
      // handle success
      context.commit('SET_CAR_INFO', response.data)
    })
    .catch(function (error) {
      // handle error
      // eslint-disable-next-line no-console
      console.log(error)
    })
}
