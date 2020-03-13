package com.example.dashboard.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "radarchart")
public class RadarChart {
	
	@Id
	@Column
	private String quaters;
	@Column
	private int audiprofitinyear2018;
	@Column
	private int audiprofitinyear2019;
	public String getQuaters() {
		return quaters;
	}
	public void setQuaters(String quaters) {
		this.quaters = quaters;
	}
	public int getAudiprofitinyear2018() {
		return audiprofitinyear2018;
	}
	public void setAudiprofitinyear2018(int audiprofitinyear2018) {
		this.audiprofitinyear2018 = audiprofitinyear2018;
	}
	public int getAudiprofitinyear2019() {
		return audiprofitinyear2019;
	}
	public void setAudiprofitinyear2019(int audiprofitinyear2019) {
		this.audiprofitinyear2019 = audiprofitinyear2019;
	}
	
	
	
	
}
