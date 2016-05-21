import React from 'react';
import ReactDOM from 'react-dom';

import jsonp from 'jsonp';

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
  },

  render: function() {
    return (
      <div>
        {this.state.username} 's stock info is <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

// https://api.github.com/users/rokeyzki/gists
// http://web.juhe.cn:8080/finance/stock/hk?num=00799&key=60bd29533d9517cd6f91c64ccf558d35
// http://op.juhe.cn/onebox/stock/query?dtype=&stock=igg&key=1e03e0734081578f97c39c41ba36ff0a
ReactDOM.render(
  <UserGist source="http://op.juhe.cn/onebox/stock/query?dtype=&stock=igg&key=1e03e0734081578f97c39c41ba36ff0a" />,
  document.querySelector("#app")
);