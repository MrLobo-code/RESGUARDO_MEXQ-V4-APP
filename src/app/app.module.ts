import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myheadComponent } from './components/home/myhead/myhead-component.component';
import { mybodyComponent } from './components/home/mybody/mybody-component.component';
import { homeComponentClass } from './pages/homePage/homePage-component.component';
import { edcComponentPage } from './pages/equiposDeComputo-Page/edc-component.component';
import { equiposBodyComponent } from './components/equiposDeComputo/mybody/equiposBody-component.component';
import { equiposHeadComponent } from './components/equiposDeComputo/myhead/equiposHead-component.component';
import { myhead2Component } from './components/home/myhead2/myhead2-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AddequipoComponent } from './addequipo_modal/addequipo.component'
// import { Axios } from 'axios';

@NgModule({
  declarations: [
    AppComponent,
    myheadComponent,
    mybodyComponent,
    homeComponentClass,
    edcComponentPage,
    equiposBodyComponent,
    equiposHeadComponent,
    myhead2Component,
    AddequipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
