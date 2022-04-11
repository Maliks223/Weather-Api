import React from "react";
import "./App.css";

import cloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";

const App = () => {
  return (
    <div id="wrapper">
      <header id="header">
        <input className="search" type="text" placeholder="Type in the city name" ></input>
        <a href="#" className="button"> FIND WEATHER </a>
      </header>
      
      <main>
        <img src={cloudy} alt="Sun icon" className="icon"></img>
        <p className="below-image-text"> overcast clouds </p>
        <p className="container">
          <span className="temp"> Temperature</span>
          <span className="temp-range">10&#0176; to 11&#0176;C</span>
        </p>
        <p className="container">
          <span className="property">Humidity </span>
          <span className="value">78%</span>
          <span className="property">Pressure</span>
          <span className="value">1008.48</span>
        </p>

        <div className="cards">
          <div className="card">
          <p>03:00</p>
            <img src={cloudy} alt="sun icon" className="card-icon" placeholder="cloudy"></img>
            <p>8&#0176;C</p>
          </div>
          <div className="card">
          <p>06:00</p>
            <img src={cloudy} alt="sun icon" className="card-icon" placeholder="cloudy"></img>
            <p>9&#0176;C</p>
          </div>
          <div className="card">
          <p>09:00</p>
            <img src={clear} alt="sun icon" className="card-icon" placeholder="clear"></img>
            <p>14&#0176;C</p>
          </div>
          <div className="card">
          <p>12:00</p>
            <img src={clear} alt="sun icon" className="card-icon" placeholder="clear"></img>
            <p>17&#0176;C</p>
          </div>
          <div className="card">
          <p>15:00</p>
            <img src={clear} alt="sun icon" className="card-icon" placeholder="clear"></img>
            <p>18&#0176;C</p>
          </div>
          <div className="card">
          <p>18:00</p>
            <img src={clear} alt="sun icon" className="card-icon" placeholder="clear"></img>
            <p>16&#0176;C</p>
          </div>
          <div className="card">
          <p>21:00</p>
            <img src={cloudy} alt="sun icon" className="card-icon" placeholder="cloudy"></img>
            <p>13&#0176;C</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;