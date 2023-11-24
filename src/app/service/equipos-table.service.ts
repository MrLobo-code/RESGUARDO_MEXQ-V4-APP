import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EquiposTableService {
  getEquipos() {
    // var crea = axios.get('http://192.168.2.80:8000/api/json/equipos')
    // var rea  = axios.
    // var upd  = axios.
    // var del  = axios.delete
    return axios.get('http://192.168.2.146:8000/api/json/equipos');
  }

  //--------------------------------------------------------------------------------
  postEquipo() {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return 0;
  }
  //--------------------------------------------------------------------------------
}
