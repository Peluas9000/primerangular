import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsBidingComponent } from '../components/formsbidingcomponent/forms.biding.component';


@NgModule({
  declarations: [
    App, PrimerComponent,HooksComponent,DeportesComponent,FormsBidingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
