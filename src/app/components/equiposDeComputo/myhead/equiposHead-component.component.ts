import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'equiposHead',
  templateUrl: './equiposHead-component.component.html',
})
export class equiposHeadComponent {
  private apiUrl = 'http://127.0.0.1:8000/json/equipos';

  // private headers = {
  //   'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
  //   'x-rapidapi-key': 'your-rapid-api-key',
  // };

  getEquipos() {
    axios
      .get(this.apiUrl/*, { headers: this.headers }*/)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
