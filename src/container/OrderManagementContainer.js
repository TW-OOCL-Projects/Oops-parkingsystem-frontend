import { connect } from 'react-redux'
import orderManagement from "../compoments/order-management"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        ordersList: state.orderReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetAllOrders:()=>{
            Api.getAllOrders(dispatch)

        },
        onSearchOrders:(searchValue)=>{
            Api.searchOrders(dispatch,searchValue)
        },
        onPostOrderToParkingBoy:(id,boyid)=>{
            Api.postOrderToParkingBoy(id,boyid,dispatch);
        },
        onGetAvailableBoys :(success,id)=>{
            return Api.getAllAvailableBoys(success,id)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(orderManagement)