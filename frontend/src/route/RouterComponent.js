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
import Faq from "../components/Faq";
import Login from "../components/Login";
import CreateUser from "../components/CreateUser";
import ProductUpload from "../components/ProductUpload";
import Perfume from "../components/Perfume";
import UploadPage from "../components/UploadPage";
import About from "../components/About";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route  path="/main" component={Main} />
                <Route  path="/Cart" component={Cart} />
                <Route  path="/Coupon" component={Coupon}/>
                <Route  path="/Delivery" component={Delivery}/>
                <Route  path="/event" component={Event} />
                <Route  path="/Mileage" component={Mileage} />
                <Route  path="/Order" component={Order} />
                <Route  path="/Faq" component={Faq} />
                <Route  path="/Login" component={Login} />
                <Route  path="/CreateUser" component={CreateUser} />
                <Route path="/Perfume" component={Perfume}/>
                <Route path="/UploadPage" component={UploadPage}/>
                <Route path="/About" component={About}/>
            </Switch>
        </BrowserRouter>
    );
};

export default RouterComponent;
