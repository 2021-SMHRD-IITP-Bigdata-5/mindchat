import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Intro from '../components/Intro';
import Cart from '../components/Cart'
import Coupon from "../components/Coupon";
import Main from "../components/Main";
import Delivery from "../components/Delivery";
import Mileage from "../components/Mileage";
import Order from "../components/Order";



const Home = () => {
    return (
        <div>
            <Main />
            <Coupon />
            <Delivery />
            <Mileage />
            <Order />

        </div>
    );
};

export default Home;
