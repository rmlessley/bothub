package com.revature.dao;

import static com.revature.util.CloseStreams.close;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.beans.DirectBet;
import com.revature.beans.User;
import com.revature.util.ConnectionUtil;

public class DirectBetDao {
	public List<DirectBet> selectAllBets(){
		List<DirectBet> bets = new ArrayList<>();
		PreparedStatement ps = null;
		ResultSet rs = null;
		DirectBet db = null;
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try (Connection conn = ConnectionUtil.getConnection();) {
			String sql = "SELECT * FROM winston_bets_direct";
			ps = conn.prepareStatement(sql);
			// Setting your variables takes two arguments:
			// The first refers to which question mark we are replacing
			// From left to right, each question mark is assigned a value from 1
			// and
			// above, sequentially.
			rs = ps.executeQuery();

			while (rs.next()) {
				db = new DirectBet(
							rs.getInt(1),
							rs.getString(2),
							rs.getString(3),
							rs.getInt(4),
							rs.getInt(5),
							rs.getString(6)
						);
				bets.add(db);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(ps);
			close(rs);
		}
		
		return bets;
	}
}
