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
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push(((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5) * Math.random());
      data2.push(((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5) * Math.random());
    }
    
    var option = {
      title: {
        text: '实时监控柱状图'
      },
      legend: {
        data: ['监控项一', '监控项二'],
        align: 'left'
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: '监控项一',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: '监控项二',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  
  render: function() {
    return (
      <div>
        <div ref='signEcharts' style={{width: "100%", height: "400px", margin: "30px 0px"}}></div>
      </div>
    );
  }
});

export default ShowChart;