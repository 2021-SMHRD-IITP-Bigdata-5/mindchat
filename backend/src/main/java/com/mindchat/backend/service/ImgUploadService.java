package com.mindchat.backend.service;


import com.mindchat.backend.domain.ProductImgUploadVO;
import com.mindchat.backend.mapper.ImgUploadMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImgUploadService {
	@Autowired
	private ImgUploadMapper imgUploadMapper;

	public void insertImg(ProductImgUploadVO productImgUploadVO){

		System.out.println("서비스"+productImgUploadVO);
		imgUploadMapper.insertImg(productImgUploadVO);


	}

}
