import React from 'react';
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
