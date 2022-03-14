import React from 'react';
import "../Style/intro.css";
import video2 from "C:/Users/smhrd/Videos/shoptest/src/video/intro.mp4";
import { Link } from "react-router-dom";


function Intro() {
    return (
        <body>
            <div id="main">
                <div id="contents">

                    <div className="welcomeMsg">
                        <h1>Find your Signature!</h1>
                        <p>Expectations are predetermined resentments :)</p>
                    </div>

                    <Link to="/main">
                        Shop now
                    </Link>

                </div>
            </div>

            <div className="bg">

                <video id="video" muted autoplay='true' loop>
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
        </body>
    )

}

export default Intro;
