package com.ssafy.eureka.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.eureka.dto.Order;
import com.ssafy.eureka.dto.OrderDetail;
import com.ssafy.eureka.dto.Product;

@Mapper
public interface OrderDao {

	List<Order> showOrderList(String member_userid);

	int addOrder(Order order);

	int addOrderdetail(OrderDetail orderdetail);

	int deleteOrder(String order_id);

	List<Map<String,Object>> getCart(String member_userid);

	int checkDup(Map<String, String> map);

	int addCart(Map<String, String> map);

	int modifyCart(Map<String, String> map);

	int deleteCart(String member_userid, String product_id);

	List<Product> getWish(String member_userid);

	int checkWishDup(Map<String, String> map);
	
	int addWish(Map<String, String> map);

	int deleteWish(String product_id, String member_userid);

	List<OrderDetail> showOrderDetailList(String order_id);

	Integer getLastOrderid();


}
