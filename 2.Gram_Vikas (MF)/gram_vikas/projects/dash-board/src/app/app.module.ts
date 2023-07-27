import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DahshboardComponent } from './app.component';

@NgModule({
  declarations: [
    DahshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    DahshboardComponent
  ],
  providers: [],
  bootstrap: [DahshboardComponent]
})
export class AppModule { }
