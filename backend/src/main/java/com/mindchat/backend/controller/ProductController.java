package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ResponseDTO;
import com.mindchat.backend.mapper.ProductMapper;
import com.mindchat.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@Controller
@RestController
@RequestMapping("/product")
public class ProductController {

    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok().body("product_path_success");
    }



    @Autowired
    ProductService productService;

    ProductMapper mapper;
    ProductController(ProductMapper mapper){
        this.mapper=mapper;
    }

    //Entity {"error":null,"data":["test"]}
    //new 대신 builder
    @CrossOrigin(origins = "http://localhost:3001")
    @GetMapping("/test2")
    public ResponseEntity<?> testController(){
//        List<String> list = new ArrayList<>();
//        list.add("testword1");
//        list.add("testword2");
//        ResponseDTO<String> res = ResponseDTO.<String>builder().data(list).build();
//        return ResponseEntity.ok().body(res);
        return ResponseEntity.ok().body(productService.testService());
    }





}
