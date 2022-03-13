package com.mindchat.backend.mapper;


import com.mindchat.backend.domain.ProductInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<ProductInfo> selectAll();

}
