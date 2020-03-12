import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material/';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';

import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

import { HttpClientModule } from '@angular/common/http';
import { LineChart2Component } from './line-chart2/line-chart2.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    LineChart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    RouterModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
