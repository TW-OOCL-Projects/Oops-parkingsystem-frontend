import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.ORDERSLIST:{
            let newState = [...state]
            newState = action.ordersList
            return newState;
        }
        case types.SEARCHORDER:{
            // let newState = [...state]
            // newState = action.ordersList
            // return newState;
            let newState = [...action.ordersList]
            return newState
        }
        case types.UPDATEITEM:{
            let newState = [...state]
            return newState.map(i=>{
                if(i.id === action.OrderItem.id){
                    return action.OrderItem
                } else {
                    return i
                }
            })
        }
        default:
            return state
    }
}