import React from 'react';
import ReactDOM from "react-dom";
import { Menu, Breadcrumb, Icon } from 'antd';

import { Router, Route, Link, hashHistory } from 'react-router'

import ShowTable from './ShowTable/core.jsx';
import ShowMap from './ShowMap/core.jsx';

import { Card, Alert } from 'antd';

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
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['demoA']}>
            <Menu.Item key="demoA">
              <Link to='pageA'><Icon type="exception" /><span className="nav-text">示例一：复杂数据的表格展示</span></Link>
            </Menu.Item>
            <Menu.Item key="demoB">
              <Link to='pageB'><Icon type="pie-chart" /><span className="nav-text">示例二：数据可视化</span></Link>
            </Menu.Item>
            <Menu.Item key="demoC">
              <Link to='pageC'><Icon type="link" /><span className="nav-text">示例三：单页应用的路由管理</span></Link>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        
        {this.props.children || <ShowTable />}
        
      </div>
    );
  },
});

const ChartPage = React.createClass({
    render : function(){
      return (
        <ShowMap/>
      )
    }
})

const RoutePage = React.createClass({
  render() {
    return (
       <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>示例三</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{ height: 1000 }}>

              <Alert message="示例三：单页应用的路由管理"
                description="React Router 是完整的 React 路由解决方案，它保持 UI 与 URL 同步，拥有简单的 API 与强大的功能例如代码缓冲加载、动态路由匹配、以及建立正确的位置过渡处理。"
                type="info" closeText="不再提醒"
              />

              <div>
                <p>点击以下的路由链接，能够在当前的单页应用内切换组件</p>
                <p><span><Link to='pageC/message/1'>链接1</Link></span> / <span><Link to='pageC/message/2'>链接2</Link></span> / <span><Link to='pageC/message/3'>链接3</Link></span> / <span><Link to='pageC/message/4'>链接4</Link></span></p>
                <div style={{marginTop: 50, marginBottom: 80}} >
                  {this.props.children || "这是缺省状态下显示的文字信息"}
                </div>
              </div>
              
              <div>
                <p style={{fontWeight: 700}}>相关文档：</p>
                <br/>
                <ol>
                  <li>1. <a href="http://react-guide.github.io/react-router-cn/" target="_blank">单页应用路由解决方案：React Router</a></li>
                </ol>
              </div>
              
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
        www.oulve.com © 2016 由 Charles Lim 技术支持
        </div>
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return (
      <Card title="动态路由展示" >
        <h3>Page ID: {this.props.params.id}</h3>
      </Card>
    )
  }
})

const NoMatch = React.createClass({
    render : function(){
        return <div>
            ERROR!
        </div>
    }
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AsideCollapse}>
      <Route path="pageA" component={ShowTable}/>
      <Route path="pageB" component={ChartPage}/>
      <Route path="pageC" component={RoutePage}>
        <Route path="message/:id" component={Message} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.querySelector('#app'));