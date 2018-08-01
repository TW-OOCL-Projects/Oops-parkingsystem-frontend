import axios from "axios"
import * as actions from '../actions'
// import {allEmployees ,allParkingLots,addEmployee,allOrders} from '../actions'
import requestUrls from "./requestUrls"
export default {
    "getAllEmployees": (dispatch) => axios.get(requestUrls.employees)
        .then((res) => {
            dispatch(actions.allEmployees(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getAllParkingboys": (dispatch) => axios.get(`${requestUrls.employees}?role=parkingboy`)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.allEmployees(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getAllParkingLots": (dispatch) => axios.get(requestUrls.parkingLots)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.allParkingLots(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),

    "changeParkingLotStatus": (id, dispatch) =>
        axios.patch(`${requestUrls.parkingLots}/${id}`)
            .then(res => {
                if (res.status == 204) {
                    // getAllParkingLots(dispatch);
                    axios.get(requestUrls.parkingLots)
                        .then((res) => {
                            console.log(res.data);
                            dispatch(actions.allParkingLots(res.data))
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error)
            }),
    "addEmployee": (dispatch, postData) =>
        axios.post(requestUrls.employees, postData)
            .then((res) => {
                // console.log(res.data);
                dispatch(actions.addEmployee(res.data))
            })
            .catch((error) => {
                console.log(error);
            }),
    "addParkinglot": (dispatch, postData) =>
        axios.post(requestUrls.parkingLots, postData)
            .then(res => {
                // console.log(res.data);
                dispatch(actions.addParkinglot(res.data));
            })
            .catch(error => {
                console.log(error);
            }),

    "modifyParkinglot": (id, value, dispatch) =>
        axios.put(`${requestUrls.parkingLots}/${id}`, value)
            .then(res => {
                // console.log("-------"+JSON.stringify(res.data));
                dispatch(actions.modifyParkinglot(res.data))
                // console.log("-----ok")
            })
            .catch(error => {
                //console.log(error)
            }),

    "frozenAccount": (dispatch, id) => axios.patch(requestUrls.employees + "/" + id, { account_status: "" })
        .then(res => {
            console.log("--------")
            dispatch(actions.handleAccountStatus(res.data));
        })
        .catch(error => {
            console.log(error);
        }),

    "getAllOrders": (dispatch) => axios.get(requestUrls.orders)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.allOrders(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getAllParkingLotsInDashboard": (dispatch) => axios.get(requestUrls.parkingLotsDashboard)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.allParkingLotsInDashboard(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "updateEmployee": (dispatch, employee) => axios.patch(requestUrls.employees + "/" + employee.id, employee)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.updateEmployee(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "searchEmployees": (dispatch, searchValue) => axios.post(requestUrls.employees+"/search", searchValue)
        .then((res) => {
            console.log(res.data);
            dispatch(actions.searchEmployees(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),

}