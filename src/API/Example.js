import axios from "axios"
import { } from '../actions'
import requestUrls from "./requestUrls"
export default {
    "example": () => axios.get(requestUrls.getHelloWorld)
        .then((res) => {
            alert(res.data)
        })
        .catch((error) => {
            console.log(error);
        }),
}