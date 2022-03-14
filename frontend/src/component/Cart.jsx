import React, {Component} from 'react';
import '../Style/cart.css'
import {Link} from "react-router-dom";

// function show(){
//     let chatView = document.getElementById("chat1")
//     chatView.style.visibility = "visible";
// }

function Cart(){
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
                <hr/>
                <form method="post" target="_self">
                    <div>
                        <table className="table_1">
                            <tr className="table_tr">
                                <td className="table_td">
                                    <input type="checkbox" />
                                </td>
                                <td className="table_img">이미지</td>
                                <td className="table_information">상품정보</td>
                                <td className="table_price">판매가</td>
                                <td className="table_reserves">적립금</td>
                                <td className="table_category">배송구분</td>
                                <td className="table_fee">배송비</td>
                                <td className="table_sum">합계</td>
                                <td className="table_selection">선택</td>
                            </tr>
                            <tr>
                                <td className="table_box">
                                    <input type="checkbox" /></td>
                                <td style={{borderLeftWidth: '0px'}}>
                                    <a href="#">
                                        <img className="table_box_img" src="//theparfum.co.kr/web/product/medium/20200224/dd1a1aa73ae0a3c9a73145ada935b8ed.jpg" />
                                    </a>
                                </td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '20px'}}>
                                    <strong> [MINDCHAT] 블루 오드퍼퓸 35ml</strong></td>

                                <td style={{borderLeftWidth: '0px'}}>
                                    <strong style={{paddingLeft: '20px'}}>23,000원</strong></td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '15px'}}>
                                    <img src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif"/>
                                    1,150원</td>
                                <td className="table_td">기본배송</td>
                                <td className="table_td">3,000원<br/>조건</td>
                                <td style={{borderLeftWidth: '0px', paddingLeft: '15px'}}>
                                    <strong>26,000원</strong>
                                </td>
                                <td style={{borderLeftWidth: '0px'}}>
                                    <a href="#">
                                        <img src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_order.gif" /></a>
                                    <br/>
                                        <a href="#">
                                            <img src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_delete.gif" /></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </form>

                <div className="chat">
                    <div className="chat_table">
                        <table>
                            <a href="" className="chat_a">&#10006;</a>
                            <br/><br/><br/>
                                <tr style={{fontSize: '160%', textAlign:'left'}}>
                                    <td><h1
                                        style={{marginBottom: '0px', marginTop: '25px'}}>&nbsp향숙이</h1>&nbsp&nbsp언제!
                                        어디서나!<br/>
                                            &nbsp&nbsp간편하게 1:1 상담 <br/>
                                            <hr style={{width: '390px'}} /></td>
                                </tr>
                                <tr>
                                    <td style={{paddingBottom: '70px'}}>
                                        <img id="img1" src="" style={{paddingLeft: '25px'}} />
                                            <a href="" style={{textDecoration: 'none', color:'#000'}}>
                                                <h1 style={{marginTop:'0px', marginBottom:'0px'}}>쇼핑&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &#10095;</h1>
                                            </a>
                                            <p style={{paddingRight: '130px', marginTop: '0px'}}>더보기</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingRight: '160px', backgroundColor: '#fff8dc', color: '#696969'}}>
                                        <a href="" style={{textDecoration: 'none', color: '#000'}}>
                                            <h2 style={{marginBottom:'0px'}}>향숙이 활용백서</h2></a>
                                        <p style={{marginTop:'0px'}}>향숙이 모르면 나만손해</p>
                                    </td>
                                </tr>
                        </table>
                    </div>
                    {/*<div className="chat_b">*/}
                    {/*    <a href="JavaScript: void(0)" onClick="show();"*/}
                    {/*       style={{textDecoration: 'none', color: '#f8f8ff'}}>향숙이&#128172;</a>*/}
                    {/*</div>*/}
                </div>
            </body>

        );
}
export default Cart;

