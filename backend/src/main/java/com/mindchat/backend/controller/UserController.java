package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ResponseDTO;
import com.mindchat.backend.domain.UserInfo;
import com.mindchat.backend.security.TokenProvider;
import com.mindchat.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok().body("auth_path_success");
    }
    @Autowired
    private TokenProvider tokenProvider;
    private UserService userService;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //회원등록
    @PostMapping("/singup")
    public ResponseEntity<?> createUser(@RequestBody UserInfo userInfo){

        String encoded_pw=passwordEncoder.encode(userInfo.getUser_pw());
        userInfo.setUser_pw(encoded_pw);
        userService.createUser(userInfo);

        return ResponseEntity.ok().body(userInfo);
    }
    //로그인 토큰 응답 확인 완료
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody UserInfo userInfo){
//        System.out.println(userInfo.getUser_email());
        UserInfo user = userService.findByEmail(userInfo.getUser_email(),
                                                userInfo.getUser_pw());
        //findByEmail 암화화x
        //getByCredentials 암호화o

        if(user !=null ){
            final String token = tokenProvider.createToken(user);
            final UserInfo responseDTO = UserInfo.builder()
                    .user_email(user.getUser_email())
                    .token(token)
                    .build();
            return ResponseEntity
                    .ok()
                    .body(responseDTO);
        } else {
            ResponseDTO responseDTO = ResponseDTO.builder()
                    .error("Login failed")
                    .build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }
    }

}
