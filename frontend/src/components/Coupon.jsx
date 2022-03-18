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
                    <h4>마이 쿠폰 목록</h4>
                    <p>사용가능 쿠폰 : 0장</p>
                </div>
            </div>
            <div className="tag1">
                <table className="table">
                    <tr id="tag2">
                        <td>번호</td>
                        <td>쿠폰명</td>
                        <td>쿠폰적용상품</td>
                        <td>구매금액</td>
                        <td>결제수단</td>
                        <td>쿠폰혜택</td>
                        <td>사용가능기간</td>
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