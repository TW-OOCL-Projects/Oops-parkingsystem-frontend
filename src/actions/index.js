import * as types from '../constants/ActionTypes'

//  employee
export const allEmployees = (employeesList) => { return { type: types.EMPLOYEELIST, employeesList } };
export const addEmployee = (employeeItem) => { return { type: types.ADDEMPLOYEE, employeeItem } };
export const handleAccountStatus = (employeeItem) => { return { type: types.ACCOUNTSTATUS, employeeItem } };

//  parkinglot
export const allParkingLots = (parkinglotsList) => { return { type: types.PARKINGLOTLIST, parkinglotsList } }
export const addParkinglot = (parkinglotItem) => {return {type: types.ADDPARKINGLOT, parkinglotItem}};
export const modifyParkinglot = (parkinglot)=>{return {type: types.MODIFYPARKINGLOT, parkinglot}}


// order
export const allOrders = (ordersList) => {return {type:types.ORDERSLIST,ordersList}}


// parkinglot in dashboard
export const allParkingLotsInDashboard=(parkinglotsListInDashboard)=>{return {type:types.PARKINGLOTLISTINDASHBOARD,parkinglotsListInDashboard}}
