import React from "react";
import "./App.css";

import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime from "./components/WeatherTime";


const App = () => {
  return (
    <div id="wrapper">
      <Search/>
      <main>
        <LiveWeather text="overcast clouds" minTemp="10" maxTemp="11" humidity="78" pressure="1008.48"/>
        <WeatherTime/>
      </main>
    </div>
  );
};

export default App;