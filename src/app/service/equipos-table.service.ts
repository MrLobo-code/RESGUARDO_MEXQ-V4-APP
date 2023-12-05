import { Injectable } from '@angular/core';
import axios from 'axios';
import { AddequipoComponent } from '../addequipo_modal/addequipo.component';

@Injectable({
  providedIn: 'root',
})
export class EquiposTableService {
  getEquipos() {
    return axios.get('http://192.168.2.189:8000/api/json/equipos');
  }

  postEquipo(campos: any){

      axios.post('http://192.168.2.189:8000/api/save', 
      { campos }
      // {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
