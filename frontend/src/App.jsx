import Home from "./pages/Home";
import RouterComponent from "./route/RouterComponent";
import React from "react";
import store from "./store";
import {Provider} from "react-redux";

class App extends React.Component {
    render() {
        return (


            <Provider store = {store}>
            <RouterComponent>
                <Home/>
            </RouterComponent>
            </Provider>
        );

    }

};

export default App;