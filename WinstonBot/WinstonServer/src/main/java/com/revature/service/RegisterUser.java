package com.revature.service;

import com.revature.beans.User;
import com.revature.dao.UserDao;

public class RegisterUser {

	public static boolean register(String discordId, String name){
		UserDao ud = new UserDao();
		User u = new User(discordId, name);
		if(ud.selectUserByDiscordId(discordId)==null){
			if(ud.insertUser(u)==1){
				return true;
			}
		}
		return false;
	}
}
