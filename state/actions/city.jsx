var CityActions = {
  changeCity: function(weather) {
    return {
      type: 'Update_Data',
      weather: weather,
    };
  },
  
  /*ajaxGetData: function(begin, end, code){
    return {
      type: 'AJAX_GET_DATA',
      
    }
  }*/
}

export default CityActions;