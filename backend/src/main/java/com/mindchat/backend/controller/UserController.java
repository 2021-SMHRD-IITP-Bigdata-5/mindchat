package com.mindchat.backend.controller;

import com.mindchat.backend.domain.UserInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok().body("auth_path_success");
    }

    //회원등록
    @PostMapping("/singup")
    public ResponseEntity<?> createUser(){
        return null;
    }


    //로그인 http 바디 받아서 처리
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody UserInfo userInfo){
        return null;
    }

}
