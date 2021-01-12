export { SET_CAR_INFO }

function SET_CAR_INFO (state, data) {
  state.car = data
  // Live Version
  // Needed to bypass the cors error call back during preflight api call
  /* const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'http://api.carmd.com/v3.0/decode?vin=1GNALDEK9FZ108495'
  fetch(proxyurl + url, {
    headers: new Headers({
      'content-type': 'application/json',
      'authorization': 'Basic OWVlMTA1ZDQtYjdjZi00ZDMxLTliMmMtYzNkNmEyMDIwZmFj',
      'partner-token': 'ced012aafbd145638b73c940cd7c0788'
    })
  }) */
  // End of Live version
  // Test Version
  /*  const proxyurl = ''
  const url = '../../Api/vinDecoder.json'
  fetch(proxyurl + url, {
    headers: new Headers({
      'content-type': 'application/json',
      'authorization': 'Basic OWVlMTA1ZDQtYjdjZi00ZDMxLTliMmMtYzNkNmEyMDIwZmFj',
      'partner-token': 'ced012aafbd145638b73c940cd7c0788'
    })
  })
    // End of test version
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status)
      }
      return response.json()
    })
    .then(json => {
      state.car = json.data
    })
    .catch(function () {
      this.dataError = true
    })  */
  // Make a request for a user with a given ID
  /*  axios.get('../../Api/vinDecoder.json', {
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
        console.log(response)
        state.car = response.data.data
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function (response) {
        // always executed
        // state.car = json.data
        console.log(state.car)
      }) */
}
