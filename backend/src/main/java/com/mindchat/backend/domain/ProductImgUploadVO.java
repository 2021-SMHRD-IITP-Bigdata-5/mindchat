package com.mindchat.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductImgUploadVO {

	private int img_seq; // 이미지 번호
	private int p_seq; // 상품번호 와 동기화
	private String img_filename1; // 저장할 때 파일이름
	private String img_file1; // 받아올 때 파일 이름
	private String img_file2; // 저장 및 불러올 경로
}


