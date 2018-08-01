import { connect } from 'react-redux'
import Dashboarsh from "../compoments/dashboarsh"
import Api from "../API/parkingLotAPI"

const mapStateToProps = (state, ownProps) => {
    return {
        parkinglotsListInDashboard: state.parkinglotsListInDashboardReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetAllParkingLotsInDashboard:()=>{
            Api.getAllParkingLotsInDashboard(dispatch)
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboarsh)