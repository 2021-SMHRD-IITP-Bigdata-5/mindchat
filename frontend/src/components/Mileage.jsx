import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../Style/mileage.css";

class Mileage extends Component {
    render() {
        return (
            <body>
            <div className="title" style={{marginTop: '30px'}}>
                <h1>My Shopping</h1>
                <Link to="/Main" className="title_a"><h3>MIND CHAT</h3></Link>
            </div>
            <div className="menu">
                <ul className="menu_ul"  style={{listStyle:'none', textDecoration:'none'}}>
                    <li><Link to="/Cart" className='temp'>Cart</Link></li>
                    <li><Link to="/Order" className='temp'>Order</Link></li>
                    <li><Link to="/Delivery" className='temp'>Delivery</Link></li>
                    <li><Link to="/Coupon" className='temp'>Coupon</Link></li>
                    <li><Link to="/Mileage" className='temp'><strong>Mileage</strong></Link></li>
                </ul>
            </div>
            <hr />
            <div>
            <table className="table">
                    <tr>
                        <td className="text">
                            <ul className="text1" >
                                <li>
                                    <strong >> &nbsp; 총적립금</strong>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        0원</span><br/><br/>
                                    <strong>> &nbsp; 사용된 적립금</strong>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0원</span><br/><br/>
                                    <strong >> &nbsp; 환불예정 적립금</strong>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp; 0원</span>
                                </li>                           
                            </ul>
                            <ul className="text2">
                                <li>
                                    <strong>> &nbsp; 사용가능 적립금</strong>
                                    <span> &nbsp; 0원</span><br/><br/>
                                    <strong>> &nbsp; 미가용 적립금</strong>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp; 0원</span><br/><br/>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
        );
    }
}

export default Mileage;