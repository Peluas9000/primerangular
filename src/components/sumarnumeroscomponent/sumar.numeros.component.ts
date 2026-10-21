import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'sumar-numeros',
    standalone: false,
    templateUrl: './sumar.numeros.component.html'
})


export class SumarNumerosComponent {
    public suma: number;
    @ViewChild('cajaNumero1') cajaNumero1: ElementRef;
    @ViewChild('cajaNumero2') cajaNumero2: ElementRef;

    constructor() {
                this.suma = 0;
        this.cajaNumero1 = new ElementRef(0);
        this.cajaNumero2 = new ElementRef(0);

    }

    sumarNumeros(): void {
        const num1 = parseInt(this.cajaNumero1.nativeElement.value);
        const num2 = parseInt(this.cajaNumero2.nativeElement.value);
        this.suma = num1 + num2;
    }
}