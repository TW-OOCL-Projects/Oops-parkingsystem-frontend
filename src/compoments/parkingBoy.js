import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select, Transfer , Col, Row} from 'antd'
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
        }
    }
    componentWillMount() {
        this.props.onGetAllParkingboys();
        this.props.onGetAllParkinglots();
        this.setState({
            parkinglots: this.props.parkinglots,
        })
        console.log(this.state.parkinglots)
    }


    filterOption = (inputValue, option) => {
        // console.log("++++++++"+JSON.stringify(inputValue))
        return option.description.indexOf(inputValue) > -1;
    }

    handleChange = (nextTargetKeys, direction, moveKeys, id) => {
        if(direction === "right"){
            this.props.onAssignParkinglot(id, moveKeys);
            this.props.onGetAllParkingboys();
            this.props.onGetAllParkinglots();
        }else{
            this.props.onDeleteParkinglot(id, moveKeys)
        }
      }

    generateTransfer = (e) => {
        console.log(e)
        console.log(this.props.parkinglots)
        const parkinglotData = this.props.parkinglots.filter( lot=>
            (lot.status === "open" && (lot.userId == null || lot.userId === e.id))
        ).map(lot=>{
            return {...lot,
                    key: lot.id}
        })
        console.log(parkinglotData)
        const targetKeys = parkinglotData.filter(lot=>
            lot.userId === e.id
        ).map(lot=>lot.key)
        return (
            <Transfer  style={{display:"flex",justifyContent:"center"}}
                dataSource={parkinglotData}//数据源，其中的数据会被渲染到左侧一栏
                listStyle={{
                    width: 250,
                    height: 300,
                  }}
                filterOption={this.filterOption}
                targetKeys={targetKeys}//显示在右侧框数据的key集合
                onChange={(nextTargetKeys, direction, moveKeys)=>this.handleChange(nextTargetKeys, direction, moveKeys, e.id)}//选项在两栏之间转移时的回调函数
                render={item => item.name}
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
                    <a href="javascript:;"
                    // onClick={() => this.props.onChangeAccountSataus(id)}
                    >
                        {e.account_status === "normal" ? "冻结" : "开放"}</a>
                </span>
            },
        }];

        const data = this.props.parkingboyList;


        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{marginBottom:"2rem"}}>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                    <InputGroup compact>
                            <Select defaultValue="id" style={{ width: "100px" }}>
                                <Option value="option1">id</Option>
                                <Option value="Option2">姓名</Option>
                                <Option value="Option3">电话号码</Option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="请输入搜索内容"
                            enterButton="搜索"
                            // size="large"
                            onSearch={value => console.log(value)}
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
                <Table columns={columns} 
                    bordered
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    expandedRowRender={this.generateTransfer}
                    dataSource={data} scroll={{ x: 1300 }} />
                {this.state.isShowEditForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default parkingBoy;