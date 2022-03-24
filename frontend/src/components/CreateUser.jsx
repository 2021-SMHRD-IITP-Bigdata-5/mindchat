import React from "react";
import {
    Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography
} from "@material-ui/core";


import {createUser} from "../Service/Apiservice";
import "../Style/creatuser.css";

const {REACT_APP_BACKEND_LOCAL_PORT} = process.env;


class Createuser extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup         : {
                male  : false,
                female: true

            },
            user_email         : '',
            user_email_validate: false,
            // user_pw_validate   : false,
        }

        this.checkEMAIL = this.checkEMAIL.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })  // TextField 태그, 입력시 이름에 맞는 state 값이 초기화 된다!
    }

    checkEMAIL(e) {
        e.preventDefault();
        const userInfo = {
            user_email: this.state.user_email.trim()
        }
        fetch(`${REACT_APP_BACKEND_LOCAL_PORT}/auth/checkemail`, {
            method : "post",
            headers: {"Content-Type": "application/json"},
            body   : JSON.stringify(userInfo),
        }).then(res => {
            if (res.status === 400) {
                console.log("올바르지 않은 이메일 형식");
            }
            if (res.status === 201) {
                console.log("이메일중복");
            }
            if (res.status === 202) {
                console.log("이메일 사용가능");
                this.setState({
                    user_email_validate: true
                })
            }
        });
    }

    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked

        this.setState({radioGroup: obj})
    }

    handleSubmit(event) {

        createUser(this.state)
            .then(
                (response) => {
                    // 계정 생성 성공 시 login 페이지로 리디렉트
                    window.location.href = "/login";
                }
            );
    }


    // form : 인풋 필드가 들어가고 사용자는 각 인풋 필드에 해당값을 입력
    // 버튼 : submitHandle 함수가 싱행되고 데이터를 가져와 요청 바디를 작성한후
    // ApiService의 createUser 함수를 이용해 계정 생성 요청을 한다.

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{
                width         : "100%",
                marginTop     : "125px",
                height        : "100%",
                display       : "flex",
                justifyContent: "center",
                alignItems    : "center"
            }}>

                <Grid container spacing={1}
                      style={{
                          border         : "1px solid",
                          color          : "white",
                          borderRadius   : "40px",
                          width          : "40vw",
                          height         : "70vh",
                          display        : "flex",
                          textAlign      : "center",
                          justifyContent : "center",
                          backgroundColor: "#D3D3D3",
                      }}>
                    <form noValidate>
                        <Grid item xs={10}>
                            <Typography component="h1" variant="h4">
                                Membership registration
                            </Typography>
                        </Grid>
                        <Grid item xs={8} style={{width: "75%"}}>
                            <div className="fake_input_area">
                                <input className="hide_input_area"
                                       required
                                       id="user_email"
                                       label="email address"
                                       name="user_email"
                                       autoComplete="email"
                                       onChange={this.onChange}
                                       placeholder="user_email"
                                />
                                <button onClick={this.checkEMAIL} className="myButton">
                                    double check
                                </button>
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="user_pw"
                                label="user_pw"
                                type="password"
                                id="user_pw"
                                onChange={this.onChange}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                autoComplete="username"
                                name="user_name"
                                variant="outlined"
                                required
                                fullWidth
                                id="user_name"
                                label="user_name"
                                onChange={this.onChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid className="radio" item xs={8}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="user_address"
                                label="user_address"
                                id="user_address"
                                onChange={this.onChange}
                                autoComplete="user_address"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <input
                                type="date"
                                required
                                name="user_birthdate"
                                id="user_birthdate"
                                onChange={this.onChange}
                                autoComplete="user_birthdate"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="user_category"
                                label="user_category"
                                id="user_category"
                                onChange={this.onChange}
                                autoComplete="user_category"
                            />

                        </Grid>
                        <Grid item xs={8}>

                            <input type="radio"
                                   name="radioGroup"
                                   value='male'
                                   checked={this.state.radioGroup['male']}
                                   onChange={this.handleRadio}/> male
                            <input type="radio"
                                   name="radioGroup"
                                   value='female'
                                   checked={this.state.radioGroup['female']}
                                   onChange={this.handleRadio}/> female

                        </Grid>

                        <Grid item xs={8}>
                            <Button
                                disabled={this.state.user_email_validate === false}
                                fullWidth
                                variant="contained"
                                onClick={this.handleSubmit}
                            >
                                Membership registration
                            </Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Please log in
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Createuser;