const apiKey = "c9bd74f7b57742d3b2c0f4a3e8546f9f";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    document.getElementById("cityName").textContent = `City: ${data.name}`;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    alert("Could not fetch weather for that city.");
  }
}
