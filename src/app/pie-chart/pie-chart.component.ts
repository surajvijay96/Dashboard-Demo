import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //Pie Chart

public pieChartLabels = [];
public pieChartData = [];
public pieChartType = 'pie';
public isDataAvailable:boolean = false;
public temp: any = [];

  ngOnInit(): void {
    let res = this.http.get ( "http://localhost:8080/displaypie" );
    res.subscribe(data => {this.temp = data; this.firstCall();
    });
  }

  firstCall(): void {

    let labels:string[] = [];
    let data:number[] = [];

    this.temp.forEach(ele => {
      labels.push(ele.age);
      data.push(ele.percentage);
    });
    this.pieChartData = data;
    this.pieChartLabels = labels;
    console.log(this.temp);
    this.isDataAvailable = true;
}
}
