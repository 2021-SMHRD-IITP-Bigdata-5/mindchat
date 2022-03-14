import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '../components/Intro';
import Main from '../components/Main';
import Cart from '../components/Cart';
import Coupon from "../components/Coupon";
import Delivery from "../components/Delivery";
import Event from "../components/Event"
import Mileage from "../components/Mileage";
import Order from "../components/Order";
import UploadPage from "../components/UploadPage";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/main/Cart" component={Cart} />
                <Route exact path="/main/Cart/Coupon" component={Coupon}/>
                <Route exact path="/main/Cart/Delivery" component={Delivery}/>
                <Route exact path="/main/Cart/event" component={Event} />
                <Route exact path="/main/Cart/Mileage" component={Mileage} />
                <Route exact path="/main/Cart/Order" component={Order} />
                <Route exact path="/main/UploadPage" component={UploadPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default RouterComponent;
