package com.example.dashboard.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.example.dashboard.dto.BarChart;
import com.example.dashboard.dto.DoughnutChart;
import com.example.dashboard.dto.LineChart;
import com.example.dashboard.dto.LineChart2;
import com.example.dashboard.dto.PieChart;
import com.example.dashboard.dto.RadarChart;

@Repository
public class DAOImpl implements DAO{

	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public boolean insert(BarChart barchart) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {		
			transaction.begin();
			manager.persist(barchart);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public List<BarChart> display() {
		String jpql = "from BarChart";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<BarChart> query = manager.createQuery(jpql,BarChart.class);
		List<BarChart> barChart = query.getResultList();
		return barChart;
	}

	@Override
	public boolean insertPie(PieChart piechart) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(piechart);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public List<PieChart> displaypie() {
		String jpql = "from PieChart";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<PieChart> query = manager.createQuery(jpql,PieChart.class);
		List<PieChart> pieChart = query.getResultList();
		return pieChart;
	}

	@Override
	public boolean insertLine(LineChart linechart) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(linechart);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public List<LineChart> displayline() {
		String jpql = "from LineChart";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<LineChart> query = manager.createQuery(jpql,LineChart.class);
		List<LineChart> lineChart = query.getResultList();
		return lineChart;
	}

	@Override
	public boolean insertDough(DoughnutChart dchart) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(dchart);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public List<DoughnutChart> displaydoughnut() {
		String jpql = "from DoughnutChart";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<DoughnutChart> query = manager.createQuery(jpql,DoughnutChart.class);
		List<DoughnutChart> doughNut = query.getResultList();
		return doughNut;
	}

	@Override
	public boolean insertRadar(RadarChart radarchart) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(radarchart);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public List<RadarChart> displayradar() {
		String jpql = "from RadarChart";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<RadarChart> query = manager.createQuery(jpql,RadarChart.class);
		List<RadarChart> radarchart = query.getResultList();
		return radarchart;
	}

	@Override
	public boolean insertLine2(LineChart2 linechart2) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(linechart2);
			transaction.commit();
			return true;

		}catch(Exception e) {
			
			e.printStackTrace();
			return false;
		}
			}

	@Override
	public List<LineChart2> displayline2() {
		String jpql = "from LineChart2";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<LineChart2> query = manager.createQuery(jpql,LineChart2.class);
		List<LineChart2> lineChart2 = query.getResultList();
		return lineChart2;
	}

}
	