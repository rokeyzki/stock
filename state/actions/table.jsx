var TableActions = {
  changeData: function(weather) {
    return {
      type: 'Update_Data',
      weather: weather,
    };
  },
  
  addData: function(index) {
    return {
      type: 'Add_Data',
      index: index,
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

export default TableActions;