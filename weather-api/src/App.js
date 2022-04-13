import React from "react";
import "./App.css";

import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime from "./components/WeatherTime";

import fakeWeatherData from "./fakeWeatherData.json";

import clear from "./img/weather-icons/clear.svg";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";


const App = () => {

  const nowData = fakeWeatherData.list[0];
  const hoursData = [];
  for(let i=1; i<=7; i++){
    hoursData.push(fakeWeatherData.list[i]);
  }
  const id = fakeWeatherData.list[0].weather[0].id;
  const findSrc =(id) => {
  if (id < 300) {
    return storm
  }
  else if (300 < id && id < 499) {
    return drizzle
  }
  else if (500 < id && id < 599) {
    return rain
  }
  else if (600 < id && id < 699) {
    return snow
  }
  else if (700 < id && id < 799) {
    return fog
  } else if (id == 800) {
    return clear
  }
  else if (id == 801) {
    return partlycloudy
  }
  else { return mostlycloudy }
  }
  
  return (
    <div id="wrapper">
      <Search/>
      <main>
        <LiveWeather 
        text={nowData.weather[0].description}
        minTemp={nowData.main.temp_min}
        maxTemp={nowData.main.temp_max}
        humidity={nowData.main.humidity}
        pressure={nowData.main.pressure}
        iconSrc={findSrc( fakeWeatherData.list[0].weather[0].id)}
        />
        <WeatherTime Hdata={hoursData}/>
      </main>
    </div>
    
  );
};

export default App;
