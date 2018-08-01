import axios from "axios"
import {allEmployees ,allParkingLots} from '../actions'
import requestUrls from "./requestUrls"
export default {
    "getAllEmployees": (dispatch) => axios.get(requestUrls.employees)
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
}