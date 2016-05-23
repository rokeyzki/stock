var actions = {
  toggleButton: function(on) {
    return {
      type: 'TOGGLE_BUTTON',
      button_state: on
    };
  },
  
  /*ajaxGetData: function(begin, end, code){
    return {
      type: 'AJAX_GET_DATA',
      
    }
  }*/
}

export default actions;