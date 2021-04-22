//Init Storage
const storage = new Storage;
//Get stored location data
const weatherLocation = storage.getLocationData();
//init weather
const weather = new Weather(weatherLocation.city, weatherLocation.state, weatherLocation.country);
//Init UI
const ui = new UI;
//Get Weather on Dom load
document.addEventListener('DomContentLoaded',getWeather());

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  //Change Location
  weather.changeLocation(city,state,country);

  //Set Location in LS
  storage.setLocationData(city,state,country);

  //Get and display weather
  getWeather();

  //Close Modal
  $('#locModal').modal('hide');
});



function getWeather(){
  weather.getWeather().then(results=>{
    ui.writeUI(results);
  })
    .catch(err=>console.log(err));
}