import React from 'react';
import { Table, Button } from 'antd';

import { Popconfirm, message } from 'antd';

import ShowModal from '../ShowModal/core.jsx';

const data = [
  { key: 1, name: '胡彦斌1', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 2, name: '吴彦祖2', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 3, name: '李大嘴3', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  { key: 4, name: '胡彦斌4', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 5, name: '吴彦祖5', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 6, name: '李大嘴6', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  { key: 7, name: '胡彦斌7', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 8, name: '吴彦祖8', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 9, name: '李大嘴9', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  { key: 10, name: '胡彦斌10', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 11, name: '吴彦祖11', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 12, name: '李大嘴12', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  { key: 13, name: '胡彦斌13', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 14, name: '吴彦祖14', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 15, name: '李大嘴15', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  { key: 16, name: '胡彦斌16', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
  { key: 17, name: '吴彦祖17', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
  { key: 18, name: '李大嘴18', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
];

const pagination = {
  total: data.length,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  },
};

const ShowTable = React.createClass({
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
          
          /*this.setState({
            visible: true,
          });*/
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
  
  getInitialState() {
    return {
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
    };
  },
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
          expandedRowRender={record => <p>{record.description}</p>}
          dataSource={data}
          pagination={pagination}
          className="table"
          size="middle"
          rowSelection={rowSelection}
        />
        
      </div>
    );
  }
    
});

export default ShowTable;