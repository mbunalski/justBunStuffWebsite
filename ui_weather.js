class UI{
  constructor(){
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-desc");
    this.temp = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feels_like = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }
  writeUI(results){
    this.location.innerText = `${results["weather"].name}, ${(results["state"]).toUpperCase()}`;
    this.description.innerText = results["weather"].weather[0].description;
    this.temp.innerText=`${results["weather"].main["temp"]} F`;
    this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${results["weather"].weather[0].icon}@2x.png`);
    this.humidity.innerText = `Relative Humidity: ${results["weather"].main["humidity"]}%`;
    this.dewpoint.innerText = `Dewpoint: ${results["extra"].current.dew_point} F`;
    this.feels_like.innerText = `Feels like: ${results["weather"].main["feels_like"]} F`;
    this.wind.innerText = `Wind: ${results["weather"].wind.speed} MPH`;
    
  }
}