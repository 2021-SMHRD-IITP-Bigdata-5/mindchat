import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Mileage extends Component {
    render() {
        return (
            <body>
            <div className="title">
                <h1>MY SHOPPING</h1>
                <a className="title_a" href="../components/Main.jsx"><h1>MIND CHAT</h1></a>
            </div>

            <div className="menu">
                <ul className="menu_ul"  style={{listStyle:'none'}}>
                    <li><Link to="/main/Cart"><strong>cart</strong></Link></li>
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
                    <tr>
                        <td className="text">
                            <ul className="text1">
                                <li>
                                    <strong >> 총적립금</strong>
                                    <span> 0원</span>
                                </li><br />
                                <li>
                                    <strong>> 사용된 적립금</strong>
                                    <span> 0원</span>
                                </li><br/>
                                <li>
                                    <strong >> 환불예정 적립금</strong>
                                    <span> 0원</span>
                                </li>
                            </ul>
                            <ul className="text2">
                                <li>
                                    <strong>> 사용가능 적립금</strong>
                                    <span> 0원</span>
                                </li><br/>
                                <li>
                                    <strong>> 미가용 적립금</strong>
                                    <span> 0원</span>
                                </li>
                            </ul>
                            <br/><br/><br/><br/><br/><br/>
                        </td>
                    </tr>
                </table>
            </div>

        </body>
        );
    }
}

export default Mileage;