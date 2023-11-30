import { Component } from '@angular/core';

@Component({
  selector: 'app-addequipo',
  templateUrl: './addequipo.component.html',
  styleUrls: ['./addequipo.component.css']
})
export class AddequipoComponent {

  showModal = false;

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
