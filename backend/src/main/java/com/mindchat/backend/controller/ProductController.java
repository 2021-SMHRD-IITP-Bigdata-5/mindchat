package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ProductInfo;
import com.mindchat.backend.domain.ResponseDTO;
import com.mindchat.backend.mapper.ProductMapper;
import com.mindchat.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping(value = "/product")
// 루트페이지 외에는 권한 오류남 !!! 수정 필요

public class ProductController     {

	@Autowired
	ProductService productService;
	ProductMapper mapper;

	ProductController(ProductMapper mapper) {
		this.mapper = mapper;
	}

	@GetMapping("/test")
	public ResponseEntity<?> test() {
		return ResponseEntity.ok().body("product_path_success");
	}

	//Entity {"error":null,"data":["test"]}
	//new 대신 builder
	@CrossOrigin(origins = "http://localhost:3001")
	@GetMapping("/test2")
	public ResponseEntity<?> testController() {
		List<String> list = new ArrayList<>();
		list.add("testword1");
		list.add("testword2");
		ResponseDTO<String> res = ResponseDTO.<String>builder().data(list).build();
		return ResponseEntity.ok().body(res);
//        return ResponseEntity.ok().body(productService.testService());
	}

	// 0315 추가 유진
	@CrossOrigin(origins = "http://localhost:3001")
	@GetMapping("/list")
	public List<ProductInfo> productsList() {
		System.out.println("프로덕트리스트 출력 성공");
		return productService.productsList();

	}
	// 0315 추가 끝


}
