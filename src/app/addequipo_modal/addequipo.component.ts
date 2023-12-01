import { Component, NgModule, isStandalone } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  // standalone: true,
  selector: 'app-addequipo',
  templateUrl: './addequipo.component.html',
  styleUrls: ['./addequipo.component.css'],
  // imports: [ReactiveFormsModule]
})
export class AddequipoComponent {
  //employee
  nomina = new FormControl('');
  phone = new FormControl('');
  name = new FormControl('');
  puesto = new FormControl('');
  email = new FormControl('');
  sucursal = new FormControl('');
  planta_depto = new FormControl('');

  //equipment
  type = new FormControl('');
  status = new FormControl('');
  brand = new FormControl('');
  model = new FormControl('');
  serial_number = new FormControl('');
  product_number = new FormControl('');
  bill_number = new FormControl('');
  date = new FormControl('');
  provider = new FormControl('');
  comments = new FormControl('');


  // //employee
  // nomina = '';
  // phone ='';
  // name = '';
  // puesto = '';
  // email = '';
  // sucursal = '';
  // planta_depto = '';

  // //equipment
  // type = '';
  // status = '';
  // brand = '';
  // model = '';
  // serial_number = '';
  // product_number = '';
  // bill_number = '';
  // date = '';
  // provider = '';
  // comments = '';


  showModal = false;


  


  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addEquipo() {
    console.log("AHHHHHHHHHHHHHH");
    // var texts = [
    //   this.nomina,
    //   "-", this.phone,
    //   "-", this.name,
    //   "-", this.puesto,
    //   "-", this.email,
    //   "-", this.sucursal,
    //   "-", this.planta_depto,      
    //   //--------------
    //   "-", this.type, 
    //   "-", this.status, 
    //   "-", this.brand,
    //   "-", this.model,
    //   "-", this.serial_number,
    //   "-", this.product_number, 
    //   "-", this.bill_number, 
    //   "-", this.date, 
    //   "-", this.provider, 
    //   "-", this.comments,
    // ];
    // let element = texts.pop();
    console.log(
      // element
      this.nomina,
      "-", this.phone,
      "-", this.name,
      "-", this.puesto,
      "-", this.email,
      "-", this.sucursal,
      "-", this.planta_depto,      

      "-", this.type, 
      "-", this.status, 
      "-", this.brand,
      "-", this.model,
      "-", this.serial_number,
      "-", this.product_number, 
      "-", this.bill_number, 
      "-", this.date, 
      "-", this.provider, 
      "-", this.comments, 
    );
  }
  // const url = `http://192.168.2.189:8000/api/equipos/create`;

  // return new Observable((observer) => {
  //   axios
  //     .post(url, data)
  //     .then((response) => {
  //       observer.next(response.data);
  //       observer.complete();
  //     })
  //     .catch((error) => {
  //       observer.error(error);
  //       observer.complete();
  //     });
  // });
  // return this.codigo;
}
