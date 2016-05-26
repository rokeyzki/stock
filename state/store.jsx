import { createStore } from 'redux';

var defaultState = {
  city: {
    url: "http://op.juhe.cn/onebox/weather/query?key=6bb769e52dd7317d10ca8add62af8cd4&dtype=json&cityname=",
    cityname: "北京"
  },
  result: null
};

// Reducers
function storeRoot(state, action){
  switch (action.type) {
    case 'Change_City':
      return Object.assign({}, state, {
        api: {
          cityname: action.cityname
        },
        result: action.data
      });
      
    default:
      return state;
  }
}

// Store
var store = createStore(storeRoot, defaultState);

export default store;