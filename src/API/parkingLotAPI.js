import axios from "axios"
import {allEmployees } from '../actions'
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
}