package com.revature.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.service.DirectBetService;

/**
 * Servlet implementation class PlaceDirectBet
 */
public class PlaceDirectBet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PlaceDirectBet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 String name1 = request.getParameter("name1");
		 String name2 = request.getParameter("name2");
		 Integer amount = Integer.parseInt(request.getParameter("amount"));
		 String details = request.getParameter("details");
		 response.setContentType("text");
		 System.out.println(name1 + " " + name2 + " " + amount + " " + details);
		 PrintWriter out = response.getWriter();
		 
		 
		if(DirectBetService.placeBet(name1, name2, amount, details)){
			out.println("SUCCESS");
		}else{
			out.println("FAILURE");
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
