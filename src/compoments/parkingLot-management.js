import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Menu, Dropdown, message, Input, Row, Col } from 'antd'
import Edit from "./common/editComponent"

class ParkingLotMangement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            isShowModifyForm: false,
            modifyId : 0
        }
    }

    componentWillMount(){
        this.props.onGetAllParkingLots();
    }
    showModifyForm = (value, id) => {
        this.setState({
            isShowModifyForm: value,
            modifyId: id,
        })
    }

    showEditForm = (value) => {
        this.setState({
            isShowEditForm: value,
        })
    }

    modifyForm = (value) => {
        this.props.onModifyParkinglot(this.state.modifyId, value)
    }

    submitForm = (value) => {
        this.props.onAddParkinglot(value)
    }
    render() {

        const data = this.props.parkinglotsList;
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
                render: (parkinglot) => (
                    <span>
                        <a href="javascript:;"
                            onClick={() => this.showModifyForm(true, parkinglot.id)} >修改</a>
                        <Divider type="vertical" />
                        <a href="javascript:;"
                            onClick={()=>{console.log(parkinglot.id);
                                    this.props.changeStatus(parkinglot.id)}}>
                            {parkinglot.status==="open"?"注销":"开放"}
                        </a>
                    </span>
                ),
            },
        ];



        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        const dataFormat = {
            "name":"",
            "size":"",
        }

        function handleMenuClick(e) {
            message.info('Click on menu item.');
            console.log('click', e);
        }
        const Search = Input.Search;
        return (
            <div>
                {this.state.isModifyEditForm}
                <Row type="flex" justify="space-around" align="middle" >
                    <Col span={6}>
                        <Button type="primary" onClick={() => this.showEditForm(true)}>新建</Button>
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
                {this.state.isShowEditForm && <Edit dataFormat={dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
               
                { this.state.isShowModifyForm && <Edit dataFormat={dataFormat} showEditForm={(e) => this.showModifyForm(e)} submitForm={(e) => this.modifyForm(e)} />}
            </div>
        );
    }
}

export default ParkingLotMangement;