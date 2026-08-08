async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "a07f04095d7e1817ca3029939e6994f8"; // तुम्हारी API key fix
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
   if (data.cod === 200) {
  const icon = data.weather[0].icon;
  document.getElementById("result").innerHTML =
    `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"> 
     <br>${data.name}: ${data.main.temp}°C, ${data.weather[0].description} 
     <br>Humidity: ${data.main.humidity}% 
     <br>Wind: ${data.wind.speed} m/s 
     <br>Feels Like: ${data.main.feels_like}°C`;

  // 🔹 Background change code
  if (data.weather[0].main === "Rain") {
    document.body.style.backgroundImage = "url('rainy.jpg')";
  } else if (data.weather[0].main === "Clear") {
    document.body.style.backgroundImage = "url('sunny.jpg')";
  } else {
    document.body.style.backgroundImage = "url('default.jpg')";
  }

} else {
  document.getElementById("result").innerHTML = "City not found!";
}
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching data!";
    console.error("Error:", error);
  }
}
