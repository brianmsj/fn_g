var state = {
  temp: "",
  city: "",
  conditions: "",
  image:""
}

function getDataFromAPI() {
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("Access-Control-Allow-Origin:*");
    },
    dataType: "jsonp",
    url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=3b2964ab014c461d0c9566fca9d1b89d&q=New+York&units=imperial',
    success: function(data) {
      handleData(data)
      weatherImage(state)
      renderData(state)
    }
});
}
getDataFromAPI()

function weatherImage(state) {
  if(state.conditions === 'Clouds') {
    state.image = 'images/cloudy.png'
  }
  if(state.conditions === 'Sunny') {
    state.image = 'images/sunny.png'
  }
  if(state.conditions === 'Drizzle' || 'Rain') {
    state.image = 'images/rain.png'
  }
  if(state.conditions === 'Storms') {
    state.image = 'images/thunderstorm.png'
  }
  else {
    state.image = 'images/partly-cloudy.png'
  }
}
function handleData(data) {
  state.conditions = data.weather[0].main
  state.temp = data.main.temp.toString().slice(0,2) + '°'
  state.city = data.name
}


function renderData(state) {
  var weatherData = '<img class=weatherimage src=' + state.image + '>' +
  '<p class=temp >' + state.temp + '</p>' +
  '<p class=city >' + state.city + '</p>'
  $('.weather-data').html(weatherData)
}
