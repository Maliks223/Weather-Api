import React from 'react'
import cloudy from "../img/weather-icons/mostlycloudy.svg"

const LiveWeather = () => {
  return (
    <div>
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
    </div>
  )
}

export default LiveWeather;
