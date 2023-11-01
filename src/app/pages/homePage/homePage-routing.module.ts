import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
// import { homeComponentClass } from './homePage-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'homePage', component: homeComponentClass },
  // { path: 'myheadHome', component: myheadComponent },
  // { path: 'mybodyHome', component: mybodyComponent },
];

@NgModule({
  declarations: [
    // homeComponentClass,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class homeModule {}
