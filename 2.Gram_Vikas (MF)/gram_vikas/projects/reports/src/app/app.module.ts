import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReportsComponent } from './app.component';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    ReportsComponent
  ],
  providers: [],
  bootstrap: [ReportsComponent]
})
export class AppModule { }
