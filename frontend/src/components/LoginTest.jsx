import React from "react";
import { signin } from "../ApiserviceTest";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";


//로그인 테스트 페이지
class LoginTest extends React.Component {

    //클래스 생성자
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //event 데이터 바인딩
        //submitHandler객체와 구분한 handleSubmit
    }

    //클래스 스테이트
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({ user_email:email, user_pw: password })
    }
    //noValidate 데이터유효성 검사여부 디폴트 false
    render(){
        return (
            <div>
                <form noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        variant={"outlined"}
                        required
                        fullwidth
                        id={"email"}
                        label={"이메일"}
                        name={"email"}
                        autoComplete={"email"}
                    />
                    <TextField
                        variant={"outlined"}
                        required
                        fullwidth
                        id={"password"}
                        label={"패스워드"}
                        name={"password"}
                        autoComplete={"current-password"}
                    />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                    >로그인
                    </Button>
                </form>
            </div>
        )
    }
}
export default LoginTest;
