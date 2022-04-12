import React from "react";

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