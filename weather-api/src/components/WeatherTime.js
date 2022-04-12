import React from "react";

import WeatherItem from "./WeatherItem";
import cloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


const WeatherTime = (props) => {
    return(
        <div className="cards">
         <WeatherItem hour="3:00" image={cloudy}  temperature="8"/>
         <WeatherItem hour="6:00" image={cloudy}   temperature="9"/>
         <WeatherItem hour="9:00" image={clear}   temperature="14"/>
         <WeatherItem hour="12:00" image={clear}  temperature="17"/>
         <WeatherItem hour="15:00" image={clear}  temperature="18"/>
         <WeatherItem hour="18:00" image={clear}  temperature="16"/>
         <WeatherItem hour="21:00" image={cloudy}  temperature="13"/>
        </div>
        )
  }
  
  export default WeatherTime;