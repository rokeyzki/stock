import React from 'react';
import { Cascader } from 'antd';

/*import test from "./test.json";

var fooA = [];
for (var i = 0; i < test.length; i++) {
  // test[i].name
  if(test[i].name != "其他"){
    var fooB = [];
    for (var j = 0; j < test[i].city.length; j++) {
      // test[i].city[j].name
      if(test[i].city[j].name != "其他"){
        var fooC = [];
        for (var k = 0; k < test[i].city[j].area.length; k++) {
          // test[i].city[j].area[k]
          if(test[i].city[j].area[k] != "其他"){
            fooC.push({"value": test[i].city[j].area[k], "label": test[i].city[j].area[k]});
          }
        }
        
        fooB.push({"value": test[i].city[j].name, "label": test[i].city[j].name, "children": fooC});
      }
    }
    
    fooA.push({"value": test[i].name, "label": test[i].name, "children": fooB});
  }
  
}*/
// console.log(JSON.stringify(fooA));


import Store from "../../state/store.jsx";
import CityActions from "../../state/actions/city.jsx";
import JSONP from "jsonp";

import json from "./cityList.json";

const CitySelect = React.createClass({
  options: json,

  onChange: function(value){
    var res = '';
    if(value[2].search("区") == -1){
      if(value[2].search("县") == -1){
        res = value[2];
      }else{
        res = value[2].substr(0, (value[2].length - 1));
      }
    }else{
      res = value[1];
    }
    console.log(res);
    JSONP(Store.getState().api + res, function(err, data) {
      if (err) throw err; console.log(data);
      
      if (this.isMounted()) {
        Store.dispatch(CityActions.changeData(data));
      }
    }.bind(this));
  },
  
  render: function(){
    return (
      <Cascader defaultValue={['福建', '福州', '鼓楼区']} options={this.options} onChange={this.onChange} />
    );
  }
});

export default CitySelect;