import React from 'react';

import echarts from 'echarts';

const ShowChart = React.createClass({
  componentDidMount: function() {
    // ECharts
    // 获取DOM对象
    var chart = this.refs.signEcharts;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart);

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  
  render: function() {
    return (
      <div>
        <div ref='signEcharts' style={{width: "100%", height: "400px", margin: "50px 0px"}}></div>
      </div>
    );
  }
});

export default ShowChart;