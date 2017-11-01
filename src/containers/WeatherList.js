import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(cityData => {
            const temps = cityData.list.map(day => day.main.temp);
            const pressures = cityData.list.map(day => day.main.pressure);
            const humidities = cityData.list.map(day => day.main.humidity);
            const { lon, lat } = cityData.city.coord;

            return (
              <tr key={cityData.city.name}>
                <td>
                  <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                  <Chart data={temps} color="red" units="Kelvin" />
                </td>
                <td>
                  <Chart data={pressures} color="blue" units="hPa" />
                </td>
                <td>
                  <Chart data={humidities} color="green" units="%" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
