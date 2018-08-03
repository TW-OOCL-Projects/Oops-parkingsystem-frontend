import React, { Component } from 'react';
import employeeMangementContainer from "./container/employeeMangementContainer";
import Dashboarsh from "./container/dashboarshContainer";
import ParkingBoy from "./container/parkingBoyContainer"
import { Route,Redirect } from "react-router-dom";
import Welcome from "./compoments/welcome"
import parkingLotManagementContainer from './container/parkingLotManagementContainer';
import OrderManagementContainer from './container/OrderManagementContainer';
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path="/home/welcome" component={Welcome} />
                <Route path="/home/employeeMangment" component={employeeMangementContainer} />
                <Route path="/home/parkingLotMangement" component={parkingLotManagementContainer} />
                <Route path="/home/dashboarsh" component={Dashboarsh} />
                <Route path="/home/orderManagement" component={OrderManagementContainer} />
                <Route path="/home/parkingBoy" component={ParkingBoy} />
                <Redirect  to="/home/welcome" />
            </div>
        );
    }
}

export default Router;