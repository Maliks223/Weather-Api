import React from "react";

import WeatherItem from "./WeatherItem";

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
    


const WeatherTime = (props) => {

    const hoursArray = props.Hdata.map((section)=>{
        return <WeatherItem key={section.dt} hour={section.dt_txt.split(' ')[1].slice(0,5)}
        image={findSrc(section.weather[0].id)} temperature={section.main.temp}/>
    })
    
        
    
    return(
        <div className="cards">
            {hoursArray}
        </div>
        )
  }
  
  export default WeatherTime;