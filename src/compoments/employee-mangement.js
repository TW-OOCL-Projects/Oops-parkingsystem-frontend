import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select } from 'antd'
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
            isModifyAdd: true
        }
    }
    componentWillMount() {
        this.props.onGetAllEmployees()
    }
    showEdit
    Form = (value, dataFormat, key) => {
        this.setState({
            isShowEditForm: value,
            dataFormat: dataFormat,
            isModifyAdd: key
        })
    }
    submitForm = (value) => {
        if (this.state.isModifyAdd) {
            this.props.onAddEmployee(value)
        } else{
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
                        () => this.showEditForm(true, { id, email, name, password, phone, username }, false)
                    }>修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={
                        () => this.updateAccountStatus( id)
                    }>{e.account_status==="normal"?"冻结":"开放"}</a>
                </span>
            },
        }];

        const data = this.props.employeesList;

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <Button type="primary" onClick={() => this.showEditForm(true, {
                        "name": "",
                        "username": "",
                        "email": "",
                        "phone": ""
                    }, true)}>新增</Button>
                    <div style={{ display: "flex" }}>
                        <InputGroup compact>
                            <Select defaultValue="Option1">
                                <Option value="Option1">Option1</Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                        </InputGroup>
                        <Search
                            style={{ width: 400 }}
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                </div>
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
                {this.state.isShowEditForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default employeeMangment;