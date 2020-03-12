import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //Bar Chart

 public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = [];
public barChartType = 'bar';
public barChartLegend = true;
public isDataAvailable:boolean = false;
public temp: any = [];
public barChartData = [
  {data: [], label: ''},
  {data: [], label: ''}
];

  ngOnInit(): void {

    let res = this.http.get ( "http://localhost:8080/displaybar" );
    res.subscribe(data => {this.temp = data; this.firstCall();
    });

  }
  firstCall(): void {

    let labels:string[] = [];
    let data:number[] = [];
    let data1:number[] = [];

    this.temp.forEach(ele => {
      labels.push(ele.year);
      data.push(ele.numberofmale);
      data1.push(ele.numberoffemale);
    });

    this.barChartData.push({data: data, label: "abc"},{data: data1, label: "abcd"});
    this.barChartLabels = labels;
    this.isDataAvailable = true;
}


}
