import axios from "axios"
import {allEmployees ,allParkingLots,addEmployee, addParkinglot,allOrders, modifyParkinglot,handleAccountStatus} from '../actions'
// import {allEmployees ,allParkingLots,addEmployee,allOrders} from '../actions'
import requestUrls from "./requestUrls"
export default {
    "getAllEmployees": (dispatch) => axios.get(requestUrls.employees)
        .then((res) => {
            dispatch(allEmployees(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getAllParkingboys": (dispatch) => axios.get(`${requestUrls.employees}?role=parkingboy`)
        .then((res) => {
            console.log(res.data);
            dispatch(allEmployees(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getAllParkingLots": (dispatch) => axios.get(requestUrls.parkingLots)
        .then((res) => {
            console.log(res.data);
            dispatch(allParkingLots(res.data))
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
                            dispatch(allParkingLots(res.data))
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
                console.log(res.data);
                dispatch(addEmployee(res.data))
            })
            .catch((error) => {
                console.log(error);
            }),
    "addParkinglot": (dispatch, postData) =>
        axios.post(requestUrls.parkingLots, postData)
            .then(res => {
                console.log(res.data);
                dispatch(addParkinglot(res.data));
            })
            .catch(error => {
                console.log(error);
            }),

    "modifyParkinglot": (id, value, dispatch) =>
        axios.put(`${requestUrls.parkingLots}/${id}`, value)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            }),

    "frozenAccount": (dispatch, id) => axios.patch(requestUrls.employees + "/" + id)
        .then(res => {
            console.log(id)
            console.log(res.data);
            // dispatch(handleAccountStatus(res.data));
        })
        .catch(error => {
            console.log(error);
        }),

    "getAllOrders": (dispatch) => axios.get(requestUrls.orders)
        .then((res) => {
            console.log(res.data);
            dispatch(allOrders(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
}