var CityActions = {
  changeData: function(weather) {
    return {
      type: 'Update_Data',
      weather: weather,
    };
  },
  
  /*changeCity: function(city){
    JSONP(Store.getState().api + city, function(err, data) {
      if (err) throw err; console.log(data);
      
      return {
        type: 'Update_Data',
        weather: data,
      }
    });
  }*/
}

export default CityActions;