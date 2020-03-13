package com.example.dashboard.service;

import java.util.List;

import com.example.dashboard.dto.BarChart;
import com.example.dashboard.dto.DoughnutChart;
import com.example.dashboard.dto.LineChart;
import com.example.dashboard.dto.LineChart2;
import com.example.dashboard.dto.PieChart;
import com.example.dashboard.dto.RadarChart;

public interface ServiceChart {
	
	
	public boolean insert(BarChart barchart);
	public List<BarChart> display();
	public boolean insertPie(PieChart piechart);
	public List<PieChart> displaypie();
	public boolean insertLine(LineChart linechart);
	public List<LineChart> displayline();
	public boolean insertDough(DoughnutChart dchart);
	public List<DoughnutChart> displaydoughnut();
	public boolean insertRadar(RadarChart radarchart);
	public List<RadarChart> displayradar();
	public boolean insertLine2(LineChart2 linechart2);
	public List<LineChart2> displayline2();
}

