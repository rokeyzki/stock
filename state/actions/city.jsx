var CityActions = {
  changeCity: function(city, data) {
    return {
      type: 'Change_City',
      cityname: city,
      result: data
    };
  },
  
  /*ajaxGetData: function(begin, end, code){
    return {
      type: 'AJAX_GET_DATA',
      
    }
  }*/
}

export default CityActions;