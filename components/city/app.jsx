import React from "react";
import ReactDOM from "react-dom";

import Store from "../../state/store.jsx";
import CityActions from "../../state/actions/city.jsx";

import JSONP from "jsonp";

var CityComp = React.createClass({
  getInitialState: function() {
    var storeState = Store.getState();
    var cityName = this.props.setCity ? this.props.setCity : Store.getState().city.cityname;
    
    return {
      city: cityName,
      api: storeState.city.url,
      result: storeState.result,
      foo: "加载中...",
      temperature: "N/A"
    };
  },
  
  render: function() {
    return (
      <div>
        <input type="text" ref="sign" onBlur={this.changeCity} />
        <p>{this.state.city} 今天的天气是 {this.state.foo}，温度为：{this.state.temperature}</p>
      </div>
    );
  },
  
  componentDidMount: function() {
    
    JSONP(this.state.api + this.state.city, function(err, data) {
      if (err) throw err;
      console.log(data);
      if (this.isMounted()) {
        this.setState({
          result: data,
          foo : data.result.data.realtime.weather.info,
          temperature: data.result.data.realtime.weather.temperature
        });
      }
    }.bind(this));
    
  },
  
  changeCity: function() {
    var textObject = this.refs.sign;
    
    JSONP(this.state.api + textObject.value, function(err, data) {
      if (err) throw err;
      console.log(data);
      if (this.isMounted()) {
        Store.dispatch(CityActions.changeCity(textObject.value, data));
      }
    }.bind(this));
  },
  
  componentWillMount: function(){
    Store.subscribe(() => {
      this.setState({
        city : Store.getState().city.cityname,
        foo: Store.getState().result.result.data.realtime.weather.info,
        temperature: Store.getState().result.result.data.realtime.weather.temperature
      });
    });
	}
});

ReactDOM.render(
  <CityComp setCity="" />,
  document.querySelector("#app")
);