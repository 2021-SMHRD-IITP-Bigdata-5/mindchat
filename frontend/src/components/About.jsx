import React, {Component} from 'react';
import '../Style/about.css'
import {Link} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ChatBot from "./ChatBot";

class About extends Component {


    render() {
        return (
            <body>
            <Sidebar width={320}></Sidebar>
            <div className="title" style={{marginTop: '30px'}}>
                <h1>About</h1>
                <Link to="/Main"><h3>MIND CHAT</h3></Link>
            </div>
            <hr/>

            <div id="wrap">
                <div id="container">
                    <div id="contents" className="inner">
                        <div className="sub1">
                            <div className="para fadeInUp">
                                <h5 className="eng" style={{letterSpacing: '0.1em'}}>ABOUT MindChat</h5>
                                <h2 className="eng add_bar">The soul of what exists is scent.</h2> <br/><br/>
                                <p>
                                    'My perfume becomes a part of me, and no one can imitate it.’<br/><br/>
                                    In modern society, nostalgia means my identity.<br/>
                                    Finding a perfume that suits you is also the process of finding your identity.
                                </p>
                            </div>

                            <img src="../images/about1.jpg" className="fadeInUp"/>

                            <div className="para fadeInUp">
                                <br/>
                                <br/>
                                <p>
                                    Finding your perfume among tens of thousands of perfumes around the world is like
                                    fate.<br/>
                                    So today, we'll be the medium that connects scent and people<br/>
                                    We will never stop exploring new perfumes. <br/><br/>
                                    Finding the best perfume to be part of you is why MindChat exists.
                                </p>
                            </div>

                            <img src="../images/about2.jpg" className="fadeInUp"/>

                            <div className="para fadeInUp">
                                <h4 className="eng"></h4>
                                <br/><br/>
                                <p>
                                    Fragrance frees you from time and place and makes you reflect on your memories<br/>
                                    It allows us to listen to numerous stories and stories. <br/>
                                    My inner self is in the perfume.<br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatBot/>

            </body>
        );
    }
}

export default About;