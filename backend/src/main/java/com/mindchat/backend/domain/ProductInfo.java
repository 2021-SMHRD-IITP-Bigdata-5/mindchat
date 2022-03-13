package com.mindchat.backend.domain;

import lombok.Data;

@Data
public class ProductInfo {
    private int p_seq;
    private String p_id;
    private String p_name;
    private String p_cat;
    private int p_stock_cnt;
    private String p_desc;
    private String p_date;
    private int reco_cnt;
    private int p_price;
    private String p_discount_ratio;
    private String admin_id;

    // tbl_image 수정필요
    private String img_title;
}
