package com.revature.beans;

public class DirectBet {
	private Integer id;
	private String user1;
	private String user2;
	private Integer betAmount;
	private Integer betStatus;
	private String details;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBetAmount() {
		return betAmount;
	}
	public void setBetAmount(Integer betAmount) {
		this.betAmount = betAmount;
	}
	public Integer getBetStatus() {
		return betStatus;
	}
	public void setBetStatus(Integer betStatus) {
		this.betStatus = betStatus;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}

	
	public String getUser1() {
		return user1;
	}
	public void setUser1(String user1) {
		this.user1 = user1;
	}
	public String getUser2() {
		return user2;
	}
	public void setUser2(String user2) {
		this.user2 = user2;
	}
	public DirectBet() {

	}
	public DirectBet(Integer id, String user1, String user2, Integer betAmount, Integer betStatus, String details) {
		super();
		this.id = id;
		this.user1 = user1;
		this.user2 = user2;
		this.betAmount = betAmount;
		this.betStatus = betStatus;
		this.details = details;
	}
	public DirectBet(String user1, String user2, Integer betAmount, Integer betStatus, String details) {
		super();
		this.user1 = user1;
		this.user2 = user2;
		this.betAmount = betAmount;
		this.betStatus = betStatus;
		this.details = details;
	}
	
	
	
	
}
