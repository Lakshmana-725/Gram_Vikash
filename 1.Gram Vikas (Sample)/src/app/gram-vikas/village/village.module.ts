import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRoutingModule } from './village-routing.module';
import { EditVillageComponent } from './components/edit-village/edit-village.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';


@NgModule({
  declarations: [
    EditVillageComponent,
    AddDetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    VillageRoutingModule
  ]
})
export class VillageModule { }
