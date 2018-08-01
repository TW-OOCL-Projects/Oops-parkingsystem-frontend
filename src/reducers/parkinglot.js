import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
        case types.MODIFYPARKINGLOT:
        case types.ADDPARKINGLOT:{
            let newState = [...state,action.parkinglotItem]
            return newState.filter(p=>{
                if(p.id === action.parkinglotItem.id){
                    if(p.name !== action.parkinglotItem.name ||
                            p.size !== action.parkinglotItem.size)
                        return false;
                }
                return true;
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