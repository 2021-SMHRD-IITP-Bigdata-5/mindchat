import React, {Component, useState} from 'react';
import {Link} from "@mui/material";


// class ChatBot extends Component {
//
//
//     show() {
//         let chatView = document.getElementById("chat1")
//         chatView.style.visibility = "visible";
//     }
// render() {
function ChatBot() {

// export const ChatBot = ({ChatBot}) => {
    const [dsc, dscSet] = useState(true);

    const onSetIsVisible = (active) => {
        if (dsc) {
            dscSet(false);
        } else {
            dscSet(true);
        }
    };
// };
    return (
        <div>
            {dsc ?
                <div className="chat">
                    <div className="chat_table">
                        <button href="" className="chat_a">&#10006;</button>
                        <table>
                            <thead>
                            <tr style={{fontSize: '160%', textAlign: 'left'}}>
                                <td><h1
                                    style={{marginBottom: '0px', marginTop: '25px'}}>&nbsp;향숙이</h1>&nbsp;&nbsp;언제!
                                    어디서나!
                                    &nbsp;&nbsp;간편하게 1:1 상담
                                    <hr style={{width: '390px'}}/>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{paddingBottom: '70px'}}>
                                    <img id="img1" src="" style={{paddingLeft: '25px'}}/>
                                    <Link href="" style={{textDecoration: 'none', color: '#000'}}>
                                        <h1 style={{
                                            marginTop   : '0px',
                                            marginBottom: '0px'
                                        }}>쇼핑&nbsp;&nbsp;&nbsp;&nbs;p&nbs;p&nbs;p&nbsp;&nbsp; &#10095;</h1>
                                    </Link>
                                    <p style={{paddingRight: '130px', marginTop: '0px'}}>더보기</p>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td style={{paddingRight: '160px', backgroundColor: '#fff8dc', color: '#696969'}}>
                                    <Link href="" style={{textDecoration: 'none', color: '#000'}}>
                                        <h2 style={{marginBottom: '0px'}}>향숙이 활용백서</h2></Link>
                                    <p style={{marginTop: '0px'}}>향숙이 모르면 나만손해</p>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>


                </div>
                : null}
            <div className="chat_b">
                <button onClick={onSetIsVisible}
                        style={{textDecoration: 'none', color: '#f8f8ff'}}>&#128172;</button>
            </div>
        </div>
    )
}


export default ChatBot;