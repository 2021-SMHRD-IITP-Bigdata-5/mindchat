import React from 'react';
import Coupon from "../components/Coupon";
import Main from "../components/Main";
import Delivery from "../components/Delivery";
import Mileage from "../components/Mileage";
import Order from "../components/Order";
import Filter from "../components/Filter";
import MainCart from "../components/MainCart";
import ChatBot from "../components/ChatBot";


const Home = () => {
    return (
        <div>
            <Filter/>
            <Main />
            <MainCart/>
            <Coupon />
            <Delivery />
            <Mileage />
            <Order />
            <login/>
            <createuser/>
        </div>
    );
};

export default Home;
