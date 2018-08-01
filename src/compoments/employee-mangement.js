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
            isShowEditForm: false
        }
    }
    componentWillMount() {
        this.props.onGetAllEmployees()
    }
    showEditForm = (value) => {
        this.setState({
            isShowEditForm: value
        })
    }
    submitForm = (value) => {
        this.props.onAddEmployee(value)
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
            render: () => (
                <span >
                    <a href="javascript:;">修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">冻结</a>
                </span>
            ),
        }];

        const data = this.props.employeesList;
        const dataFormat = {
            "name": "",
            "username": "",
            "email": "",
            "phone": ""
        }
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <Button type="primary" onClick={() => this.showEditForm(true)}>新增</Button>
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
                {this.state.isShowEditForm && <Edit dataFormat={dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default employeeMangment;