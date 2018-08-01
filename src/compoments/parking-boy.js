import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Menu, Dropdown, message, Input, Row, Col } from 'antd'
const Search = Input.Search;

const columns = [
    // { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'id', dataIndex: 'id', fixed: 'left' },
    { title: '姓名', dataIndex: 'name' },
    { title: '电话号码', dataIndex: 'tel'},
    { title: '状态', dataIndex: 'status'},

    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 200,
        render: () => (
            <span>
                <a href="javascript:;">修改</a>
                <Divider type="vertical" />
                <a href="javascript:;">冻结</a>
            </span>
        ),
    },
];

const data = [{
    name: '张三',
    id: 1,
    tel: '13939391313',
    status: '上班'
}, {
    name: '李四',
    id: 2,
    tel: '13939391313',
    status: '下班'
}];

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
class parkingBoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {/* I am parkingBoy page */}
                <Row type="flex" justify="space-around" align="middle" >
                    <Col span={6}>
                        <Button type="primary">新建</Button>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <Dropdown overlay={menu}>
                            <Button style={{ marginLeft: 8 }}>
                                Button <Icon type="down" />
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

export default parkingBoy;