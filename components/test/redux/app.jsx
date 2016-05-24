import React from 'react';
import ReactDOM from 'react-dom';

import store from '../../../state/store.jsx';
// import actions from '../../../state/actions.jsx';

import echarts from 'echarts';
import 'echarts/theme/roma';

import $ from 'jquery';

import _ from 'lodash';

console.log(store.getState());

var ShowOneStockInfo = React.createClass({
  getInitialState: function() {
    return {
      hasData: store.getState().now.hasData,
      historyData: store.getState().now.historyData
    };
  },
  
  render: function() {
    return (
      <div>
        <p>{this.state.hasData}</p>
        <div ref='signEcharts' style={{width: "500px", height: "400px", margin: "50px 0px"}}></div>
      </div>
    );
  },
  
  historyData: [],
  
  componentDidMount: function() {
    $.ajax({
      url:this.props.source + '?begin=' + this.props.begin + '&end=' + this.props.end + '&code=' + this.props.code,
      headers:{ apikey: '5e12a6f652ce580a2a0108c89fe57c83' },
      async: false,
      success : function(result){
        if (this.isMounted()) {
          result = JSON.parse(result);
         
          var fooArray = [];
          _.forEach(result.showapi_res_body.list, function(value, key){
            var one = [value.date, _.toNumber(value.open_price), _.toNumber(value.close_price), _.toNumber(value.min_price), _.toNumber(value.max_price)];
            fooArray.push(one);
          });
          
          this.historyData = this.historyData.concat(fooArray.reverse());
          
          /*this.setState({
            hasData: true,
            historyData: historyData
          });*/
        }
      }.bind(this)
    });
    
    $.ajax({
      url:this.props.source + '?begin=2015-10-01&end=2015-10-31&code=' + this.props.code,
      headers:{ apikey: '5e12a6f652ce580a2a0108c89fe57c83' },
      async: false,
      success : function(result){
        if (this.isMounted()) {
          result = JSON.parse(result);
         
          var fooArray = [];
          _.forEach(result.showapi_res_body.list, function(value, key){
            var one = [value.date, _.toNumber(value.open_price), _.toNumber(value.close_price), _.toNumber(value.min_price), _.toNumber(value.max_price)];
            fooArray.push(one);
          });
          
          this.historyData = this.historyData.concat(fooArray.reverse());
          
          /*this.setState({
            hasData: true,
            historyData: historyData
          });*/
        }
      }.bind(this)
    });
    
    $.ajax({
      url:this.props.source + '?begin=2015-11-01&end=2015-11-30&code=' + this.props.code,
      headers:{ apikey: '5e12a6f652ce580a2a0108c89fe57c83' },
      async: false,
      success : function(result){
        if (this.isMounted()) {
          result = JSON.parse(result);
         
          var fooArray = [];
          _.forEach(result.showapi_res_body.list, function(value, key){
            var one = [value.date, _.toNumber(value.open_price), _.toNumber(value.close_price), _.toNumber(value.min_price), _.toNumber(value.max_price)];
            fooArray.push(one);
          });
          
          this.historyData = this.historyData.concat(fooArray.reverse());
          
          this.setState({
            hasData: true,
            historyData: this.historyData
          });
        }
      }.bind(this)
    });
    
    console.log(this.historyData);
    
    console.log('同步测试');


    // ECharts
    // 获取DOM对象
    var chart = this.refs.signEcharts;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart);

    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData(this.historyData);
    
    
    function splitData(rawData) {
        var categoryData = [];
        var values = []
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i])
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }
    
    function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += data0.values[i - j][1];
            }
            result.push(sum / dayCount);
        }
        return result;
    }
    
    var myOption = {
        title: {
            text: '上证指数',
            left: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 50,
                end: 100
            }
        ],
        series: [
            {
                name: '日K',
                type: 'candlestick',
                data: data0.values,
                markPoint: {
                    label: {
                        normal: {
                            formatter: function (param) {
                                return param != null ? Math.round(param.value) : '';
                            }
                        }
                    },
                    data: [
                        {
                            name: 'XX标点',
                            coord: ['2013/5/31', 2300],
                            value: 2300,
                            itemStyle: {
                                normal: {color: 'rgb(41,60,85)'}
                            }
                        },
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                    tooltip: {
                        formatter: function (param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    data: [
                        [
                            {
                                name: 'from lowest to highest',
                                type: 'min',
                                valueDim: 'lowest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            },
                            {
                                type: 'max',
                                valueDim: 'highest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            }
                        ],
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close'
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close'
                        }
                    ]
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
    
        ]
    };


    // 绘制图表
    myChart.setOption(myOption);


  },
});

ReactDOM.render(
  <ShowOneStockInfo source="http://apis.baidu.com/showapi_open_bus/stock_his/sh_stock_his" begin="2015-09-01" end="2015-09-30" code="600004" />,
  document.querySelector("#app")
);