package com.mindchat.backend.domain;

import lombok.Data;

@Data
public class BasketVO {
	private int bas_seq ;
	private int p_seq ;
	private String user_id ;
	private int p_cnt;
	private String delivery_addr;

}
