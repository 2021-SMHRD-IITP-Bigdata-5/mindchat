import React, {Component} from 'react';
import '../Style/delivery.css';
import {Link} from "react-router-dom";

class Delivery extends Component {
    render() {
        return (
            <body>
            <div className="title">
                <h1>MY SHOPPING</h1>
                <a className="title_a" href="../components/Main.jsx"><h1>MIND CHAT</h1></a>
            </div>

            <div className="menu">
                <ul className="menu_ul"  style={{listStyle:'none'}}>
                    <li> <Link to="/main/Cart"><strong>cart</strong></Link></li>
                    <li><Link to="/main/Cart/Order">order</Link></li>
                    <li><Link to="/main/Cart/Delivery">delivery</Link></li>
                    <li><Link to="/main/Cart/Coupon">coupon</Link></li>
                    <li><Link to="/main/Cart/Mileage">mileage</Link></li>
                    <li><Link to="/main/Cart/Event">event</Link></li>
                </ul>
            </div>
            <hr />
            <div>
                <table className="table">
                    <tr className="tag1">
                        <td style={{textAlign:"left"}}>주문일자[주문번호]</td>
                        <td style={{textAlign:"left"}}>이미지</td>
                        <td style={{textAlign:"right"}}>상품정보</td>
                        <td style={{width: '170px', textAlign:"right"}}>수량</td>
                        <td style={{textAlign:"right"}}>상품구매금액</td>
                        <td style={{textAlign:"center"}}>주문처리상태</td>
                        <td style={{width: '140px', textAlign:"center"}}>취소/교환/반품</td>
                    </tr>
                    <tr className="tag2">
                        <td colSpan="7"><br/><br/><br/><br/>주문내역이 없습니다.<br/><br/><br/><br/><br/></td>
                    </tr>
                </table>
            </div>
        </body>
        );
    }
}

export default Delivery;