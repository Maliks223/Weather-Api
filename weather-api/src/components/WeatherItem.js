import React from 'react'

import cloudy from "../img/weather-icons/mostlycloudy.svg"

const WeatherItem = () => {
  return (
    
     <div className="card">
          <p>03:00</p>
            <img src={cloudy} alt="sun icon" className="card-icon" placeholder="cloudy"></img>
            <p>8&#0176;C</p>
          </div>
    
  )
}

export default WeatherItem;

