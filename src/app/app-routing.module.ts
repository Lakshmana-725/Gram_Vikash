import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './gram-vikas/shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./gram-vikas/gram-vikas.module').then(m => m.GramVikasModule)
  },
  {
    path: "**", component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
