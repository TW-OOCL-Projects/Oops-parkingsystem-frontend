import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import HomePage from "./compoments/home"
import employeeMangement from "./compoments/employee-mangement";
import ParkingLotMangement from "./compoments/parkingLot-management";
import Dashboarsh from "./compoments/dashboarsh";
import OrderManagement from "./compoments/order-management"
import ParkingBoy from "./compoments/parking-boy"

import {Route,Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
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
    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
           
              <Menu.Item key="1">
              <Link to="/employeeMangment">
                <Icon type="user" />
                <span>员工管理</span>
                </Link>
              </Menu.Item>
            
            <Menu.Item key="2">
            <Link to="/parkingLotMangement">
              <Icon type="video-camera" />
              <span>停车场管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/parkingBoy">
              <Icon type="upload" />
              <span>停车员管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/dashboarsh">
              <Icon type="codepen-circle" />
              <span>停车场Dashboarsh</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="/orderManagement">
              <Icon type="dropbox" />
              <span>订单管理</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ Width: "100%" }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, minWidth: "100%" }}>
              <div>
                <Route exact path="/home" component={HomePage} />
                <Route  path="/employeeMangment" component={employeeMangement} />
                <Route  path="/parkingLotMangement" component={ParkingLotMangement} />
                <Route  path="/dashboarsh" component={Dashboarsh} />
                <Route  path="/orderManagement" component={OrderManagement} />
                <Route  path="/parkingBoy" component={ParkingBoy} />
              </div >
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
