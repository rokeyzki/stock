import React from 'react';
import { DatePicker, message } from 'antd';

const FooA = React.createClass({
  getInitialState() {
    return {
      date: ''
    };
  },
  handleChange(value) {
    message.info('您选择的日期是: ' + value.toString());
    this.setState({
      date: value
    });
  },
  render() {
    return <div>
      <DatePicker onChange={this.handleChange} />
      <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
    </div>;
  }
});

export default FooA;