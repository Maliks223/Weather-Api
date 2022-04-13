import React from "react";

const Search = ({inputVal, setInputVal, callApi}) => {
  return(
  <header id="header">
        <input onChange={(e) => setInputVal(e.target.value)} className="search" value={inputVal} type="text" placeholder="Type in the city name" ></input>
        <button onClick={callApi} className="button"> FIND WEATHER </button>
      </header>
      )
}
export default Search;

 
