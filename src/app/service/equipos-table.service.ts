import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EquiposTableService {
  getEquipos()
  {
    return axios.get('http://192.168.2.57:8000/api/json/equipos')
  }
}
