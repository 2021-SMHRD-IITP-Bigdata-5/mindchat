import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Order extends Component {
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
                    <li><Link to="/Order"className='temp'><strong>Order</strong></Link></li>
                    <li><Link to="/Delivery" className='temp'>Delivery</Link></li>
                    <li><Link to="/Coupon" className='temp'>Coupon</Link></li>
                    <li><Link to="/Mileage" className='temp'>Mileage</Link></li>
                </ul>
            </div>
            <hr />
                <div className="check">
                    <ul>
                        <li><a>주문내역조회(0)&nbsp;&nbsp;&nbsp;&nbsp;취소/반품/교환 내역(0)</a></li>
                    </ul>
                </div>
                <div>
                    <table className="table" border="30">
                        <tr>
                            <td className="date">

                                <a href="#"><img src="http://img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_date1.gif" /></a>
                                <a href="#"><img src="http://img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_date2.gif" /></a>
                                <a href="#"><img src="http://img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_date3.gif" /></a>
                                <a href="#"><img src="http://img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_date4.gif" /></a>
                                <a href="#"><img src="http://img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_date5.gif" /></a>

                                <input value="2022-03-28" type="text" />
                                    <button type="button"><img src="//img.echosting.cafe24.com/skin/admin_ko_KR/myshop/ico_cal.gif" /></button> ~
                                <input value="2022-03-28" type="text" />
                                    <button type="button" ><img src="//img.echosting.cafe24.com/skin/admin_ko_KR/myshop/ico_cal.gif" /></button>
                                <input alt="조회" type="image" src="//img.echosting.cafe24.com/skin/admin_ko_KR/myshop/btn_search.gif" style={{width: '65px', height: '55px'}} />
                            </td>
                        </tr>
                    </table>
                    <ul className="info">
                        <li>&#10004; 기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을 조회하실 수 있습니다.<br/>
                        &#10004; 주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</li>
                    </ul>
                </div>
            </body>
        );
    }
}

export default Order;