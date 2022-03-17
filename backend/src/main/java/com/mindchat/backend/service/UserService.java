package com.mindchat.backend.service;

import com.mindchat.backend.domain.UserInfo;
import com.mindchat.backend.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;



@Slf4j
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    //회원등록
    public UserInfo createUser(UserInfo userInfo) {

        String user_email = userInfo.getUser_email();

        if(userMapper.selectUser(user_email)!=null){
            log.warn("already exist email");
        }else{
            userMapper.createUser(userInfo);
        }
        return null;
    };
    public UserInfo findByEmail(String email,
                                String password){
        //테스트, 비밀번호대조없음
        return userMapper.selectUser(email);
    }

    //복호화
    public UserInfo getByCredentials(String email,
                                String password,
                                final PasswordEncoder passwordEncoder){
        final UserInfo userInfo = userMapper.selectUser(email);

        if(userInfo != null &&
        passwordEncoder.matches(password, userInfo.getUser_pw()) ){
            return userInfo;
        };
        return null;
    }

}
