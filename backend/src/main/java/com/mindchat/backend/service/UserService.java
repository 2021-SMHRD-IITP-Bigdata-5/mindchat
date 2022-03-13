package com.mindchat.backend.service;

import com.mindchat.backend.domain.UserInfo;
import com.mindchat.backend.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Slf4j
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    //회원등록
    public UserInfo createUser(UserInfo userInfo) {


        if(userMapper.selectUser(userInfo.getUser_email())!=null){
            log.warn("already exist email");
        }else{

            userMapper.createUser(userInfo);

        }
        return null;
    };

    //인증용
    public UserInfo findByEmail(String email, String password){

        return null;
    }

}
