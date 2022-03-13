package com.mindchat.backend.mapper;

import com.mindchat.backend.domain.UserInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserInfo> selectAll();
    UserInfo selectUser(String user_email);
    void createUser(UserInfo userInfo);


}
