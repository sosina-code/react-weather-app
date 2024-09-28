import React, {useState} from "react";
import axios from "axios";
import"./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props){
  const [city,setCity]=useState(props.defaultCity);
  const [weatherData, setWeatherDate] =useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherDate({
     temperature: response.data.main.temp,
     humidity:response.data.main.humidity,
     date:new Date(),
     description:response.data.weather[0].description,
     iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" ,
     wind:response.data.wind.speed,
     city:response.data.name
    });


  
  }
 
  function handleSubmit(event){
    event.preventDefault();
    search();
    
  }
  function handleCityChange(event){
    setCity(event.target.value);

  }
  function search(){
    let apiKey ="6e6ec494746b5229a9f2d526478c924c";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if(weatherData.ready){
    return(
  
    <div className ="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input type ="search" placeholder="Enter a city.." className="form-control"  autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
        <input type="submit" value= "search" className="btn btn-primary"/>
        </div>
        </div>
      </form>
      <WeatherInfo data ={weatherData}/>
      <h1>{weatherData.city}</h1>
    <ul>
      <li><FormattedDate date ={weatherData.date}/></li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className ="row mt-3">
      <div className ="col-6">
        <div className="selector">
        <img src ={weatherData.iconUrl}
        alt={weatherData.description} 
        className="float-left"/>
        </div>
        
     <span className="temperature">{weatherData.temperature}</span> 
     <span className="unit">°C</span>
  
      </div>
      <div className ="col-6">
        <ul>
          
          <li>humidity:{weatherData.humidity}%</li>
          <li>wind:{weatherData.wind} km/hr</li>
        </ul>
      </div>
    </div>
    <footer>
      This project is coded by 
      <a href="https://www.sosina.com" rel="noreferrer" target="_blank">
      sosina-code
      </a>
      and is 
      <a href="https://github.com/sosina-code/react-weather-app" target="_blank">
        open-sourced on github
      </a>
    </footer>
    </div>
    
    
  );
} else{
  search();
  return "Loading...";
  
}
}
