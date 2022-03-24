import React, {Component} from 'react';
import '../Style/delivery.css';
import {Link} from "react-router-dom";

class Delivery extends Component {
    render() {
        return (
            <body>
             <div className="title" style={{marginTop: '30px'}}>
                <h1>My Shopping</h1>
                <Link to="/Main" className="title_a"><h3>MIND CHAT</h3></Link>
            </div>

            <div className="menu">
                <ul className="menu_ul"  style={{listStyle:'none'}}>
                    <li><Link to="/Cart" className='temp'>Cart</Link></li>
                    <li><Link to="/Order" className='temp'>Order</Link></li>
                    <li><Link to="/Delivery" className='temp'><strong>Delivery</strong></Link></li>
                    <li><Link to="/Coupon" className='temp'>Coupon</Link></li>
                    <li><Link to="/Mileage" className='temp'>Mileage</Link></li>
                </ul>
            </div>
            <hr />
            <div>
                <table className="table">
                    <tr className="tag1">
                        <td style={{textAlign:"left"}}>Order date[Order No.]</td>
                        <td style={{textAlign:"left"}}>Image</td>
                        <td style={{textAlign:"right"}}>Item info</td>
                        <td style={{width: '170px', textAlign:"right"}}>Count</td>
                        <td style={{textAlign:"right"}}>Price</td>
                        <td style={{textAlign:"center"}}>Order States</td>
                        <td style={{width: '140px', textAlign:"center"}}>Cancel/Change/Return</td>
                    </tr>
                    <tr className="tag2">
                        <td colSpan="7"><br/><br/><br/><br/> No Order.<br/><br/><br/><br/><br/></td>
                    </tr>
                </table>
            </div>
        </body>
        );
    }
}

export default Delivery;