import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { edcComponentPage } from './pages/equiposDeComputo-Page/edc-component.component';
import { homeComponentClass } from './pages/homePage/homePage-component.component';

const routes: Routes = [
  {
    path: '', 
    component: homeComponentClass
  },
  {
    path: 'equiposDeComputo', 
    component: edcComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
