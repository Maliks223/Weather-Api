import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import LiveWeather from "./components/LiveWeather";
import WeatherTime, { findSrc } from "./components/WeatherTime";


const App = () => {


  const hoursData = [];

  

  const callApi = async (city) => {
    if(city === "") {
      alert("Enter a city name")
        return
    };
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=402eb8aeb1f6d523ecb76859e056a1ef`)
    .then((res)=> res.json()

    ).then(result =>{
      console.log(result);
      if(result.cod === '404') {
        alert(result.message);
      } else {
        setList(result.list)
      }
    }).catch((err)=>{
      alert("No Internet Connection")
    })
  }

 
  const [list, setList] = useState(null);

    return (
      <div id="wrapper">
        <Search callApi={(city) => callApi(city)} />
        <main>
          {list && <LiveWeather 
          text={list[0].weather[0].description}
          minTemp={list[0].main.temp_min}
          maxTemp={list[0].main.temp_max}
          humidity={list[0].main.humidity}
          pressure={list[0].main.pressure}
          iconSrc = {findSrc(list[0].weather[0].id, true)}
          />}
          {list && list.map((item, index) => index !== 0 && hoursData.push(item)) && <WeatherTime Hdata={hoursData} />}
        </main>
      </div>
      
    );
};

export default App;
