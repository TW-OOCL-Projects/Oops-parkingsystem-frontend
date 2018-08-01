import { connect } from 'react-redux'
import parkingBoy from "../compoments/parkingBoy"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        employeesList: state.employeeReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetAllParkingboys: () => {
            Api.getAllParkingboys(dispatch)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(parkingBoy)