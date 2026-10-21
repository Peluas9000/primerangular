import { Component, OnInit } from "@angular/core";
 
@Component({
    selector: "app-forms-binding",
    standalone: false,
    templateUrl: "./forms.biding.component.html"
})
 
export class FormsBindingComponent {
    public user: any;
    public mensaje: string;
 
    constructor() {
        this.mensaje = ""
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }
 
    recibirDatos(): void {
        this.mensaje = "Datos recibidos"
       
    }
}
 