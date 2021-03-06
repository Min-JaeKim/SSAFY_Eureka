package com.ssafy.eureka.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.eureka.dao.ProductDao;
import com.ssafy.eureka.dto.Product;
import com.ssafy.eureka.dto.Productqna;
import com.ssafy.eureka.dto.Review;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao dao;
	
	@Override
	public Map<String, Object> showSearchResult(String keyword, int page) {
		int start = (page-1) * 30;
		int all = dao.getProductSearchCount(keyword);
		List<Product> products = dao.showSearchResult(keyword, start);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("count", all);
		map.put("products", products);
		return map;
	}

	@Override
	public Map<String, Object> showItemListByCategory(String category, int page) {
		int start = (page-1) * 30;
		int count = dao.getCountByCategory(category);
		List<Product> products = dao.showItemListByCategory(category, start);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("count", count);
		map.put("products", products);
		return map;
	}

	@Override
	public Map<String, Object> showDetail(String product_id) {

		Product p = dao.getProduct(product_id);
		List<Productqna> pq = dao.getProductqna(product_id);
		List<Review> r = dao.getReview(product_id);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("product", p);
		map.put("productqna", pq);
		map.put("review", r);
		
		return map;
	}

	@Override
	public int registProduct(Product product) {

		return dao.registProduct(product);
	}

	@Override
	public int modifyProduct(Product product) {

		return dao.modifyProduct(product);
	}

	@Override
	public int deleteProduct(String product_id) {

		return dao.deleteProduct(product_id);
	}

	@Override
	public List<Product> categoryTopList(String category) {
		
		return dao.getCategoryTopList(category);
	}

}
