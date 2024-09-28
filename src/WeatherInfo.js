import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
          <h1>{props.data.city}</h1>
        <ul>
          <li><FormattedDate date ={props.data.date}/></li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className ="row mt-3">
          <div className ="col-6">
            <div className="selector">
            <img src ={props.data.iconUrl}
            alt={props.data.description} 
            className="float-left"/>
            </div>
            
         <span className="temperature">{props.data.temperature}</span> 
         <span className="unit">°C</span>
      
          </div>
          <div className ="col-6">
            <ul>
              
              <li>humidity:{props.data.humidity}%</li>
              <li>wind:{props.data.wind} km/hr</li>
            </ul>
          </div>
        </div>
       
    </div>
        
        
      );
}