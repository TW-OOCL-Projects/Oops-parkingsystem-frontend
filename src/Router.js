import React, { Component } from 'react';
import HomePage from "./compoments/home"
import employeeMangementContainer from "./container/employeeMangementContainer";
import ParkingLotMangement from "./compoments/parkingLot-management";
import Dashboarsh from "./compoments/dashboarsh";
import OrderManagement from "./compoments/order-management"
import ParkingBoy from "./compoments/parking-boy"
import {Route } from "react-router-dom";
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route exact path="/home" component={HomePage} />
                <Route  path="/employeeMangment" component={employeeMangementContainer} />
                <Route  path="/parkingLotMangement" component={ParkingLotMangement} />
                <Route  path="/dashboarsh" component={Dashboarsh} />
                <Route  path="/orderManagement" component={OrderManagement} />
                <Route  path="/parkingBoy" component={ParkingBoy} />
            </div>
        );
    }
}

export default Router;