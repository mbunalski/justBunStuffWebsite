class Storage{
  constructor(){
    this.city;
    this.state;
    this.country;
    this.cityDefault = 'Doylestown';
    this.stateDefault = 'PA';
    this.countryDefault = 'US';
  }

  getLocationData(){
    if(localStorage.getItem('city')===null){
      this.city = this.cityDefault;
    }else{
      this.city = localStorage.getItem('city');
    }
    
    if(localStorage.getItem('state')===null){
      this.state = this.stateDefault;
    }else{
      this.state = localStorage.getItem('state');
    }

    if(localStorage.getItem('country')===null){
      this.country = this.countryDefault;
    }else{
      this.country = localStorage.getItem('country');
    }

    return{city: this.city, state: this.state, country: this.country}
  }

  setLocationData(city, state, country){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('country', country);
  }
}