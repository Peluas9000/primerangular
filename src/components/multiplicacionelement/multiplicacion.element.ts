import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplicacionelement',
  standalone: false,
  styleUrl: './multiplicacion.element.css',
  templateUrl: './multiplicacion.element.html',
})
export class Multiplicacionelement {
  @ViewChild('cajaNumero') cajaNumero: ElementRef;
  public numero:number;
  constructor(){
    this.cajaNumero=new ElementRef(0);  
    this.numero=0;
  }

  multiplicarNumeros(): void {
    let numero= parseInt(this.cajaNumero.nativeElement.value);
    if (isNaN(numero)) {
      this.numero=0;
    } else {
      this.numero=numero;
    }
  }
}
