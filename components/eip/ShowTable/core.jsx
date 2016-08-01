import React from 'react';
import { Table, Button } from 'antd';

import { Popconfirm, message } from 'antd';

import Store from "../../../state/store.jsx";
import TableActions from "../../../state/actions/table.jsx";

import ShowModal from '../ShowModal/core.jsx';
import ShowChart from '../ShowChart/core.jsx';

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
    { title: '姓名', dataIndex: 'name', key: 'name', width: 100,
      filters: [{
        text: '姓李的',
        value: '李',
      }, {
        text: '姓胡的',
        value: '胡',
      }, {
        text: '子菜单',
        value: '子菜单',
        children: [{
          text: '姓陈的',
          value: '陈',
        }, {
          text: '姓王的',
          value: '王',
        }],
      }],
      // 指定确定筛选的条件函数
      // 这里是名字中第一个字是 value
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },
    { title: '年龄', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age},
    { title: '住址', dataIndex: 'address', key: 'address' },
    { title: '测试字段1', dataIndex: 'test1', key: 'test1' },
    { title: '测试字段2', dataIndex: 'test2', key: 'test2' },
    { title: '测试字段3', dataIndex: 'test3', key: 'test3' },
    { title: '操作1', dataIndex: 'test1', key: 'x', render: (text, record, index) => <a href="javascript:console.log(this);">测试 {text} {record.name} {index}</a>},
    { title: '操作2', dataIndex: 'test3', key: 'y', 
      render: function(text, record, index) {
        var confirm = function() {
          message.success('点击了确定');
          alert(index);
          console.log(record);
          // Redux：store.dispatch() 触发 Actions
		      Store.dispatch(TableActions.addData(index));
		    
        };
        
        function cancel() {
          message.error('点击了取消');
        }
        
        return (
          <Popconfirm title="确定要删除这个任务吗？" placement="left" onConfirm={confirm} onCancel={cancel}>
            <a href="#">删除</a>
          </Popconfirm>
        );
      }
    },
    { title: '操作3', dataIndex: '', key: 'z', 
      render: function(text, record, index) {
        return (
          <ShowModal record={record} />
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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
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
      <div>
      
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start}
            disabled={!hasSelected} loading={loading}
          >操作</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
        </div>
        
        <Table columns={this.columns}
          expandedRowRender={record => <div><p>{record.description}</p><ShowChart/></div>}
          dataSource={this.state.data}
          pagination={this.pagination()}
          className="table"
          size="middle"
          rowSelection={rowSelection}
        />
        
      </div>
    );
  },
  
  componentWillMount : function(){ // 组件初次渲染时被调用，这个方法在整个生命周期中只会被调用一次
    console.log('1.1: FooComp 组件初次渲染');
    
    // Redux：store.subscribe() 监听 Store 的更新，// store.unsubscribe() 停止监听 Store 的更新
    Store.subscribe(() => {
      // Redux：store.getState() 获取 Store 中的所有 state
        var states = Store.getState();
        console.log(states.data);
        // 重新渲染
        this.setState({data : Store.getState().data});
    });
	},
    
});

export default ShowTable;