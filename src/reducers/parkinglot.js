import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.PARKINGLOTLIST:{
            let newState = [...state]
            newState = action.parkinglotsList
            return newState;
        }
        default:
            return state
    }
}