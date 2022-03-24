package com.mindchat.backend.service;

import com.mindchat.backend.domain.ProductImgUploadVO;
import com.mindchat.backend.domain.ProductInfo;
import com.mindchat.backend.mapper.FileBoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileBoardService {

	@Autowired
	FileBoardMapper fileBoardMapper;

	public List<ProductInfo> getFileBoardList() {
		return fileBoardMapper.getFileBoardList();
	}
	public ProductInfo fileBoardDetail(int p_seq) {
		return fileBoardMapper.fileBoardDetail(p_seq);
	}
	public int fileBoardInsert(ProductInfo fileBoard) {
		return fileBoardMapper.fileBoardInsert(fileBoard);
	}
	public ProductImgUploadVO fileDetail(int p_seq) {
		return fileBoardMapper.fileDetail(p_seq);
	}
	public int fileBoardUpdate(ProductInfo fileBoard) {
		return fileBoardMapper.fileBoardUpdate(fileBoard);
	}
	public int fileBoardDelete(int p_seq) {
		return fileBoardMapper.fileBoardDelete(p_seq);
	}
	public int fileInsert(ProductImgUploadVO file) {
		return fileBoardMapper.fileInsert(file);
	}
	public  int fileDelete(int p_seq){
		return fileBoardMapper.fileDelete(p_seq);
	}
}
