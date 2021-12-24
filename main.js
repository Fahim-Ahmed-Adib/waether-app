//API Key - 0be74eef511d40ac33e5fc8f1759fed7
let selection = document.getElementById("selection");
const key = "0be74eef511d40ac33e5fc8f1759fed7";
selection.addEventListener("change", (e) => {
  l = selection.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${l}&appid=${key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp = Math.ceil(data.main.temp_min - 273);
      desc = data.weather[0];
      humidity = data.main.humidity;
      pressure = data.main.pressure;
      wind = data.wind;
      country = data.sys.country;
      coord= data.coord;
      tmpDiv = document.getElementById("temp");
      tmpDiv.innerHTML = `<h1 class='text-center'>${temp}<sup><small>°C</small></sup></h1><br><p class="fs-4">${desc.description}</p>`
      tmpDiv = document.getElementById("details");
      tmpDiv.innerHTML = `<p class='fs-4'>Humidity - ${humidity}</p><p class='fs-4>Pressure - ${pressure}</p>`
    });
});
