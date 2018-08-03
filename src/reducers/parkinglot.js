import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
        case types.ADDPARKINGLOT:{
            return [...state, action.parkinglotItem]
        }
        case types.MODIFYPARKINGLOT:{
            let newState = [...state]
            return newState.map(p=>{
                if(p.id === action.parkinglotItem.id){
                    return action.parkinglotItem
                }
                return p;
            });
        }
        case types.PARKINGLOTLIST:{
            let newState = [...state]
            newState = action.parkinglotsList
            return newState;
        }
        default:
            return state
    }
}