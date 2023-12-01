import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EquiposTableService {
  getEquipos() {
    return axios.get('http://192.168.2.189:8000/api/json/equipos');
  }

  postEquipo(){
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
}
