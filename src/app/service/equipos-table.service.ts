import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EquiposTableService {
  getEquipos(){
    return axios.get('http://127.0.0.1:8000/json/equipos');
  }
  // constructor() { }
}
