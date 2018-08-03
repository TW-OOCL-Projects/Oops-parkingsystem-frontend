import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select, Row, Col } from 'antd'
import Edit from "./common/editComponent"
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
class employeeMangment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            dataFormat: {},
            isModifyAdd: true,
            searchType: "id"
        }
    }
    componentWillMount() {
        this.props.onGetAllEmployees()
    }
    setSeachType = (e) => {
        console.log(e)
        this.setState({
            searchType: e
        })
    }

    showEditForm = (value, dataFormat, key) => {
        this.setState({
            isShowEditForm: value,
            dataFormat: dataFormat,
            isModifyAdd: key
        })
    }
    submitForm = (value) => {
        if (this.state.isModifyAdd) {
            this.props.onAddEmployee(value)
        } else {
            this.props.onUpdateEmployee(value)
        }
    }

    updateAccountStatus = (id) => {
        this.props.onChangeAccountSataus(id)
    }
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <p>{text}</p>,
        }, {
            title: "姓名",
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '操作',
            key: 'action',
            render: (e) => {
                const { id, email, name, password, phone, username } = e
                return <span >
                    <a href="javascript:;" onClick={
                        () => this.showEditForm(true, { id, email, name, password, phone, username,role:e.role.role }, false)
                    }>修改</a>
                    {id !== 1 &&
                        <span>
                            <Divider type="vertical" />
                            <a href="javascript:;" onClick={
                                () => this.updateAccountStatus(id)
                            }>{e.account_status === "normal" ? "冻结" : "开放"}</a>
                        </span>
                    }

                </span>
            },
        }];

        const data = this.props.employeesList;

        return (
            <div>
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={6}>
                    <Button type="primary" onClick={() => this.showEditForm(true, {
                        "name": "",
                        "username": "",
                        "email": "",
                        "phone": ""
                    }, true)}>新增</Button>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <InputGroup compact>
                            <Select defaultValue="name" style={{ width: "100px" }} onChange={(e) => this.setSearchType(e)}>
                                <Option value="name">名称</Option>
                                <Option value="tel">电话号码</Option>
                                <Option value="sizeBt">容量大于</Option>
                                <Option value="sizeSt">容量小于</Option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                    <Search
                            style={{ width: 400 }}
                            placeholder="请输入搜索内容"
                            onSearch={value => this.props.onSearchEmployees({
                                searchType: this.state.searchType,
                                searchValue: value
                            })}
                            enterButton="搜索"
                        />
                    </Col>
                </Row>
                {data&&<Table bordered columns={columns} dataSource={data} scroll={{ x: 1300 }} />}
                {this.state.isShowEditForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default employeeMangment;