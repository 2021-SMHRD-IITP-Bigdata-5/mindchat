
// 라우팅 규칙 작성하기!
// 프로트엔드 서버가 리액트 애플리케이션 리턴!
// 리소스(html, css, javaScript 파일 등)을 가지고 있다!
// 라우터의 로직은 URL을 파싱 한 후 login 템플릿을 렌더링한다.

import React from 'react';
import "../index.css";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../components/Login";
import Typography from "@material-ui/core/Typography";
import App from "../App";
import Createuser from "../components/CreateUser";


function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            MindChat, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/Login">
                                <Login />
                            </Route>
                            <Route path="/CreateUser">
                                <Createuser />
                            </Route>
                            <Route path="/">
                                <App />
                            </Route>
                        </Switch>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </div>
        );
    }
}

export default AppRouter;

// 경로에 따라 실행되는 컴포넌트가 다르므로 그 정보를 갖고있는 AppRouter를 가장 먼저 렌더링 해야 한다.