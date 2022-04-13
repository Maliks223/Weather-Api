import React from "react";

import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import fog from "../img/weather-icons/fog.svg";

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

const WeatherItem = (props) => {
  return(
    
    <div className="card">
          <p>{props.hour}</p>
            <img src={props.image} alt="sun icon" className="card-icon"></img>
            <p>{Math.round(props.temperature-273.15)}&#0176;C</p>
          </div>
  )
}

 export default WeatherItem;


