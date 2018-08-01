import { connect } from 'react-redux'
import ParkingLotMangement from "../compoments/parkingLot-management"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        parkinglotsList: state.parkingLotReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetAllParkingLots:()=>{
            Api.getAllParkingLots(dispatch)
        },

        changeStatus:(id)=>{
            Api.changeParkingLotStatus(id, dispatch)
        },

        onAddParkinglot:(value)=>{
            Api.addParkinglot(dispatch, value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotMangement)