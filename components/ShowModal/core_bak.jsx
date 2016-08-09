import React from 'react';
import { Modal, Button } from 'antd';

//  import QueueAnim from 'rc-queue-anim';

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
        <Button type="primary" size="small" onClick={this.showModal}>显示对话框 {this.props.record.key}</Button>
        <Modal title="第一个 Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>对话框的内容</p>
          <p>{this.props.record.name}</p>
          <p>{this.props.record.config}</p>
        </Modal>
      </div>
    );
  },
});

export default ShowModal;