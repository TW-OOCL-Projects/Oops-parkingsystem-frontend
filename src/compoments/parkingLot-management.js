import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Menu, Dropdown, message, Input, Row, Col } from 'antd'
class ParkingLotMangement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const columns = [
            // { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'id', dataIndex: 'id', key:'id',fixed: 'left' },
            { title: '名字', dataIndex: 'name',key:'name'},
            { title: '大小', dataIndex: 'size' ,key:'size'},
            {
                title: '操作',
                key: 'operation',
                fixed: 'right',
                width: 200,
                render: () => (
                    <span>
                        <a href="javascript:;">修改</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">注销</a>
                    </span>
                ),
            },
        ];
        
        // const data = [{
        //     name: '停车场A',
        //     id: 1,
        //     size: '20'
        // }, {
        //     name: '停车场B',
        //     id: 2,
        //     size: '5'
        // }];

        const data = this.props.parkinglotsList;


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
                    <Col span={6}>
                        <Button type="primary">新建</Button>
                    </Col>
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

export default ParkingLotMangement;