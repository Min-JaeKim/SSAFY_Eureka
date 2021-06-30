package com.ssafy.eureka.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.eureka.dto.Member;
import com.ssafy.eureka.dto.Product;
import com.ssafy.eureka.service.AdminService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value = "/admin")
public class AdminController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	// logger.debug("join - 호출");

	@Autowired
	AdminService service;

	@GetMapping("/product")
	@ApiOperation(value = "상품 현황", notes = "db에 저장된 전체 상품 리스트를 반환한다", response = List.class)
	private ResponseEntity<List<Product>> getProductList() {

		List<Product> list = service.getProductList();
		list = null;
		
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}

	@PostMapping("/product")
	@ApiOperation(value = "상품 등록", notes = "상품 dto를 받아 db에 등록한다.")
	private ResponseEntity<String> addProduct(@RequestBody Product product) {

		if (service.addProduct(product) == 1) {
			return new ResponseEntity<String>(HttpStatus.OK);
		} else {
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		}

	}

	@GetMapping("/member")
	@ApiOperation(value = "회원 현황", notes = "db에 저장된 전체 회원 리스트를 반환한다", response = List.class)
	private ResponseEntity<List<Member>> getMemberList() {

		List<Member> list = service.getMemberList();
		return new ResponseEntity<List<Member>>(list, HttpStatus.OK);
	}
}