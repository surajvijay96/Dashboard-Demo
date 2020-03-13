import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent implements OnInit {


 constructor(private http:HttpClient){
 }

//Bar Chart

 public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = [];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: [], label: ''},
  {data: [], label: ''}
];

public isDataAvailable4:boolean = false;
public temp4: any = [];

// Doughnut Chart

public doughnutChartLabels = [];
public doughnutChartData = [];
public doughnutChartType = 'doughnut';
public isDataAvailable2:boolean = false;
public temp2: any = [];


//Radar Chart

public radarChartLabels = [];
public radarChartData = [
  {data: [], label: '2018'},
  {data: [], label: '2019'}
];

public isDataAvailable5:boolean = false;
public temp5: any = [];
public radarChartType = 'radar';

//Pie Chart

public pieChartLabels = [];
public pieChartData = [];
public pieChartType = 'pie';
public isDataAvailable1:boolean = false;
public temp1: any = [];

//Line Chart

public lineChartLabels = [];
public lineChartData = [];
public lineChartType = 'line';
public isDataAvailable:boolean = false;
public temp: any = [];

//Line Chart 2

public lineChartLabels3 = [];
public lineChartData3 = [];
public lineChartType3 = 'line';
public isDataAvailable3:boolean = false;
public temp3: any = [];




ngOnInit(): void {
  let res = this.http.get ( "http://localhost:8080/displayline" );
  res.subscribe(data => {this.temp = data; this.firstCall();
  });

  let res1 = this.http.get ( "http://localhost:8080/displaypie" );
  res1.subscribe(data => {this.temp1 = data; this.firstCall1();
  });

  let res2 = this.http.get ( "http://localhost:8080/displaydoughnutchart" );
    res2.subscribe(data => {this.temp2 = data; this.firstCall2();
    });

    let res3 = this.http.get ( "http://localhost:8080/displayline2" );
    res3.subscribe(data => {this.temp3 = data; this.firstCall3();
    });

    let res4 = this.http.get ( "http://localhost:8080/displaybar" );
    res4.subscribe(data => {this.temp4 = data; this.firstCall4();
    });

    let res5 = this.http.get ( "http://localhost:8080/displayradar" );
    res5.subscribe(data => {this.temp5 = data; this.firstCall5();
    });


  
}
firstCall(): void {

  let labels:string[] = [];
  let data:number[] = [];

  this.temp.forEach(ele => {
    labels.push(ele.year);
    data.push(ele.profit);
  });
  this.lineChartData = data;
  this.lineChartLabels = labels;
  console.log(this.temp);
  this.isDataAvailable = true;
}
firstCall1(): void {

  let labels:string[] = [];
  let data:number[] = [];

  this.temp1.forEach(ele => {
    labels.push(ele.age);
    data.push(ele.percentage);
  });
  this.pieChartData = data;
  this.pieChartLabels = labels;
  this.isDataAvailable1 = true;
}

firstCall2(): void {

  let labels:string[] = [];
  let data:number[] = [];

  this.temp2.forEach(ele => {
    labels.push(ele.companyname);
    data.push(ele.percent);
  });
  this.doughnutChartData = data;
  this.doughnutChartLabels = labels;
  console.log(this.temp2);
  this.isDataAvailable2 = true;
}

firstCall3(): void {

  let labels:string[] = [];
  let data:number[] = [];

  this.temp3.forEach(ele => {
    labels.push(ele.year);
    data.push(ele.price);
  });
  this.lineChartData3 = data;
  this.lineChartLabels3 = labels;
  console.log(this.temp3);
  this.isDataAvailable3 = true;
}

firstCall4(): void {

  let labels:string[] = [];
  let data:number[] = [];
  let data1:number[] = [];

  this.temp4.forEach(ele => {
    labels.push(ele.year);
    data.push(ele.numberofmale);
    data1.push(ele.numberoffemale);
  });

  this.barChartData[0].data= data 
  this.barChartData[0].label="Male"
  this.barChartData[1].data= data1 
  this.barChartData[1].label="Female"

  this.barChartLabels = labels;
  this.isDataAvailable4 = true;
}

firstCall5(): void {

  let labels:string[] = [];
  let data:number[] = [];
  let data1:number[] = [];

  this.temp5.forEach(ele => {
    labels.push(ele.quaters);
    data.push(ele.audiprofitinyear2018);
    data1.push(ele.audiprofitinyear2019);
  });

  this.radarChartData[0].data= data 
  this.radarChartData[0].label="2018"
  this.radarChartData[1].data= data1 
  this.radarChartData[1].label="2019"
  this.radarChartLabels = labels;

  console.log(this.temp5);

  this.isDataAvailable5 = true;
}

}
