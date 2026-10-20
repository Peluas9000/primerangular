import { Component, OnInit } from '@angular/core';
@Component ({
  selector: 'app-deportes',
  standalone:false,
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent  {  

    public sports: Array<string>;
    public numeros: Array<number>;
    
  constructor() { 
    this.numeros=[1,22,33,435,35];
    this.sports = ['Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Atletismo'];
  }

  

}