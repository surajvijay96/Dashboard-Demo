import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'stats',component: StatsComponent},
  {path:'lineChart',component: LineChartComponent},
  {path:'barChart',component: BarChartComponent},
  {path:'doughnutChart',component: DoughnutChartComponent},
  {path:'radarChart',component: RadarChartComponent},
  {path:'pieChart',component: PieChartComponent},

  {path:'home/lineChart',component: LineChartComponent},
  {path:'home/barChart',component: BarChartComponent},
  {path:'home/doughnutChart',component: DoughnutChartComponent},
  {path:'home/radarChart',component: RadarChartComponent},
  {path:'home/pieChart',component: PieChartComponent},

  {path:'',component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
