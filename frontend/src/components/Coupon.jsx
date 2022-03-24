import React, {Component} from 'react';
import '../Style/coupon.css'
import {Link} from "react-router-dom";

class Coupon extends Component {
    render() {
        return (
            <body>
            <div className="title" style={{marginTop: '30px'}}>
            <h1>My Shopping</h1>
                <Link to="/Main"><h3>MIND CHAT</h3></Link>
            </div>

            <div className="menu">
                <ul className="menu_ul" style={{listStyle: 'none'}}>
                    <li><Link to="/Cart" className='temp'>Cart</Link></li>
                    <li><Link to="/Order" className='temp'>Order</Link></li>
                    <li><Link to="/Delivery" className='temp'>Delivery</Link></li>
                    <li><Link to="/Coupon" className='temp'><strong>Coupon</strong></Link></li>
                    <li><Link to="/Mileage" className='temp'>Mileage</Link></li>
                </ul>
            </div>
            <hr/>
            <div className="coupontitle">
                <div>
                    <h4>My Coupon list</h4>
                    <p>Available Coupon : 0</p>
                </div>
            </div>
            <div className="tag1">
                <table className="table">
                    <tr id="tag2">
                        <td>Number</td>
                        <td>Coupon</td>
                        <td>Available items</td>
                        <td>Purchase price</td>
                        <td>Payment</td>
                        <td>Benefit</td>
                        <td>Due to</td>
                    </tr>
                    <tr className="tag3">
                        <td><br/><br/><br/><br/>보유하고 계신 쿠폰 내역이 없습니다.<br/><br/><br/><br/><br/></td>
                    </tr>
                </table>
            </div>
            </body>
        );
    }
}

export default Coupon;