package com.revature.beans;

public class User {
	private Integer id;
	private String discordId;
	private String fname;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDiscordId() {
		return discordId;
	}
	public void setDiscordId(String discordId) {
		this.discordId = discordId;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public User(Integer id, String discordId, String fname) {
		super();
		this.id = id;
		this.discordId = discordId;
		this.fname = fname;
	}
	public User(String discordId, String fname) {
		super();
		this.discordId = discordId;
		this.fname = fname;
	}	
	public User() {
		
	}

	
}
