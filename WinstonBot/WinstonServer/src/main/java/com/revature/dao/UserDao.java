package com.revature.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.revature.beans.DirectBet;
import com.revature.beans.User;
import com.revature.util.ConnectionUtil;
import static com.revature.util.CloseStreams.close;

public class UserDao {
	public User selectUserById(Integer id) {
		PreparedStatement ps = null;
		ResultSet rs = null;
		User u = null;

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "SELECT * FROM winston_user WHERE user_id = ?";
			ps = conn.prepareStatement(sql);
			// Setting your variables takes two arguments:
			// The first refers to which question mark we are replacing
			// From left to right, each question mark is assigned a value from 1
			// and
			// above, sequentially.
			ps.setInt(1, id);
			rs = ps.executeQuery();

			while (rs.next()) {
				u = new User(rs.getInt(1), 
						rs.getString(2),
						rs.getString(3)
				);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
			close(rs);
		}

		return u;
	}
	
	public Integer placeDirectBet(DirectBet db) {
		PreparedStatement ps = null;
		int result = 0;

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "INSERT INTO winston_bets_direct (user1,user2,bet_amount,bet_status,bet_details) VALUES (?,?,?,?,?)";
			ps = conn.prepareStatement(sql);
			// Setting your variables takes two arguments:
			// The first refers to which question mark we are replacing
			// From left to right, each question mark is assigned a value from 1
			// and
			// above, sequentially.
			ps.setString(1, db.getUser1());
			ps.setString(2, db.getUser2());
			ps.setInt(3, db.getBetAmount());
			ps.setInt(4,  db.getBetStatus());
			ps.setString(5, db.getDetails());
			result = ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
		}
		return result;
	}
	
	public User selectUserByDiscordId(String id) {
		PreparedStatement ps = null;
		ResultSet rs = null;
		User u = null;

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "SELECT * FROM winston_user WHERE discord_id = ?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				
				u = new User(rs.getInt(1), 
						rs.getString(2),
						rs.getString(3)
				);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
			close(rs);
		}
		System.out.println(u);
		return u;
	}
	
	public int insertUser(User user) {
		PreparedStatement ps = null;
		System.out.println("HERE WE GO");
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "INSERT INTO winston_user(discord_id, user_name) VALUES (?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1, user.getDiscordId());
			ps.setString(2,user.getFname());
			return ps.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
		}
		return 0;
	};
	
	public User selectUserByName(String name) {
		PreparedStatement ps = null;
		ResultSet rs = null;
		User u = null;
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "SELECT * FROM winston_user WHERE user_name = ?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			rs = ps.executeQuery();

			while (rs.next()) {
				u = new User(rs.getInt(1), 
						rs.getString(2),
						rs.getString(3)
				);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
			close(rs);
		}
		return u;
	}


}
