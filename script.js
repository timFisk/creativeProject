document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=89f621ab942e3a96e2766b9cdc3459e5";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h2>Weather in ' + json.name + "</h2>";
      for (let i = 0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>Actual temp ' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      results += '<h3>Feels like ' + json.main.feels_like + "&deg;F</h3>"
      for (let i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += '<p>You also did not know you wanted this but this wind speed is ' + json.wind.speed + "mph.</p>"
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });

  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=89f621ab942e3a96e2766b9cdc3459e5";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let forecast = "";
      forecast += "<h2>Here's the weather for the next few days.</h2>";
      for (let i = 0; i < json.list.length; i++) {
        forecast += "<h3>Weather in " + json.city.name + " on " + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h3>";
        forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});
