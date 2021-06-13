package com.ssafy.eureka.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.eureka.dto.Member;

@Mapper
public interface MemberDao {

	public Member login(Map<String,String> map);
	public String findPwd(String member_email);
	public int joinMember(Member member);
	public int deleteMember(String member_userid);
	public int modifyMember(Member member);
	
}