package com.revature.service;

import java.util.List;

import com.revature.beans.DirectBet;
import com.revature.beans.User;
import com.revature.dao.DirectBetDao;
import com.revature.dao.UserDao;

public class DirectBetService {
	public static boolean placeBet(String name1, String name2, Integer amount, String details){
		UserDao ud = new UserDao();
		User u1 = null;
		User u2 = null;
		u1 = ud.selectUserByName(name1);
		u2 = ud.selectUserByName(name2);
		
		if((u1 = ud.selectUserByName(name1))==null){
			return false;
		}
		if((u2 = ud.selectUserByName(name2))==null){
			return false;
		}		
		DirectBet db = new DirectBet(u1.getFname(), u2.getFname(), amount, 1, details);
		
		ud.placeDirectBet(db);
		return true;
	}
	public static List<DirectBet> grabBets(){
		DirectBetDao dbd = new DirectBetDao();
		return  dbd.selectAllBets();
	}
}
