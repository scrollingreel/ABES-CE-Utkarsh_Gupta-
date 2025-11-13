import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=b7c28aeda623fdf2ee2f66eef5600c5b')
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, []);

  if (!weather) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>City: {weather.city.name}</h1>

      {weather.list.map((item, index) => (
        <Weather key={index} data={item} location={weather.city.name} />
      ))}
    </div>
  );
}

export default App;
