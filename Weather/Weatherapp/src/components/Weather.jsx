import React from 'react';
import './weather.css';

function Weather({ data, location }) {
  return (
    <div id="card">
      <h3>Weather</h3>
      <h1>Location: {location}</h1>
      <h5>Temperature: {(data.main.temp - 273.15).toFixed(1)} °C</h5>
      <h5>Condition: {data.weather[0].description}</h5>
      <h6>Time: {data.dt_txt}</h6>
    </div>
  );
}

export default Weather;
