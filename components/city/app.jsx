import React from "react";
import ReactDOM from "react-dom";

import Store from "../../state/store.jsx";
import CityActions from "../../state/actions/city.jsx";

import JSONP from "jsonp";

var CityComp = React.createClass({
  getInitialState: function() {
    var storeState = Store.getState();

    return {
      city: this.props.setCity ? this.props.setCity : storeState.weather.result.data.realtime.city_name,
      api: storeState.api,
      weather: storeState.weather
    };
  },
  
  render: function() {
    return (
      <div>
        <input type="text" ref="sign" onBlur={this.changeCity} />
        <p>{this.state.city} 今天的天气是 {this.state.weather.result.data.realtime.weather.info}，温度为：{this.state.weather.result.data.realtime.weather.temperature}</p>
      </div>
    );
  },
  
  changeCity: function() {
    var inputObject = this.refs.sign;
    var city = inputObject.value? inputObject.value: this.state.city;
    
    JSONP(this.state.api + city, function(err, data) {
      if (err) throw err; console.log(data);
      
      if (this.isMounted()) {
        Store.dispatch(CityActions.changeCity(data));
      }
    }.bind(this));
  },
  
  componentDidMount: function() {

    this.changeCity();
    
    Store.subscribe(() => {
      this.setState({
        city : Store.getState().weather.result.data.realtime.city_name,
        weather: Store.getState().weather
      });
    });
    
  },
  
});

ReactDOM.render(
  <CityComp setCity="福州" />,
  document.querySelector("#app")
);