import React from 'react';
import {Container, Grid, TextField, Typography} from "@material-ui/core";
import {Button} from "antd";
import {login} from "../Service/Apiservice";
import styled from "styled-components";
import "../Style/login.css";


// 로그인에서 렌더링할 컴포넌트!

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

        login(this.state)
            .then(r => {});

    }

    render() {
        return (
            <Container  className="body" component="main" maxWidth="xs"
                         style={{ width: "100%",
                             marginTop: "210px",
                             height: "100%",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                         }}>
                <Grid container spacing={2}
                      style={{
                          border: "1px solid",
                          color: "white",
                          borderRadius: "40px",
                          width: "50vw",
                          height: "40vh",
                          display: "flex",
                          backgroundColor: "#D3D3D3",
                          textAlign: "center",
                          marginTop: "105px"
                      }}>
                    <Grid item xs={12} style={{ height: "82px"}}>
                        <Typography component="h1" variant="h4" style={{marginTop: "50px"}}>
                            LOGIN
                        </Typography>
                    </Grid>
                    <form noValidate onSubmit={this.handleSubmit}>
                        {" "}
                        {/* Submit 버튼을 클릭하면 handleSubmit이 실행됨*/}
                        <Grid className="body" container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="user_email"
                                    label="이메일 주소"
                                    name="user_email"
                                    onChange={this.onChange}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    name="user_pw"
                                    label="패스워드"
                                    type="user_pw"
                                    id="user_pw"
                                    onChange={this.onChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12} className="contents">
                                <Button
                                    className="button"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

            </Container>
        );
    }
}


export default Login;