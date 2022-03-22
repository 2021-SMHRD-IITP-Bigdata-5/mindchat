package com.mindchat.backend.service;

import com.mindchat.backend.domain.OrderVO;
import com.mindchat.backend.domain.ProductInfo;
import com.mindchat.backend.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderMapper orderMapper;

    public List<OrderVO> orderList() {
        List<OrderVO> Orders = orderMapper.orderList();
        Optional<List<OrderVO>> optionalOrder = Optional.ofNullable(Orders);
        return optionalOrder.isPresent() ? Orders : null;
    };

    public void orderCreate(OrderVO order) {
        orderMapper.orderCreate(order);
    };
}
