import React from "react";
import "./App.css";

import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime from "./components/WeatherTime";
import FakeWeather from "./fakeWeatherData.json"

const App = () => {
  
  return (
    <div id="wrapper">
      <Search/>
      <main>
        <LiveWeather text="overcast clouds" minTemp={FakeWeather.list[0].main.temp_min} maxTemp={FakeWeather.list[0].main.temp_max} humidity={FakeWeather.list[0].main.humidity} pressure={FakeWeather.list[0].main.pressure}/>
        <WeatherTime />
      </main>
    </div>
    
  );
};

export default App;
