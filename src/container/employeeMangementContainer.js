import { connect } from 'react-redux'
import employeeMangement from "../compoments/employee-mangement"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        employeesList: state.employeeReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetAllEmployees: () => {
            Api.getAllEmployees(dispatch)
        },
        onAddEmployee: (postData) => {
            Api.addEmployee(dispatch,postData)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(employeeMangement)