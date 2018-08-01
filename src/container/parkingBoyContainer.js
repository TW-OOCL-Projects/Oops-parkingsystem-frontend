import { connect } from 'react-redux'
import parkingBoy from "../compoments/parkingBoy"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
       parkingboyList: state.employeeReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {

        onGetAllParkingboys: () => {
            Api.getAllParkingboys(dispatch)
        },
        onChangeAccountSataus: (id) => {
            Api.frozenAccount(dispatch,id)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(parkingBoy)