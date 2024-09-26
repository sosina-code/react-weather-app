import React from "react";
import axios from "axios";
import"./Weather.css";
export default function Weather(){
  return(
    <div className ="weather">
      <form>
        <input type ="search" placeholder="Enter a city.." className="form-control"/>
        <input type="submit" value= "search" className="btn btn-primary"/>
      </form>
      <h1>New York</h1>
    <ul>
      <li>Tuesday 20:30</li>
      <li>mostly cloudy</li>
    </ul>
    <div className ="row">
      <div className ="col-6">
        <img src ="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"/>
        6°C
      </div>
      <div className ="col-6">
        <ul>
          <li>precipitation:15%</li>
          <li>humidity:72%</li>
          <li>wind:13 km/hr</li>
        </ul>
      </div>
    </div>
    
    </div>
  );
}