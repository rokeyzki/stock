import React from 'react';

import G2 from 'g2';

const ShowCircle = React.createClass({
  // 设置初始状态
	getInitialState : function(){
		return {
		  rate: this.props.rate
		};
	},
	
  componentDidMount: function() {
    // 获取DOM对象
    var chartNode = this.refs.signG2;
    
    var data = [];
    data.push({type:"已占用", value: this.state.rate});
    var surplus = 100 - this.state.rate;
    data.push({type:"未占用", value: surplus});

    var chart = new G2.Chart({
      container: chartNode,
      width: 20,
      height: 20,
      plotCfg: {
        margin: 0, // 设置 margin
        padding: 0// 设置边框
      }
    });
    // var Stat = G2.Stat;
    chart.source(data);
    chart.coord('theta');
    chart.legend(false);
    chart.tooltip(false);
    chart.intervalStack()
      .position('value')
      .color('type', ['#2db7f5', '#e9e9e9']); // .position(Stat.summary.percent('value'))
    chart.render();
  },

  render: function() {
    return (
      <div>
        <span ref='signG2' ></span> <span>已占用：{this.state.rate}%</span> 
      </div>
    );
  }
});

export default ShowCircle;