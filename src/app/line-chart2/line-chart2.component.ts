import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {

  constructor(private http:HttpClient) { }

  //Line Chart 2

  public lineChartLabels = [];
  public lineChartData = [];
  public lineChartType = 'line';
  public isDataAvailable:boolean = false;
  public temp: any = [];

  ngOnInit(): void {

    let res = this.http.get ( "http://localhost:8080/displayline2" );
    res.subscribe(data => {this.temp = data; this.firstCall();
    });

  }

  firstCall(): void {

    let labels:string[] = [];
    let data:number[] = [];

    this.temp.forEach(ele => {
      labels.push(ele.year);
      data.push(ele.price);
    });
    this.lineChartData = data;
    this.lineChartLabels = labels;
    console.log(this.temp);
    this.isDataAvailable = true;
}

}
