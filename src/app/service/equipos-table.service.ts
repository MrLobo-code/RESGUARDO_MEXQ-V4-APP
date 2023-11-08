import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EquiposTableService {
  getEquipos(){
    // return axios.get('http://127.0.0.1:8000/json/equipos');
    // const config = {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*', // Ejemplo de encabezado de autorización
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Otro encabezado personalizado
    //     'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    //   }
    // };
    return axios.get('http://192.168.2.57:8000/api/json/equipos'/*, config*/);
  }
  // constructor() { }
}
