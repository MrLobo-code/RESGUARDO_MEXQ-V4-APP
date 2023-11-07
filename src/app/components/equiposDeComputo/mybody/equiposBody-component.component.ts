import { Component, OnInit } from '@angular/core';
import { EquiposTableService } from '../../../service/equipos-table.service';
import { AxiosResponse } from 'axios';

@Component ({
    selector: 'equiposBody',
    templateUrl: './equiposBody-component.component.html',
    styleUrls: ['./equiposBody-component.component.css']
})
export class equiposBodyComponent implements OnInit{

    equipo : any;
  equipos: Promise<AxiosResponse<any, any>> = this.equiposService.getEquipos() as Promise<AxiosResponse<any, any>>;

  constructor(private equiposService: EquiposTableService) {}
  
  ngOnInit(): void {}
}

// import { Component, OnInit } from '@angular/core';
// import { EquiposTableService } from '../../../service/equipos-table.service';
// import { AxiosResponse } from 'axios';

// @Component ({
//     selector: 'equiposBody',
//     templateUrl: './equiposBody-component.component.html',
//     styleUrls: ['./equiposBody-component.component.css']
// })
// export class equiposBodyComponent implements OnInit{

//   equipos: Promise<AxiosResponse<any, any>> = Promise.resolve([]);

//   constructor(private equiposService: EquiposTableService) {}
  
//   ngOnInit(): void {
//     this.equipos = this.equiposService.getEquipos();
//   }
// }