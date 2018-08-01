import { combineReducers } from 'redux'
import employeeReducers from "./employee"
import parkingLotReducers from "./parkinglot"
const parkingLotApp = combineReducers({
    employeeReducers,
    parkingLotReducers
  })
  export default parkingLotApp