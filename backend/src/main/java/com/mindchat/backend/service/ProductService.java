package com.mindchat.backend.service;

import com.mindchat.backend.domain.ProductInfo;
import com.mindchat.backend.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
	@Autowired
	ProductMapper productMapper;

//	public List<ProductInfo> testService() {
//		List<ProductInfo> products = productMapper.selectAll();
//		Optional<List<ProductInfo>> optionalProducts = Optional.ofNullable(products);
//		return optionalProducts.isPresent() ? products : null;
//
//	}

	//    0315 유진 추가 시작 + 위 코드 주석처리
	public List<ProductInfo> productsList() {
		List<ProductInfo> products = productMapper.selectAll();
        Optional<List<ProductInfo>> optionalProducts = Optional.ofNullable(products);
        return optionalProducts.isPresent() ? products : null;
	}
	//    0315 추가 끝
}
