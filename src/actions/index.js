import * as types from '../constants/ActionTypes'

//  employee
export const allEmployees = (employeesList) => { return { type: types.EMPLOYEELIST, employeesList } };
export const addEmployee = (employeeItem) => { return { type: types.ADDEMPLOYEE, employeeItem } };

//  parkinglot
export const allParkingLots = (parkinglotsList) => { return { type: types.PARKINGLOTLIST, parkinglotsList } }
export const addParkinglot = (parkinglotItem) => {return {type: types.ADDPARKINGLOT, parkinglotItem}};

export const allOrders = (ordersList) => {return {type:types.ORDERSLIST,ordersList}}


// order


