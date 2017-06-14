var state = {
  temp: "",
  city: "",
  conditions: "",
  image:""
}

function getDataFromAPI() {
$.getJSON('https://api.apixu.com/v1/current.json?key=ed00f63863b94ac5a79222241171306&q=New+York',
      function(data) {
      console.log(data)
      handleData(data)
      renderData(state)
    })
};

getDataFromAPI()

function handleData(data) {
  state.conditions = data.current.condition.text
  state.temp = data.current.temp_f + '°'
  state.city = data.location.name
  state.image = 'https:' + data.current.condition.icon
}

function renderData(state) {
  var weatherData = '<img class=weatherimage src=' + state.image + '>' +
  '<p class=temp >' + state.temp + '</p>' +
  '<p class=city >' + state.city + '</p>'
  $('.weather-data').html(weatherData)
}
