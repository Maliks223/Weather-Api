import React from "react";
import cloudy from "../img/weather-icons/mostlycloudy.svg";

const LiveWeather = (props) => {
  return(
    <main>
    <img src={cloudy} alt="Sun icon" className="icon"></img>
        <p className="below-image-text"> {props.text} </p>
        <p className="container">
          <span className="temp"> Temperature</span>
          <span className="temp-range">{Math.round(props.minTemp-273.15)}&#0176; to {Math.round(props.maxTemp-273.15)}&#0176;C</span>
        </p>
        <p className="container">
          <span className="property">Humidity </span>
          <span className="value">{props.humidity}%</span>
          <span className="property">Pressure</span>
          <span className="value">{props.pressure}</span>
        </p>
    </main>
  )
}

export default LiveWeather;