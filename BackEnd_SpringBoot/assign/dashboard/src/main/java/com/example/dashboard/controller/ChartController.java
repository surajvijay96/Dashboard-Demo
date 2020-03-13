package com.example.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dashboard.dto.BarChart;
import com.example.dashboard.dto.DoughnutChart;
import com.example.dashboard.dto.LineChart;
import com.example.dashboard.dto.LineChart2;
import com.example.dashboard.dto.PieChart;
import com.example.dashboard.dto.RadarChart;
import com.example.dashboard.service.ServiceChart;


@RestController
public class ChartController {
	
	@Autowired
	private ServiceChart sc ;
	
	@PostMapping("/insert/barchart")
	public boolean insert( @RequestBody BarChart barchart) {
	
		boolean isAdded = false;
		try {
			sc.insert(barchart);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;
}
	@GetMapping("/displaybar")
	public List<BarChart> display(){
		
			List<BarChart> barchart = null;
			try {
				barchart = sc.display();
			} catch (Exception e) {
				System.err.println(e.getMessage());
			}
			return barchart;
	}
	@PostMapping("/insert/piechart")
	public boolean insertPie( @RequestBody PieChart piechart)
	{
		boolean isAdded = false;
		try {
			sc.insertPie(piechart);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;
	}
	
	@GetMapping("/displaypie")
	public List<PieChart> displaypie(){
		
			List<PieChart> piechart = null;
			try {
				piechart = sc.displaypie();
			} catch (Exception e) {
				System.err.println(e.getMessage());
			}
			return piechart;
	}
	
	@PostMapping("/insert/linechart")
	public boolean insertLine( @RequestBody LineChart linechart) {
		boolean isAdded = false;
		try {
			sc.insertLine(linechart);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;
		
	}
	
	@GetMapping("/displayline")
	public List<LineChart> displayline(){
		List<LineChart> linechart = null;
		try {
			linechart = sc.displayline();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return linechart;
	}
	@PostMapping("/insert/doughnutchart")
	public boolean insertDough( @RequestBody DoughnutChart doughnutChart) {
		boolean isAdded = false;
		try {
			sc.insertDough(doughnutChart);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;
		
	}
	@GetMapping("/displaydoughnutchart")
	public List<DoughnutChart> displaydoughnut(){
		List<DoughnutChart> doughchart = null;
		try {
			doughchart = sc.displaydoughnut();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return doughchart;
	}
	
	@PostMapping("/insert/radarchart")
	public boolean insertRadar(@RequestBody RadarChart radarchart)
	{
		boolean isAdded = false;
		try {
			sc.insertRadar(radarchart);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;
	
	}
	@GetMapping("/displayradar")
	public List<RadarChart> displayradar()
	{
		List<RadarChart> radarchart = null;
		try {
			radarchart = sc.displayradar();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return radarchart;
	}
	
	@PostMapping("/insert/linechart2")
	public boolean insertLine2(@RequestBody LineChart2 linechart2) {
		boolean isAdded = false;
		try {
			sc.insertLine2(linechart2);
			isAdded = true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return isAdded;

	}
	
	@GetMapping("/displayline2")
	public List<LineChart2> displayline2(){
		List<LineChart2> linechart2 = null;
		try {
			linechart2 = sc.displayline2();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return linechart2;
	}

}