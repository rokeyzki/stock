import React from 'react';

import { Breadcrumb, Alert } from 'antd';

import echarts from 'echarts';
import G2 from 'g2';

const ShowMap = React.createClass({
  componentDidMount: function() {
    // ECharts
    // 获取DOM对象
    var chart = this.refs.signEcharts;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart);

    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#2c343c',
    
        title: {
            text: 'ECharts3在React中的使用示例',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
    
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
    // 获取DOM对象
    var chartNode = this.refs.signG2;
    var data = [
        {"name": "Nailpolish", "Florida": 12814, "Texas": 3054, "Arizona": 4376, "Nevada": 4229},
        {"name": "Eyebrowpencil", "Florida": 13012, "Texas": 5067, "Arizona": 3987, "Nevada": 3932},
        {"name": "Rouge", "Florida": 11624, "Texas": 7004, "Arizona": 3574, "Nevada": 5221},
        {"name": "Pomade", "Florida": 8814,  "Texas":9054, "Arizona": 4376, "Nevada": 9256},
        {"name": "Eyeshadows", "Florida": 12998, "Texas": 12043, "Arizona": 4572, "Nevada": 3308},
        {"name": "Eyeliner", "Florida": 12321, "Texas": 15067, "Arizona": 3417, "Nevada": 5432},
        {"name": "Foundation", "Florida": 10342, "Texas": 10119, "Arizona": 5231, "Nevada": 13701},
        {"name": "Lipgloss", "Florida": 22998, "Texas": 12043, "Arizona": 4572, "Nevada": 4008},
        {"name": "Mascara", "Florida": 11261, "Texas": 10419, "Arizona": 6134, "Nevada": 18712},
        {"name": "Powder", "Florida": 10261, "Texas": 14419, "Arizona": 5134, "Nevada": 25712}
      ];
      
    var Frame = G2.Frame;
    var frame = new Frame(data);
    frame = Frame.combinColumns(frame,['Florida','Texas','Arizona','Nevada'],'Revenue','City','name');
    var chart2 = new G2.Chart({
        container: chartNode,
        forceFit: true,
        height: 500
    });
    chart2.source(frame, {
    'Revenue': {
      alias: '销售总额（美元）',
      formatter: function(val) {
        return parseInt(val/1000, 10) + 'k';
      }
    },
    'name': {
      alias: 'G2在React中的使用示例' // 化妆品
    }
    });
    chart2.areaStack().position('name*Revenue').color('City');
    chart2.render();
  },
  
  render: function() {
    return (
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>示例二</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 'auto' }}>
        
                <Alert message="示例二：数据可视化"
                  description="通过使用 ECharts 和 G2 等常用的数据可视化工具库，演示在 React 中如何与其他第三方前端类库搭配开发。"
                  type="info" closeText="不再提醒"
                />
              
                <div ref='signEcharts' style={{width: "100%", height: "400px", margin: "50px 0px"}}></div>
                <div ref='signG2' ></div>
                
                <div>
                  <p style={{fontWeight: 700}}>相关文档：</p>
                  <br/>
                  <ol>
                    <li>1. <a href="http://echarts.baidu.com/" target="_blank">ECharts 3.0</a></li>
                    <li>2. <a href="https://g2.alipay.com/" target="_blank">G2：The Grammar of Graphics</a></li>
                  </ol>
                </div>
                
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          www.oulve.com © 2016 由 Charles Lim 技术支持
          </div>
        </div>
    );
  }
});

export default ShowMap;