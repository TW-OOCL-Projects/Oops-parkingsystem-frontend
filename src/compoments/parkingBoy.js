import React, { Component } from 'react';
import { Divider, Table, Button, Input, Select, Transfer , Col, Row,Tag} from 'antd'
import Edit from "./common/editComponent"
import * as types from '../constants/ActionTypes'
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
class parkingBoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            dataFormat: {},
            parkinglots:[],
            filterList:[],
            searchType: "id",
            tags:[],
            parkingBoys:this.props.parkingboyList,
        }
    }
    componentWillMount() {
        console.log(this.props.parkingboyList)
        this.props.onGetAllParkingboys();
        this.props.onGetAllParkinglots();
        this.setState({
            parkinglots: this.props.parkinglots,
            parkingBoys:this.props.parkingboyList,
        })
        console.log(this.state.parkinglots)
    }


    filterOption = (inputValue, option) => {
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
        const parkinglotData = this.props.parkinglots.filter(lot=>
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
    setSeachType = (e) => {
        this.setState({
            searchType: e
        })
    }
    onSearchBoys = (e) =>{
        let temp = this.state.filterList.concat();
        let flag = true;
        for(let i =0 ;i<temp.length;i++){
            if(temp[i].searchType === e.searchType)
            {
                temp[i].searchValue = e.searchValue;
                flag = false;
                break;
            }
        }
        if(flag)
        {
            temp.push(e);
        }
        this.showTags(temp);
    }
    showTags = (list)=>{
        let tags = [];
        let parkingBoys = this.props.parkingboyList;
        console.log(parkingBoys);
        let type ;
        let typeAndBoy;
        console.log(list);
        for(let i=0;i<list.length;i++){
            typeAndBoy =this.findTypeAndBoys(list[i].searchType,list[i].searchValue,parkingBoys)
            parkingBoys = typeAndBoy.parkingBoys;
            type = typeAndBoy.type;
            tags.push({"name":type,"searchITtem":list[i]});
        }
        console.log(tags)
        this.setState({
            filterList:list,tags,parkingBoys
        })

    }
    deleteKeyWord = (e,key)=> {
        console.log(this.state.filterList.concat())
        console.log(key)
        let filterList = this.state.filterList.filter(x=> !(x == key))
        console.log(filterList);
        let type;
        let typeAndBoy;
        let parkingBoys = this.props.parkingboyList;
        let tags = [];
        for (let i = 0; i < filterList.length; i++) {
            typeAndBoy =this.findTypeAndBoys(filterList[i].searchType,filterList[i].searchValue,parkingBoys)
            parkingBoys = typeAndBoy.parkingBoys;
            type = typeAndBoy.type;
            tags.push({"name":type,"searchITtem":filterList[i]});
        }
        this.setState({filterList,parkingBoys,tags})
        setTimeout(()=>{
            console.log(this.state)
        },2000)

    }

    findTypeAndBoys = (searchType,searchValue,parkingBoys)=>{
        console.log(parkingBoys)
         let newparkingBoys =[];
        let type;
        if(searchType === "id")
        {
            type = types.id;
            newparkingBoys = parkingBoys.filter(x=>x.id == searchValue);
        }
        else if(searchType === "name")
        {
            type = types.name;
            newparkingBoys = parkingBoys.filter(x=>x.name === searchValue);
        }
        else  if(searchType === "phone"){
            newparkingBoys = parkingBoys.filter(x=>x.phone === searchValue);
            type = types.phone;
        }

        return {
            "type":type,
            "parkingBoys":newparkingBoys
        }

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
                    >
                        {e.account_status === "normal" ? "冻结" : "开放"}</a>
                </span>
            },
        }];

        const data = this.props.parkingboyList;


        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{marginBottom:"2rem"}}>
                    <Col ></Col>
                    <Col ></Col>
                    <Col  align="right">
                    <InputGroup compact>
                            <Select defaultValue="id" style={{ width: "100px" }} onChange={this.setSeachType}>
                                <Option value="id">id</Option>
                                <Option value="name">姓名</Option>
                                <Option value="phone">电话号码</Option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col >
                        <Search
                            placeholder="请输入搜索内容"
                            enterButton="搜索"
                            // size="large"
                            onSearch={value => this.onSearchBoys({
                                searchType: this.state.searchType,
                                searchValue: value
                            })}
                            style={{ width: 400 }}
                        />
                    </Col>
                    {this.state.tags.map(x => <Tag closable afterClose = {(e)=> this.deleteKeyWord(e,x.searchITtem)} key = {x.searchITtem.searchType}>{x.name}:{x.searchITtem.searchValue}</Tag>)}
                </Row>
                <Table columns={columns} 
                    bordered
                    expandedRowRender={this.generateTransfer}
                    dataSource={this.state.parkingBoys} scroll={{ x: 1300 }} />
                {this.state.isShowEditForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
            </div>
        );
    }
}

export default parkingBoy;