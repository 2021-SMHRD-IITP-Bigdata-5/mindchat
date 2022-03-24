import React, {Component} from 'react';
import '../Style/event.css'
import {Link} from "react-router-dom";
import ChatBot from "./ChatBot";

class Event extends Component {

    render() {
        return (
            <>
                <div className="title" style={{marginTop: '30px'}}>
                    <h1>Event</h1>
                    <Link to="/Main"><h3>MIND CHAT</h3></Link>
                </div>
                <br/><br/>
                <hr/>
                <br/><br/>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="image">
                                <a href="#" style={{paddingLeft: '220px'}}>
                                    <img
                                        src="//www.afterblow-scent.com/file_data/afterblow/gallery/2022/01/06/10ff20abe099f6ea12a3974cc086d325.jpg"/></a>
                                <a href="#" style={{paddingLeft: '80px'}}>
                                    <img
                                        src="//www.afterblow-scent.com/file_data/afterblow/gallery/2021/12/21/543f9d809cdab5e3d88cee113d2d6db3.jpg"/></a>
                                <a href="#" style={{paddingLeft: '80px'}}>
                                    <img
                                        src="//www.afterblow-scent.com/file_data/afterblow/gallery/2021/12/22/de54d8481a74d8d3b561bb3c3fcc1d23.jpg"/></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    <a style={{paddingRight: '30px', paddingLeft: '260px'}}><strong>MIND CHAT Launching Event (3/28 -
                        4/30)</strong></a>
                    <a style={{paddingRight: '260px', paddingLeft: '190px'}}><strong>MIND CHAT New Member Event</strong></a>
                    <a><strong>MIND CHAT Membership Benefits</strong></a>
                    <br/>
                    <a style={{paddingLeft: '380px'}}>Web Application</a>
                    <a style={{paddingLeft: '450px'}}>Branding</a>
                    <a style={{paddingLeft: '480px'}}>Website</a>
                </div>
                <ChatBot/>
            </>
        );
    }
}

export default Event;