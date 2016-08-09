import React from 'react';
import { Table, Button } from 'antd';

import { Popconfirm, message } from 'antd';

import Store from "../../state/store.jsx";
import TableActions from "../../state/actions/table.jsx";

import ShowModal from '../ShowModal/core.jsx';
import ShowChart from '../ShowChart/core.jsx';

import ShowCircle from '../ShowCircle/core.jsx';

import { Breadcrumb, Alert } from 'antd';

const ShowTable = React.createClass({
  // 设置初始状态
	getInitialState : function(){
		return {
		  data : Store.getState().data,
		  
		  selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
		};
	},
  
  pagination : function(){
    return {
      total: this.state.data.length,
      showTotal(total) {
        return '共 ' + total + ' 条';
      },
      pageSize: 15,
      pageSizeOptions: ['15', '20', '25', '30'],
      showSizeChanger: true,
      showQuickJumper: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };
  },
  
  columns: [
    { title: '应用ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.key - b.key },
    { title: '负责人', dataIndex: 'name', key: 'name', width: 100,
      filters: [{
        text: '张某三',
        value: '张',
      }, {
        text: '李某四',
        value: '李',
      }, {
        text: '实习生',
        value: '子菜单',
        children: [{
          text: '王某五',
          value: '王',
        }, {
          text: '赵某六',
          value: '赵',
        }],
      }],
      // 指定确定筛选的条件函数
      // 这里是名字中第一个字是 value
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },
    { title: '报错数', dataIndex: 'error', key: 'error', sorter: (a, b) => a.error - b.error },
    { title: 'ZONE', dataIndex: 'zone', key: 'zone' },
    { title: '已配报警指标', dataIndex: 'config', key: 'config' },
    { title: 'CPU消耗', dataIndex: 'cpu', key: 'cpu',
      render: function(text, record, index){
        var rate = Math.ceil(Math.random() * 100);
        return (
          <ShowCircle rate={rate}/>
        );
      }
    },
    { title: '更新时间', dataIndex: 'time', key: 'time' },
    { title: '备注信息', dataIndex: 'id', key: 'x', render: (text, record, index) => <span>测试 {text} {record.name} {index}</span>},
    { title: '日志', dataIndex: '', key: 'z', 
      render: function(text, record, index) {
        return (
          <ShowModal record={record} />
        );
      }
    },
    { title: '操作', dataIndex: 'id', key: 'y', 
      render: function(text, record, index) {
        var confirm = function() {
          message.success('应用已被删除');
          
          console.log(index);
          console.log(record);
          
          // Redux：store.dispatch() 触发 Actions
		      Store.dispatch(TableActions.delete(record.key, Store.getState().data));
        };
        
        function cancel() {
          message.error('取消了删除的操作');
        }
        
        return (
          <Popconfirm title="确定要删除这个应用吗？" placement="left" onConfirm={confirm} onCancel={cancel}>
            <a href="#">删除</a>
          </Popconfirm>
        );
      }
    },
  ],
  
  start() {
    this.setState({ loading: true });
    // 模拟 ajax 请求，完成后清空
    setTimeout(() => {
      
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  
  onSelectChange(selectedRowKeys) {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    var selectedRowKeysString = selectedRowKeys.join(', ');
    message.success("你选择key为［" + selectedRowKeysString + "］的数据");
    
    this.setState({ selectedRowKeys });
  },
  
  render: function() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>示例一</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{ height: 'auto' }}>

            <Alert message="示例一：复杂数据的表格展示"
              description="1.使用 React + Ant Design 进行组件化开发，大大提升代码的复用率以及前端开发效率。2.使用 Redux 作为状态容器，提供可预测化的状态管理，方便各组件间的状态共享。"
              type="info" closeText="不再提醒"
            />
            
            <div style={{ marginTop: 20, marginBottom: 16 }}>
              <Button type="primary" onClick={this.start}
                disabled={!hasSelected} loading={loading}
              >多项选择</Button>
              <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
            </div>
            
            <Table columns={this.columns}
              expandedRowRender={record => <div><p>{record.config}</p><ShowChart/></div>}
              dataSource={this.state.data}
              pagination={this.pagination()}
              className="table"
              size="small"
              rowSelection={rowSelection}
            />
            
            <div>
              <p style={{fontWeight: 700}}>相关文档：</p>
              <br/>
              <ol>
                <li>1. <a href="https://facebook.github.io/react/" target="_blank">前端框架：React</a></li>
                <li>2. <a href="http://redux.js.org/" target="_blank">状态容器：Redux</a></li>
                <li>3. <a href="http://ant.design/" target="_blank">组件样式方案：Ant Design</a></li>
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
  },
  
  componentWillMount : function(){ // 组件初次渲染时被调用，这个方法在整个生命周期中只会被调用一次
    console.log('1.1: FooComp 组件初次渲染');
    
    // Redux：store.subscribe() 监听 Store 的更新，// store.unsubscribe() 停止监听 Store 的更新
    Store.subscribe(() => {
      // Redux：store.getState() 获取 Store 中的所有 state
      var states = Store.getState();
      // console.log(states.data);
      
      // 重新渲染
      this.setState({data : states.data});
    });
	},
    
});

export default ShowTable;