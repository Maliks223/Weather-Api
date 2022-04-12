import React from "react";

import WeatherItem from "./WeatherItem";
import cloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


const WeatherTime = (props) => {

    const hoursArray = props.Hdata.map((section)=>{
        return <WeatherItem key={section.dt} hour={section.dt_txt.split(' ')[1].slice(0,5)}
        image={cloudy} temperature={section.main.temp}/>
    })
    
        
    
    return(
        <div className="cards">
            {hoursArray}
         {}
        </div>
        )
  }
  
  export default WeatherTime;