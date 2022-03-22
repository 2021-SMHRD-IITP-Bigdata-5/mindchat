package com.mindchat.backend.domain;


import lombok.Data;

@Data
public class OrderVO {

    private int order_seq;
    private String order_code;
    private String user_id;
    private String order_date;
    private String order_status;
    private String order_memo;
}
