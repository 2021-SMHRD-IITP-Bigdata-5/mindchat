package com.mindchat.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfo {
    private String token;
    private String user_id;
    private String user_pw;
    private String user_name;
    private String user_birthdate;
    private String user_gender;
    private String user_phone;
    private String user_email;
    private String user_addr1;
    private String user_addr2;
    private String user_category;
    private String user_joindate;
}
