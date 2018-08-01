import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select } from 'antd'
import Edit from "./common/editComponent"
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
class parkingBoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            dataFormat: {}
        }
    }
    componentWillMount() {
        this.props.onGetAllParkingboys()
    }
    showEditForm = (value, dataFormat) => {
        this.setState({
            isShowEditForm: value,
            dataFormat: dataFormat
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
        },  {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        },{
            title: '操作',
            key: 'action',
            render: (e) => {
                const {id,email,name,password,phone} = e
                return <span >
                    <a href="javascript:;" onClick={
                        () => this.showEditForm(true, {id,email,name,password,phone})
                    }>修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">冻结</a>
                </span>
            },
        }];

        const data = this.props.parkingboyList;

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
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

export default parkingBoy;