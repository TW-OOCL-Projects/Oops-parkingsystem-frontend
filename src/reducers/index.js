import { combineReducers } from 'redux'
import employeeReducers from "./employee"
const parkingLotApp = combineReducers({
    employeeReducers
  })
  export default parkingLotApp