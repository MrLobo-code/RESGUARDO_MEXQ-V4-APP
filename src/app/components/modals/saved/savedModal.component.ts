import { Component } from "@angular/core";
// import { FormControl} from "@angular/forms";

@Component({
    selector: 'savedModal',
    templateUrl: './savedModal.component.html',
    styleUrls: ['./savedModal.component.css']
})
export class savedmodal {
    showModal = false;

    openModal(): void {
        this.showModal = true;
    }
}