import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacionref',
  standalone: false,
  styleUrl: './multiplicacion.ref.css',
  templateUrl: './multiplicacion.ref.html',
})
export class Multiplicacionref {

  public numero!: Array<number>;
  public
  public mensaje: string;

  constructor(){
    this.numero="";
    this.mensaje="";
  }

  multiplicarNumero(): void {
    this.mensaje = `El número seleccionado es: ${this.numero}`;
  }

}
