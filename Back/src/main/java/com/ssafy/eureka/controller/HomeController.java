package com.ssafy.eureka.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.eureka.dto.Product;
import com.ssafy.eureka.service.HomeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/home")
@Api(value = "eureka")
public class HomeController {

	@Autowired
	HomeService service;

	@ApiOperation(value = "추천 상품 리스트 (10개)", notes = "전체상품중 판매량이 높은 상품을 10개 반환", response = List.class)
	@GetMapping("/recommend")
	public ResponseEntity<List<Product>> topN() {
		try {
			List<Product> list = service.getRandomTopProductsByCategory();
			return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@ApiOperation(value = "카테고리목록 반환", notes = "1,2,3depth별 카테고리 반환")
	@GetMapping("/category/list")
	public ResponseEntity<Map<String, Object>> getCategories () {
		Map<String, Object> map = service.getCategories();
		System.out.println(map);
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
}
