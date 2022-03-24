import React, {Component} from 'react';
import '../Style/Faq.css'
import {Link} from "react-router-dom";
import Sidebar from "../components/Sidebar";

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    show() {
        console.log('show');
        let chatView = document.getElementById("chat1")
        console.log(chatView.style.visibility)
        chatView.style.visibility = "visible";
        chatView.style.display = 'block';
    }

    render() {
        return (
            <>
                <Sidebar width={320}></Sidebar>
                <div className="title" style={{marginTop: '30px'}}>
                    <h1>FAQ</h1>
                    <Link to="/Main"><h3>MIND CHAT</h3></Link>
                </div>
                <hr/>
                <br/><br/>

                <div id="boardlist">
                    <div className="board_search">
                        <form method="get">
                            <input type={"hidden"} className={"cate"} value="basic_1"
                                   onChange={this.changeTest}></input>
                            <input type={"hidden"} className={"db"} value="basic_2" onChange={this.changeTest}></input>
                            <select className="faq_search_option" onChange={this.changeTest} style={{height: '40px'}}>
                                <option value={"title"}>Title</option>
                                <option value={"content"}>Content</option>
                            </select>&nbsp;&nbsp;
                            <input type="text" name="search_str" value={""} onChange={this.changeTest}
                                   className="basic_search" style={{width: '390px', height: '40px'}}
                                   placeholder='What is your question?'></input>
                            <input type="image" img src="../images/search2.png" style={{width: '40px', height: '40px'}}
                                   onChange={this.changeTest} className='button'></input>


                        </form>
                        <br/>
                        <div className='Faq_category'>
                            <ul className='Faq_category0' style={{paddingLeft: "200px"}}>
                                <li><a href=''>Member</a></li>
                                <li><a href=''>Order</a></li>
                                <li><a href=''>Shipping</a></li>
                                <li><a href=''>Change/Refund/Cancel</a></li>
                                <li><a href=''>Coupon/Mileage</a></li>
                            </ul>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="Faq_table">
                        <table className='Faq__table'>
                            <thead className='Faq_thead'>
                            <tr className='Faq_tr'>
                                <td width={'80px'}><strong>Total : 10</strong></td>
                                <td className='Faq_category2' style={{innerWidth: "100px"}}>
                                    <ul>
                                        <li>&#10004;Total Member&nbsp;&nbsp;</li>
                                        <li>&#10004;Member&nbsp;&nbsp;</li>
                                        <li>&#10004;Order/Payment&nbsp;&nbsp;</li>
                                        <li>&#10004;Shipping&nbsp;&nbsp;</li>
                                        <li>&#10004;Change/Refund/Cancel&nbsp;&nbsp;</li>
                                        <li>&#10004;Coupon/Mileage</li>
                                    </ul>
                                </td>
                            </tr>
                            <br/><br/>

                            </thead>
                            <tbody>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Shipping</td>
                                <td><a>I didn't receive the product, but it says it's delivered.</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Change/Refund/Cancel</td>
                                <td><a>I received the product, but it's damaged.</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Coupon/Mileage</td>
                                <td><a>How long will the coupon last?</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Shipping</td>
                                <td><a>I've received the item, but it says it's being delivered.</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Member</td>
                                <td><a>I'd like to revise my membership information.</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Change/Refund/Cancel</td>
                                <td><a>Until when can I exchange it?</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Change/Refund/Cancel</td>
                                <td><a>When can I cancel it?</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Shipping</td>
                                <td><a>How long will the delivery take?</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Order/Payment</td>
                                <td><a>What are customs duties?</a></td>
                            </tr>
                            <br/>
                            <tr>
                                <th><span>Q</span></th>
                                <td align='left' className='Faq_tbody'>Order/Payment</td>
                                <td><a>I'm trying to pay, but there's an error :(</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="chat" id='chat1' style={{display: 'none'}}>
                        <div className="chat_table">
                            <table className="chat_table1">
                                <a href="" className="chat_a">&#10006;</a>
                                <br/><br/><br/>
                                <tr style={{fontSize: '160%', textAlign: 'left'}}>
                                    <td><h1>MindChat</h1>Whenever! Wherever!<br/>
                                        1:1 Chatting <br/>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="" style={{textDecoration: 'none', color: '#000'}}>
                                            <h1>Shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#10095;</h1>
                                        </a>
                                        <p>More</p><br/><br/><br/><br/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        paddingRight   : '120px',
                                        backgroundColor: '#fff8dc',
                                        color          : '#696969',
                                        borderRadius   : '20px'
                                    }}>
                                        <Link to='About'><h2>MindChat menual</h2></Link>
                                        <p>MindChat you need to catch it ! </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="chat_b">
                        <a href="JavaScript: void(0)" className="chatBtn" onClick={this.show}>&#128172;</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Faq;