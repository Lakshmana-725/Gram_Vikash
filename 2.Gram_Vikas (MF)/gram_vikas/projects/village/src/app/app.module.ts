import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { VillagesComponent } from './app.component';

@NgModule({
  declarations: [
    VillagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    VillagesComponent
  ],
  providers: [],
  bootstrap: [VillagesComponent]
})
export class AppModule { }
