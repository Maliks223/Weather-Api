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

export const findSrc = (id, flag) => {
    if (id < 300) {
        return storm
    }
    else if (300 <= id && id <= 499) {
        return drizzle
    }
    else if (500 <= id && id <= 599) {
        if (flag) {
            document.body.style.backgroundColor = "#a3b5c1"
            document.querySelector("#header").style.backgroundColor = "#7287ac"
            document.querySelector(".button").style.backgroundColor = "#5366a5"
        }

        return rain
    }
    else if (600 <= id && id <= 699) {
        return snow
    }
    else if (700 <= id && id <= 799) {
        return fog
    }
    else if (id === 800) {
        if (flag) {
            document.body.style.backgroundColor = "#2490ee"
            document.querySelector("#header").style.backgroundColor = "#1b6cd4"
            document.querySelector(".button").style.backgroundColor = "#1851b9"
        }
        return clear
    }
    else if (id === 801) {
        if (flag) {
            document.body.style.backgroundColor = "#9ccef4"
            document.querySelector("#header").style.backgroundColor = "#759eda"
            document.querySelector(".button").style.backgroundColor = "#5879c7"
        }
        return partlycloudy
    }
    else if (801 <= id && id <= 805) {
        if (flag) {
            document.body.style.backgroundColor = "#9ccef4"
            document.querySelector("#header").style.backgroundColor = "#759eda"
            document.querySelector(".button").style.backgroundColor = "#5879c7"
        }
        return mostlycloudy
    }
}



const WeatherTime = (props) => {

    const hoursArray = props.Hdata.map((section) => {
        return <WeatherItem key={section.dt} hour={section.dt_txt.split(' ')[1].slice(0, 5)}
            image={findSrc(section.weather[0].id, false)} temperature={Math.floor(section.main.temp)} />
    })


    return (
        <div className="cards">
            {hoursArray}
        </div>
    )
}

export default WeatherTime;