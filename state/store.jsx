import { createStore } from 'redux';

/*  data: [
    { key: 1, name: '胡彦斌1', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 2, name: '吴彦祖2', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  ]*/

var data = [];
for(var i=1; i<=160; i++){
  var id = "Application-" + i;
  
  var name;
  switch (Math.ceil(Math.random()*10) - 1) {
    case 0:
    case 1:
    case 2:
      name = "张某三";
      break;
    case 3:
    case 4:
    case 5:
      name = "李某四";
      break;
    case 6:
    case 7:
      name = "王某五";
      break;
    default:
      name = "赵某六";
      break;
  }
  
  var error = Math.ceil(Math.random()*1000);
  
  var zone = ["南非机房", "欧洲机房", "泉州机房", "日本机房", "香港机房", "韩国机房", "新加坡机房", "北美机房", "中东机房", "澳洲机房"];
  zone = zone[Math.ceil(Math.random()*10) - 1];
  
  var config = '共' + (Math.ceil(Math.random()*10) + 3) + "项已配置报警";
  
  var time = new Date();
  // time = time.toString();
  if((time.getMonth() + 1) < 10){
    var month = '0' + (time.getMonth() + 1);
  }else{
    var month = (time.getMonth() + 1);
  }
  
  if(time.getDate() < 10){
    var date = '0' + time.getDate();
  }else{
    var date = time.getDate();
  }
  
  if(time.getHours() < 10){
    var hours = '0' + time.getHours();
  }else{
    var hours = time.getHours();
  }
  
  if((time.getMinutes() + 1) < 10){
    var minutes = '0' + time.getMinutes();
  }else{
    var minutes = time.getMinutes();
  }
  
  if((time.getSeconds() + 1) < 10){
    var seconds = '0' + time.getSeconds();
  }else{
    var seconds = time.getSeconds();
  }
  
  time = time.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;

  data.push({
    id: id,
    key: i,
    name: name,
    error: error,
    zone: zone,
    config: config,
    cpu: 1,
    time: time,
  });
}

var defaultState = {
  data: data
};

// Reducers
function storeRoot(state, action){
  switch (action.type) {
    
    case 'Reset_Data':
      return Object.assign({}, state, {
        data: action.data
      });
      
    default:
      return state;
  }
}

// Store
var store = createStore(storeRoot, defaultState);

export default store;