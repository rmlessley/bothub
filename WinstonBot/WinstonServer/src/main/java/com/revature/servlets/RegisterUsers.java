package com.revature.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.service.RegisterUser;

/**
 * Servlet implementation class RegisterUser
 */
public class RegisterUsers extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String discordId = request.getParameter("discordId");
		String name = request.getParameter("name");
		System.out.println(discordId + " " + name);
		response.setContentType("text");
		PrintWriter out = response.getWriter();
		if(RegisterUser.register(discordId, name)){
			out.print("SUCCESS");
		}else{
			out.print("FAILURE");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
