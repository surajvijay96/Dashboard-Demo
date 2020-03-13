import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //Radar Chart

public radarChartLabels = [];
public radarChartData = [
  {data: [], label: '2018'},
  {data: [], label: '2019'}
];

public isDataAvailable:boolean = false;
public temp: any = [];
public radarChartType = 'radar';

  ngOnInit(): void {

    let res = this.http.get ( "http://localhost:8080/displayradar" );
    res.subscribe(data => {this.temp = data; this.firstCall();
    });

  }
  firstCall(): void {

    let labels:string[] = [];
    let data:number[] = [];
    let data1:number[] = [];

    this.temp.forEach(ele => {
      labels.push(ele.quaters);
      data.push(ele.audiprofitinyear2018);
      data1.push(ele.audiprofitinyear2019);
    });

    this.radarChartData[0].data= data 
    this.radarChartData[0].label="2018"
    this.radarChartData[1].data= data1 
    this.radarChartData[1].label="2019"
    this.radarChartLabels = labels;

    console.log(this.temp);

    this.isDataAvailable = true;
}

}
