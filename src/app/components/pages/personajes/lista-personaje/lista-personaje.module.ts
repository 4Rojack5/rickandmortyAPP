import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPersonajeRoutingModule } from './lista-personaje-routing.module';
import { ListaPersonajeComponent } from './lista-personaje.component';


@NgModule({
  declarations: [
    ListaPersonajeComponent
  ],
  imports: [
    CommonModule,
    ListaPersonajeRoutingModule
  ]
})
export class ListaPersonajeModule { }
