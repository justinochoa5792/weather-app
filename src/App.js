import React, { Component } from "react";
import Axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    weather: [],
  };
  async componentDidMount() {
    await Axios.get(
      "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json"
    ).then((res) => {
      console.log(res.data.dataseries);
      this.setState({ weather: res.data.dataseries });
    });
  }
  dipslayWeather() {
    return this.state.weather.map((eachWeather) => {
      return (
        <ul>
          <li>Date: {eachWeather.date}</li>
          <li>Forecast: {eachWeather.weather}</li>
          <li>Max: {eachWeather.temp2m.max}</li>
          <li>Min: {eachWeather.temp2m.min}</li>
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Weather</h1>
        {this.dipslayWeather()}
      </div>
    );
  }
}

export default App;
