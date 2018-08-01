import { combineReducers } from 'redux'
import employeeReducers from "./employee"
import parkingLotReducers from "./parkinglot"
import orderReducers from "./order"
const parkingLotApp = combineReducers({
    employeeReducers,
    parkingLotReducers,
    orderReducers
  })
  export default parkingLotApp