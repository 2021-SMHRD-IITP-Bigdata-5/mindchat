import {API_BASE_URL} from "../Config/appconfig"
const  ACCESS_TOKEN = "ACCESS_TOKEN";


export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    // 로컬 스토로지에서 ACCESS_TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken){
        headers.append("Authorization", "Bearer" + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        //GET method
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    // .then((response) =>
    //     response.json().then((json) => {
    //
    //         if (!request.ok) {
    //             // response.ok가 true이면 정상적인 응답을 받을 것이고 아니면 에러 응답을 받을 것임
    //             return Promise.reject(json);
    //         }
    //         return json;
    //     })
    // )

    // .catch((error) => {
    //     //추가된 부분 catch 메서드 안에서 상태코드를 분석해 403인경우 login 페이지로 리디렉트 하기!
    //     console.log(error.status);
    //
    //     if (error.status === 403) {
    //         window.location.href = "/login"; // redirect
    //     }
    //     return Promise.reject(error);
    // });
}


//-------------------------------로그인을 위한 API 서비스 메서드 !----------------------------------//

export function login(userInfo){
    return call("/auth/login","post",userInfo)
        .then((response) => {
            if (response.token){
                // 로컬 스토리지에 토큰 저장
                localStorage.setItem("ACCESS_TOKEN", response.token);
                // token이 존재하는 경우 main화면 리디렉트
                window.location.href = "/";
            }
        });
}

//---------------------------로그아웃 서비스--------------------------------------------//
export function logout(){
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}


//---------------------------회원등록 로직----------------------------------------//
export function createUser(userInfo){
    return call("/auth/signup", "post", userInfo);
}
