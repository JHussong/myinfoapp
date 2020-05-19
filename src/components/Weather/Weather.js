import React, { useState } from 'react';
import Moment from 'react-moment';
import './Weather.css';

function Weather() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const userSearch = e => {
    if (e.key === 'Enter') {
      fetch(`${process.env.REACT_APP_WEATHER_URL}weather?q=${query}&units=Imperial&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setQuery('');
        setWeather(data);
        console.log(data)})
      .catch(err => {
        console.log('Error: ', err)
      })
    }
  }

  return (
    <div className="App warm">
      <main>
        <div className='search-box'>
          <input 
            type='text' 
            className='search-bar' 
            placeholder='Search for your weather...' 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={userSearch}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'><Moment format="LLLL"></Moment></div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°f</div>
              <div className='weather'>{weather.weather[0].main}</div>
              <div className='minMax'>{Math.round(weather.main.temp_min)}°f / {Math.round(weather.main.temp_max)}°f</div>
              <div className='humidity'>Humidity is at {weather.main.humidity}%</div>
              <div className='windSpeed'>Wind is blowing at {Math.round(weather.wind.speed)}mph</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}


export default Weather;