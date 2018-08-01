import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.EMPLOYEELIST:{
            let newState = [...state]
            newState = action.employeesList
            return newState;
        }
        case types.ADDEMPLOYEE:{
            let newState = [...state,action.employeeItem]
            return newState;
        }
        default:
            return state
    }
}