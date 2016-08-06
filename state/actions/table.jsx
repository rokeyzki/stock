var TableActions = {
  addData: function(index) {
    return {
      type: 'Add_Data',
      index: index,
    };
  },
  
  delete: function(index, data){
    var newData = [];
    for(var i=0; i<data.length; i++){
      if(data[i].key != index){
        newData.push(data[i]); 
      }
    }

    return {
      type: 'Reset_Data',
      data: newData,
    };
  }
}

export default TableActions;