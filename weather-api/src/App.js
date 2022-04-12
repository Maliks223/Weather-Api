import React from "react";
import "./App.css";

import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime from "./components/WeatherTime";

import fakeWeatherData from "./fakeWeatherData.json";

const App = () => {

  const nowData = fakeWeatherData.list[0];
  const hoursData = [];
  for(let i=1; i<=7; i++){
    hoursData.push(fakeWeatherData.list[i]);
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
        />
        <WeatherTime Hdata={hoursDatamu}/>
      </main>
    </div>
    
  );
};

export default App;
