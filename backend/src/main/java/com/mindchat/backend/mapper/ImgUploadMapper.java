package com.mindchat.backend.mapper;

import com.mindchat.backend.domain.ProductImgUploadVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ImgUploadMapper {
	void insertImg(ProductImgUploadVO productImgUploadVO);
}
