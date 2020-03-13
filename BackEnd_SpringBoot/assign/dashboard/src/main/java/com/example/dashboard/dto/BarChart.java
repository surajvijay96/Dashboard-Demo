package com.example.dashboard.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Barchart")
public class BarChart {
	
	@Id
	@Column
	private int year;
	@Column
	private int numberofmale;
	@Column
	private int numberoffemale;
	
	public int getNumberofmale() {
		return numberofmale;
	}
	public void setNumberofmale(int numberofmale) {
		this.numberofmale = numberofmale;
	}
	public int getNumberoffemale() {
		return numberoffemale;
	}
	public void setNumberoffemale(int numberoffemale) {
		this.numberoffemale = numberoffemale;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	
	
	
	
}
