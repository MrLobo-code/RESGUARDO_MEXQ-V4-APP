import { Component, OnInit } from '@angular/core';
import { EquiposTableService } from '../../../service/equipos-table.service';
import { Observable } from 'rxjs';

export interface Equipo {
  id: number;
  codigo: string;
  nomina: string;
  nombre: string;
  sucursal: string;
  area: string;
  marca: string;
  modelo: string;
  no_serie: string;
  fecha: string;
  no_factura: string;
  proveedor: string;
  estado: string;
}
  
@Component ({
    selector: 'equiposBody',
    templateUrl: './equiposBody-component.component.html',
    styleUrls: ['./equiposBody-component.component.css']
})
export class equiposBodyComponent implements OnInit{

  equipos: Array<Equipo> = [];

  constructor(private equiposService: EquiposTableService) {}
  
  async ngOnInit() {
    this.equipos = (await this.equiposService.getEquipos()).data;  
    console.log(this.equipos);

  }
}
