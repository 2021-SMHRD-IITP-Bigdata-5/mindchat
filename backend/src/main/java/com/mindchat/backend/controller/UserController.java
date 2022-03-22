package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ResponseDTO;
import com.mindchat.backend.domain.UserInfo;
import com.mindchat.backend.security.TokenProvider;
import com.mindchat.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/auth")
public class UserController   {

    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok().body("auth_path_success");
    }
    @Autowired
    private TokenProvider tokenProvider;
    private UserService userService;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //회원등록
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody UserInfo userInfo){

        String encoded_pw=passwordEncoder.encode(userInfo.getUser_pw());
        userInfo.setUser_pw(encoded_pw);
        userService.createUser(userInfo);

        return ResponseEntity.ok().body(userInfo);
    }
    //로그인 토큰 응답 확인 완료

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@Valid @RequestBody UserInfo userInfo,
                                          BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            //상세에러메세지를 쓰려면 bindingResult.getAllErrors()
            return ResponseEntity.badRequest().body("message: invalid email input"); //--잘못된 이메일 형식

        }else {
            UserInfo user = userService.findByEmail(userInfo.getUser_email(),
                    userInfo.getUser_pw());
//            final PasswordEncoder passwordEncoder);
            //findByEmail 암화화x
            //getByCredentials 암호화o
            if (user != null) {
                final String token = tokenProvider.createToken(user);
                final UserInfo responseDTO = UserInfo.builder()
                        .user_email(user.getUser_email())
                        .token(token)
                        .build();
                return ResponseEntity.ok().body(responseDTO);  //---로그인 성공시 이메일 반환
            } else {
                ResponseDTO responseDTO = ResponseDTO.builder()
                        .error("Login failed - not registered email")
                        .build();
                return ResponseEntity.badRequest().body(responseDTO);  //---등록되지 않은 이메일
            }
        }
    }

}
