import { createStore } from 'redux';

var defaultState = {
  api: "http://op.juhe.cn/onebox/weather/query?key=6bb769e52dd7317d10ca8add62af8cd4&dtype=json&cityname=",
  weather: {
    result: {
      data: {
        realtime: {
          city_name: "北京",
          weather: {
            info: "加载中...",
            temperature: "N/A"
          }
        }
      }
    }
  }
};

// Reducers
function storeRoot(state, action){
  switch (action.type) {
    case 'Update_Data':
      return Object.assign({}, state, {
        weather: action.weather
      });
      
    default:
      return state;
  }
}

// Store
var store = createStore(storeRoot, defaultState);

export default store;