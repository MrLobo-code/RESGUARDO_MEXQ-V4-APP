import { Component, OnInit } from '@angular/core';
import { EquiposTableService } from '../../../service/equipos-table.service';
// import { AxiosResponse } from 'axios';

// interface equipo {          these helps to
// id: number,
// codigo: number,
// }

@Component ({
    selector: 'equiposBody',
    templateUrl: './equiposBody-component.component.html',
    styleUrls: ['./equiposBody-component.component.css']
})
export class equiposBodyComponent implements OnInit{

    equipos: any;

  constructor(private equiposService: EquiposTableService) {}
  
  async ngOnInit() {
    this.equipos = await this.equiposService.getEquipos();
  }
}
