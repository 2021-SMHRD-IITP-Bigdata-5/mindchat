import React, {Component} from 'react';
import '../Style/event.css'
import {Link} from "react-router-dom";

class Event extends Component {
    render() {
        return (
            <body>
            <div className="title">
                <h1>MY SHOPPING</h1>
                <a href="../components/Main.jsx"><h1>MIND CHAT</h1></a>
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
                    <table>
                        <tr>
                            <td className="image">
                                <a href="#">
                                    <img src="//www.afterblow-scent.com/file_data/afterblow/gallery/2022/01/06/10ff20abe099f6ea12a3974cc086d325.jpg" /></a>

                                <a href="#">
                                    <img src="//www.afterblow-scent.com/file_data/afterblow/gallery/2021/12/21/543f9d809cdab5e3d88cee113d2d6db3.jpg" /></a>

                                <a href="#">
                                    <img src="//www.afterblow-scent.com/file_data/afterblow/gallery/2021/12/22/de54d8481a74d8d3b561bb3c3fcc1d23.jpg" /></a>
                            </td>
                        </tr>
                    </table>
                    <br />
                        <a style={{paddingRight: '30px', paddingLeft: '50px'}}><strong>MIND CHAT Launching Event (1/10 - 1/31)</strong></a>
                        <a style={{paddingRight: '200px', paddingLeft: '120px'}}><strong>MIND CHAT New Member Event</strong></a>
                        <a><strong>MIND CHAT Membership Benefits</strong></a>
                        <br/><br/>
                            <a style={{paddingRight: '30px', paddingLeft: '150px'}}>2021-12-25</a>
                            <a style={{paddingRight: '30px', paddingLeft: '350px'}}>2022-03-02</a>
                            <a style={{paddingRight: '30px', paddingLeft: '320px'}}>2022-03-02</a>
                </div>
            </body>
        );
    }
}

export default Event;