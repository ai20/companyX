export { setCarInfo }

function setCarInfo (state, data) {
  console.log('wwwww')
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
  const proxyurl = ''
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
    })
}
