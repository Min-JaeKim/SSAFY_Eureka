package com.ssafy.eureka.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssafy.eureka.dto.Order;
import com.ssafy.eureka.dto.OrderDetail;
import com.ssafy.eureka.dto.Product;


public interface OrderService {

	List<Order> showOrderList(String member_userid);

	int addOrder(Map<String, Object> map);

	int deleteOrder(String product_id);

	List<Product> getCart(String member_userid);
	
	int checkDup(Map<String, String> map);

	int addCart(Map<String, String> map);

	int deleteCart(String member_userid, String product_id);

	int addWish(Map<String, String> map);

	int deleteWish(String product_id, String member_userid);

	List<OrderDetail> showOrderDetailList(String order_id);

	List<Map<String, Object>> showAllOrderList(String member_userid);


}
