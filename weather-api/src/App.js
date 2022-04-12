import React from "react";
import "./App.css";
import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime from "./components/Weathertime";


const App = () => {
  return (
    <div id="wrapper">
    
      <Search/>
      <main>
      <LiveWeather/>
      <WeatherTime/>
      </main>
      </div>  
  );
};

export default App;