import React from 'react';
import ReactDOM from 'react-dom';

import jsonp from 'jsonp'; // jsonp 时，使用jsonp

// import $ from 'jquery'; // curl（带header）时，使用$.ajax

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    
    jsonp(this.props.source, function (err, data) {
      if (err) throw err;
        console.log(data);
        if (this.isMounted()) {
          this.setState({
            username: data.reason + ': ' + data.result.alias,
            lastGistUrl: data.result.url
          });
        }
    }.bind(this));
    
    
    /*$.ajax({
        url:this.props.source,
        headers:{ apikey: '5e12a6f652ce580a2a0108c89fe57c83' },
        success : function(result){
            if (this.isMounted()) {
                console.log(JSON.parse(result));
                this.setState({
                    
                });
            }
        }.bind(this)
    });*/
    
  },

  render: function() {
    return (
      <div>
        {this.state.username} 's stock info is <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

// jsonp: http://op.juhe.cn/onebox/stock/query?dtype=&stock=igg&key=1e03e0734081578f97c39c41ba36ff0a
// curl: http://apis.baidu.com/showapi_open_bus/stock_his/sh_stock_his?begin=2015-09-01&end=2015-09-02&code=600004
ReactDOM.render(
  <UserGist source="http://op.juhe.cn/onebox/stock/query?dtype=&stock=igg&key=1e03e0734081578f97c39c41ba36ff0a" />,
  document.querySelector("#app")
);