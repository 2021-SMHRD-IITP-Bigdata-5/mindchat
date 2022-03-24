package com.mindchat.backend.mapper;


import com.mindchat.backend.domain.ProductImgUploadVO;
import com.mindchat.backend.domain.ProductInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FileBoardMapper {

	List<ProductInfo> getFileBoardList(); //게시글 리스트 출력

	ProductInfo fileBoardDetail(int p_seq); //게시글 세부내용 보기

	int fileBoardInsert(ProductInfo fileBoard); //게시글 생성

	ProductImgUploadVO fileDetail(int p_seq);

	int fileBoardUpdate(ProductInfo fileBoard); //게시글 수정

	int fileBoardDelete(int p_seq); //게시글 삭제

	int fileInsert(ProductImgUploadVO file); // 파일 업로드 메서드

	int fileDelete(int p_seq);
}
