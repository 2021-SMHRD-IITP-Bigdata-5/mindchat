import React, {Component} from 'react';
import '../Style/cart.css'
import {Link} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ChatBot from "./ChatBot";


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <>
                <Sidebar width={320}></Sidebar>
                <div className="title" style={{marginTop: '30px'}}>
                    <h1>My Shopping</h1>
                    <Link to="/Main" className="title_a"><h3>MIND CHAT</h3></Link>
                </div>
                <div className="menu">
                    <ul className="menu_ul" style={{listStyle: 'none'}}>
                        <li><Link to="/Cart" className='temp'><strong>Cart</strong></Link></li>
                        <li><Link to="/Order" className='temp'>Order</Link></li>
                        <li><Link to="/Delivery" className='temp'>Delivery</Link></li>
                        <li><Link to="/Coupon" className='temp'>Coupon</Link></li>
                        <li><Link to="/Mileage" className='temp'>Mileage</Link></li>
                    </ul>
                </div>
                <hr/>
                <form method="post" target="_self">
                    <div>
                        <table className="table_1">
                            <thead>
                            <tr className="table_tr">
                                <td className="table_td">
                                    <input type="checkbox"/>
                                </td>
                                <td className="table_img">Image</td>
                                <td className="table_information">Item Info</td>
                                <td className="table_price">Price</td>
                                <td className="table_reserves">Save money</td>
                                <td className="table_category">Shipping</td>
                                <td className="table_fee">Delivery price</td>
                                <td className="table_sum">Total</td>
                                <td className="table_selection">Select</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="table_box">
                                    <input type="checkbox"/></td>
                                <td style={{borderLeftWidth: '0px'}}>
                                    <a href="#">
                                        <img className="table_box_img"
                                             src="//theparfum.co.kr/web/product/medium/20200224/dd1a1aa73ae0a3c9a73145ada935b8ed.jpg"/>
                                    </a>
                                </td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '20px'}}>
                                    <strong> [MINDCHAT] Blue Ode Parfume 35ml</strong></td>

                                <td style={{borderLeftWidth: '0px'}}>
                                    <strong style={{paddingLeft: '20px'}}>23,000won</strong></td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '15px'}}>
                                    <img
                                        src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif"/>
                                    1,150won
                                </td>
                                <td className="table_td">Basic Shipping</td>
                                <td className="table_td">3,000 won<br/>Condition</td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '15px'}}>
                                    <strong>26,000won</strong>
                                </td>
                                <td style={{paddingLeft: '20px'}}>
                                    <a href="#">
                                        <img src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_order.gif"/></a>
                                    <br/>
                                    <a href="#">
                                        <img
                                            src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_delete.gif"/></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                <ChatBot/>
            </>
        );
    }
}

export default Cart;

