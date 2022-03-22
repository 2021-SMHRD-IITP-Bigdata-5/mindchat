package com.mindchat.backend.mapper;

import com.mindchat.backend.domain.OrderVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

    List<OrderVO> orderList();
    void orderCreate(OrderVO order);


}
