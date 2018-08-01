import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Menu, Dropdown, message, Input, Row, Col } from 'antd'
class orderManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.props.onGetAllOrders();
    }

    render() {
        const columns = [
            // { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'id', dataIndex: 'id', key: 'id', fixed: 'left' },
            { title: '车牌号', dataIndex: 'carId', key: 'carId' },
            { title: '类型', dataIndex: 'type', key: 'type' },
            { title: '状态', dataIndex: 'status', key: 'status' },
            {
                title: '操作',
                key: 'operation',
                dataIndex: 'operation',
                fixed: 'right',
                width: 200,
                render: (e) => (
                    <span>
                        <a href="javascript:;">{e}</a>
                    </span>
                ),
            },
        ];

        const data = this.props.ordersList;

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        function handleMenuClick(e) {
            message.info('Click on menu item.');
            console.log('click', e);
        }
        const Search = Input.Search;

        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" >
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <Dropdown overlay={menu}>
                            <Button style={{ marginLeft: 20 }}>
                                选项一 <Icon type="down" />
                            </Button>
                        </Dropdown></Col>
                    <Col span={6}>
                        <Search
                            placeholder="示例文字"
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
            </div>
        );
    }
}

export default orderManagement;