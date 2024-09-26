import React from "react";
import axios from "axios";
import"./Weather.css";
export default function Weather(){
  function handleResponse(){
    console.log(response.data);
  }
  let apiKey ="c95d60a1e3adbeb286133f1ebebc2579";
  let city ="New York";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return(
    <div className ="weather">
      <form>
        <input type ="search" placeholder="Enter a city.." className="form-control"  autoFocus="on"/>
        <input type="submit" value= "search" className="btn btn-primary"/>
      </form>
      <h1>New York</h1>
    <ul>
      <li>Tuesday 20:30</li>
      <li>mostly cloudy</li>
    </ul>
    <div className ="row mt-3">
      <div className ="col-6">
        <div className="selector">
        <img src ="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" className="float-left"/>
        </div>
        
       6°C
  
      </div>
      <div className ="col-6">
        <ul>
          <li>precipitation:15%</li>
          <li>humidity:72%</li>
          <li>wind:13 km/hr</li>
        </ul>
      </div>v
    </div>
    <footer>
      This project is coded by 
      <a href="https://www.sosina.com" target="_blank">
      sosina-code
      </a>
      and is 
      <a href="" target="_blank">
        open-sourced on github
      </a>
    </footer>
    </div>
    
    
  );
}