console.log('hi')

function getDataFromAPI() {
  var query = {
    q: 'New York',
    api_key: '3b2964ab014c461d0c9566fca9d1b89d',
  }
$.getJSON('http://api.openweathermap.org/data/2.5/weather',query,
function(data) {console.log(data)})

}
getDataFromAPI()
