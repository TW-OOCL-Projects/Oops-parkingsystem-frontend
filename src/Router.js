import React, { Component } from 'react';
import employeeMangementContainer from "./container/employeeMangementContainer";
import ParkingLotMangement from "./compoments/parkingLot-management";
import Dashboarsh from "./compoments/dashboarsh";
import OrderManagement from "./compoments/order-management"
import ParkingBoy from "./compoments/parking-boy"
import {Route } from "react-router-dom";
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
                {/* <Route exact path="/login" component={LoginForm} /> */}
                {/* <Route  path="/home" component={HomePage} /> */}
                <Route exact path="/home/employeeMangment" component={employeeMangementContainer} />
                <Route  path="/home/parkingLotMangement" component={parkingLotManagementContainer} />
                <Route  path="/home/dashboarsh" component={Dashboarsh} />
                <Route  path="/home/orderManagement" component={OrderManagementContainer} />
                <Route  path="/home/parkingBoy" component={ParkingBoy} />
            </div>
        );
    }
}

export default Router;