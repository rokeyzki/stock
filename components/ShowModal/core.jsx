import React from 'react';
import { Modal, Button } from 'antd';

//  import QueueAnim from 'rc-queue-anim';

import ShowLog from '../ShowLog/core.jsx';

const ShowModal = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" size="small" onClick={this.showModal}>查看警告日志 </Button>
        <Modal title={this.props.record.id + " Modal"} visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} style={{ top: 20, minWidth: 900 }} >
          <ShowLog />
        </Modal>
      </div>
    );
  },
});

export default ShowModal;