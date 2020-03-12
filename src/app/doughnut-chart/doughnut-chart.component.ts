import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private http:HttpClient) { }

  // Doughnut Chart

public doughnutChartLabels = [];
public doughnutChartData = [];
public doughnutChartType = 'doughnut';
public isDataAvailable:boolean = false;
public temp: any = [];



  ngOnInit(): void {
    let res = this.http.get ( "http://localhost:8080/displaydoughnutchart" );
    res.subscribe(data => {this.temp = data; this.firstCall();
    });
  }
  firstCall(): void {

    let labels:string[] = [];
    let data:number[] = [];

    this.temp.forEach(ele => {
      labels.push(ele.companyname);
      data.push(ele.percent);
    });
    this.doughnutChartData = data;
    this.doughnutChartLabels = labels;
    console.log(this.temp);
    this.isDataAvailable = true;
  }

}
