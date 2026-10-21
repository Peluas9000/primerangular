import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { Multiplicacionref } from '../components/multiplicacionref/multiplicacion.ref';
import { Multiplicacionelement } from '../components/multiplicacionelement/multiplicacion.element';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    Multiplicacionref,
    Multiplicacionelement
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
