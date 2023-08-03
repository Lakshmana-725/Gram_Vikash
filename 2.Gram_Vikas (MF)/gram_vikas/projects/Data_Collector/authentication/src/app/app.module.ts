import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponentAuth } from './app.component';

@NgModule({
  declarations: [
    AppComponentAuth
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    AppComponentAuth
  ],
  providers: [],
  bootstrap: [AppComponentAuth]
})
export class AppModule { }
