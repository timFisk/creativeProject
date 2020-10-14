document.getElementById("starsPicSubmit").addEventListener('click', function(event) {
  event.preventDefault();
  const value = document.getElementById("starsPic").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.nasa.gov/planetary/apod?api_key=45DIG57punBuEk4cQkROVHxJXYbqLie6D9YOxaZs";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<img src="' + json.url + '" style="width:100%" />';
      results += '<h5 style="text-align:center">' + json.title + '</h5>';
      results += '<p>' + json.explanation + '</p>';
      document.getElementById("starsPic").innerHTML = results;
    })
});
