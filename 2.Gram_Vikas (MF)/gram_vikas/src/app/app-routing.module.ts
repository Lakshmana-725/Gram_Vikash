import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentAuth } from 'projects/authentication/src/app/app.component';
import { DahshboardComponent } from 'projects/dash-board/src/app/app.component';
import { MainAppComponent } from './app.component';
import { ReportsComponent } from 'projects/reports/src/app/app.component';
import { VillagesComponent } from 'projects/village/src/app/app.component';

const routes: Routes = [
  {
    path: 'auth', component: AppComponentAuth
  },
  { path: '', component: MainAppComponent },
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
