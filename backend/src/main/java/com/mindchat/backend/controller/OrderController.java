package com.mindchat.backend.controller;


import com.mindchat.backend.domain.OrderVO;
import com.mindchat.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {


    @Autowired
    OrderService orderService;

    @CrossOrigin(origins = "http://localhost:3001")
    @PostMapping("/create")
    public ResponseEntity<?> orderCreate(@RequestBody OrderVO order){
    System.out.println(order);
        orderService.orderCreate(order);

        return ResponseEntity.ok().body(order);
    }

    @CrossOrigin(origins = "http://localhost:3001")
    @GetMapping("/list")
    public List<OrderVO> orderList() {
        System.out.println("오더리스트 출력 성공");
        return orderService.orderList();
    }
}
