import axios from 'axios';

const API_KEY = '1692dbb591d0b3ce848e30f0f58674a5';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  /*const request = fetch(url, { method: 'GET' }).then(response =>
    response.json()
  );*/

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
