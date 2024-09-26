import React from "react";
import axios from "axios";
import"./Weather.css";
export default function Weather(){
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
        <div className="float-left">
       <span className="temperature">6</span>
       <span className="unit"> °C</span>
       </div>
      </div>
      <div className ="col-6">
        <ul>
          <li>precipitation:15%</li>
          <li>humidity:72%</li>
          <li>wind:13 km/hr</li>
        </ul>
      </div>
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