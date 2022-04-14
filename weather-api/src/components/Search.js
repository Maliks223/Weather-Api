import React from "react";

const Search = ({callApi}) => {
  return(
  <header id="header">
        <input className="search" type="text" placeholder="Type in the city name" ></input>
        <button onClick={() => callApi(document.querySelector(".search").value)} className="button"> FIND WEATHER </button>
      </header>
      )
}
export default Search;

 
