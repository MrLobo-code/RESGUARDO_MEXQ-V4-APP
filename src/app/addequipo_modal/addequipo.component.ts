import { Component, NgModule, isStandalone } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EquiposTableService } from '../service/equipos-table.service';

@Component({
  selector: 'app-addequipo',
  templateUrl: './addequipo.component.html',
  styleUrls: ['./addequipo.component.css'],
})
export class AddequipoComponent {
  code = 'MQ-X';
  // //employee
  // nomina = new FormControl('');
  // phone = new FormControl('');
  // name = new FormControl('');
  // puesto = new FormControl('');
  // email = new FormControl('');
  // sucursal = new FormControl('');
  // planta_depto = new FormControl('');

  // //equipment
  // type = new FormControl('');
  // status = new FormControl('');
  // brand = new FormControl('');
  // model = new FormControl('');
  // serial_number = new FormControl('');
  // product_number = new FormControl('');
  // bill_number = new FormControl('');
  // date = new FormControl('');
  // provider = new FormControl('');
  // comments = new FormControl('');


  //employee
  nomina = '';
  phone ='';
  name = '';
  puesto = '';
  email = '';
  sucursal = '';
  planta_depto = '';

  //equipment
  type = '';
  status = '';
  brand = '';
  model = '';
  serial_number = '';
  product_number = '';
  bill_number = '';
  fecha = '';
  provider = '';
  comments = '';

  public campos = '';

  showModal = false;

  constructor(private equiposService: EquiposTableService) {}

  showalert() {
    alert("record saved!");
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addEquipo() {
    this.campos = 
    `
    ${this.code} - 
    ${this.nomina} - 
    ${this.phone} - 
    ${this.name} - 
    ${this.puesto} - 
    ${this.email} - 
    ${this.sucursal} - 
    ${this.planta_depto} -
    ${this.type} - 
    ${this.status} - 
    ${this.brand} - 
    ${this.model} - 
    ${this.serial_number} - 
    ${this.product_number} - 
    ${this.bill_number} - 
    ${this.fecha} - 
    ${this.provider} - 
    ${this.comments} 
    ` 
    // console.log(this.campos);
    this.equiposService.postEquipo(this.campos);
  }
}
