import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentAuth } from 'projects/Data_Collector/authentication/src/app/app.component';
import { DahshboardComponent } from 'projects/Data_Collector/dash-board/src/app/app.component';
import { ReportsComponent } from 'projects/Data_Collector/reports/src/app/app.component';
import { VillagesComponent } from 'projects/Data_Collector/village/src/app/app.component';
import { MainAppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'auth', component: AppComponentAuth
  },
  {
    path: '', component: MainAppComponent
  },
  {
    path: 'dashboard', component: DahshboardComponent
  },
  {
    path: "reports", component: ReportsComponent
  },
  {
    path: "villages", component: VillagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
