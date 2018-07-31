import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
class Tabbars extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.collapsed}
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
        );
    }
}

export default Tabbars;