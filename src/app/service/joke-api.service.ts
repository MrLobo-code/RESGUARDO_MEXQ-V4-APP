import { Injectable, inject } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class jokeApiSrvice {
  getRandomJoke() {
    return axios.get('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
        headers: {
            'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
            'x-rapidapi-key': 'your-rapid-api-key'
        }
    })
  }
}
