class Weather{
  constructor(city = "doylestown",state = "pa",country="us"){
    this.app_id = "f624cf7121465e7da655cb4f13fafda0";
    this.city = city;
    this.state = state;
    this.country = country;

  }
  //fetch weather
  async getWeather(){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&units=imperial&appid=${this.app_id}`);

    const weather = await weatherResponse.json();

    const extraResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord["lat"]}&lon=${weather.coord["lon"]}&units=imperial&exclude=minutely,hourly,daily,alert&appid=${this.app_id}`);

    const extra = await extraResponse.json();

    return {weather: weather, state: this.state, extra: extra};
  }


  //Change Location
  changeLocation(city,state,country){
    this.city = city;
    this.state = state;
    this.country = country;
  }
}