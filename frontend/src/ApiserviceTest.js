import axios from 'axios';
const REACT_APP_BACKEND_LOCAL_PORT = process.env.REACT_APP_BACKEND_LOCAL_PORT;

//로그인api테스트
export function call(api, method, request){

        //헤더에 콘텐츠 타입
        let headers = new Headers({"Content-Type":"application/json",})
        //헤더에 토큰
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken && accessToken !== null){
            headers .append("Authorization", "Bearer"+accessToken);
        }
        //데이터 묶음
        let options = {
            headers: Headers,
            url: REACT_APP_BACKEND_LOCAL_PORT + api,
            method: method,
        };
        //--------------------------------------------------------

        //리퀘스트를 바디에 넣어 준비
        if( request ){
            options.body = JSON.stringify( request );
        }
        //통신
        return fetch( options.url, options)
            .then((response)=> response.json()
                    //응답을 제이슨으로 반환
                    .then((json)=> {
                    if(!response.ok){
                        return Promise.reject(json);
                    }//  응답이 없으면 프로미스 반환 Promise.reject(거절 원인 메세지)

                    return json;  ///
                    })

            ).catch((error)=>{
                console.log(error.status);

                if(error.status === 403){
                    window.location.href="/login";
                }
                return Promise.reject(error);  //
            });
}


//----------------------------------------------------로그인 후 로컬스토리지 토큰저장
export function signin(userInfo){
        return call("/auth/signin","POST", userInfo)
            .then((response)=>{
                // console.log("response:", response);
                // alert("Token:"+response.token);
                if(response.token){
                    localStorage.setItem("ACCESS_TOKEN", response.token);
                    window.location.href="/";
                }
        });
}


