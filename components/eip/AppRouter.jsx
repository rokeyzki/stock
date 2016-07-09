import React from 'react';
import ReactDOM from "react-dom";
import { Menu, Breadcrumb, Icon } from 'antd';

import { Router, Route, Link, hashHistory} from 'react-router'

import ShowTable from './ShowTable/core.jsx';
import ShowMap from './ShowMap/core.jsx';

import 'antd/dist/antd.less';
import './AsideCollapse/style.css';

const AsideCollapse = React.createClass({
  getInitialState: function() {
    return {
      collapse: true,
    };
  },
  onCollapseChange: function() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render: function() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Link to='showtable'><Icon type="user" /><span className="nav-text">导航一</span></Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to='about'><Icon type="setting" /><span className="nav-text">导航二</span></Link>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Link to='inbox'><Icon type="laptop" /><span className="nav-text">导航三</span></Link>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" /><span className="nav-text">导航四</span>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" /><span className="nav-text">导航五</span>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 'auto' }}>

                {this.props.children || <ShowTable />}
                
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  },
});

const About = React.createClass({
    render : function(){
        return <div>
            <ShowMap/>
        </div>
    }
})
const NoMatch = React.createClass({
    render : function(){
        return <div>
            ERROR!
        </div>
    }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <p><Link to='inbox/message/123'>123</Link></p>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AsideCollapse}>
      <Route path="showtable" component={ShowTable}/>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}>
        <Route path="message/:id" component={Message} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.querySelector('#app'));