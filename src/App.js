import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Router from "./Router";
import Tabbars from "./compoments/tabbars";
import { Avatar, Layout, Icon, Menu, Dropdown, message } from 'antd';
const { Header, Content } = Layout;
// import API from "./API/Example"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
  }
  
  render() {
    const onClick = function ({ key }) {
      message.info(`Click on item ${key}`);
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <Layout className="layout">
        <Tabbars collapsed={this.state.collapsed} />
        <Layout style={{ Width: "100%" }}>
          <Header style={{ background: '#fff', padding: 0 }} className="Header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
              <Dropdown overlay={menu} className="Dropdown">
                <Avatar size="large" icon="user"  />
              </Dropdown>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, minWidth: "100%" }}>
            <div>
              <Router />
            </div >
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
