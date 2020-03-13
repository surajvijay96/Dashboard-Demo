package com.example.dashboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dashboard.dao.DAO;
import com.example.dashboard.dto.BarChart;
import com.example.dashboard.dto.DoughnutChart;
import com.example.dashboard.dto.LineChart;
import com.example.dashboard.dto.LineChart2;
import com.example.dashboard.dto.PieChart;
import com.example.dashboard.dto.RadarChart;

@Service
public class ServiceImpl implements ServiceChart{

	@Autowired
	private DAO dao;
	
	@Override
	public boolean insert(BarChart barchart) {
		return dao.insert(barchart);
	}

	@Override
	public List<BarChart> display() {
		return dao.display();
	}

	@Override
	public boolean insertPie(PieChart piechart) {
		return dao.insertPie(piechart);
	}

	@Override
	public List<PieChart> displaypie() {
		return dao.displaypie();
	}

	@Override
	public boolean insertLine(LineChart linechart) {
		return dao.insertLine(linechart);
	}

	@Override
	public List<LineChart> displayline() {
		return dao.displayline();
	}

	@Override
	public boolean insertDough(DoughnutChart dchart) {
		return dao.insertDough(dchart);
	}

	@Override
	public List<DoughnutChart> displaydoughnut() {
		return dao.displaydoughnut();
	}

	@Override
	public boolean insertRadar(RadarChart radarchart) {
		return dao.insertRadar(radarchart);
	}

	@Override
	public List<RadarChart> displayradar() {
		return dao.displayradar();
	}

	@Override
	public boolean insertLine2(LineChart2 linechart2) {
		return dao.insertLine2(linechart2);
	}

	@Override
	public List<LineChart2> displayline2() {
		return dao.displayline2();
	}

}
