import React from 'react';
import "../Style/intro.css";
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

                <video id="video" muted autoPlay='true' loop>
                </video>
            </div>
        </body>
    )

}

export default Intro;
