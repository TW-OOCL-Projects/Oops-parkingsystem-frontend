import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select, Transfer } from 'antd'
import Edit from "./common/editComponent"
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
class parkingBoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            dataFormat: {},
            mockData: [],//mock
            targetKeys: []//mock
        }
    }
    componentWillMount() {
        this.props.onGetAllParkingboys()
    }

    componentDidMount() {//mock
        this.getMock();
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    }

    filterOption = (inputValue, option) => {
        return option.description.indexOf(inputValue) > -1;
    }

    // handleChange = (targetKeys) => {
    //     this.setState({ targetKeys });
    // }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
    
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      }

    generateTransfer = () => {
        return (
            <Transfer
                dataSource={this.state.mockData}//数据源，其中的数据会被渲染到左侧一栏
                showSearch//显示搜索框
                listStyle={{
                    width: 250,
                    height: 300,
                  }}
                searchPlaceholder='请输入搜索内容'
                titles={['可选停车场', '管理的停车场']}
                filterOption={this.filterOption}
                targetKeys={this.state.targetKeys}//显示在右侧框数据的key集合
                onChange={this.handleChange}//选项在两栏之间转移时的回调函数
                render={item => item.title}
            />)
    }


    showEditForm = (value, dataFormat) => {
        this.setState({
            isShowEditForm: value,
            dataFormat,
        })
    }
    submitForm = (value) => {
        this.props.onUpdateEmployee(value)
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
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        }, {
            title: '操作',
            key: 'action',
            render: (e) => {
                const { id, email, name, password, phone } = e
                return <span >
                    <a href="javascript:;" onClick={
                        () => this.showEditForm(true, { id, email, name, password, phone })
                    }>修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={
                        () => this.props.onChangeAccountSataus(id)}>
                        {e.account_status === "normal" ? "冻结" : "开放"}</a>
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
                <Table columns={columns}
                    bordered
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    expandedRowRender={() => this.generateTransfer()}
                    dataSource={data} scroll={{ x: 1300 }} />
                {this.state.isShowEditForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default parkingBoy;