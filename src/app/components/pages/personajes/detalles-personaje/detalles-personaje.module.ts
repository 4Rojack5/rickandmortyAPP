import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesPersonajeRoutingModule } from './detalles-personaje-routing.module';
import { DetallesPersonajeComponent } from './detalles-personaje.component';


@NgModule({
  declarations: [
    DetallesPersonajeComponent
  ],
  imports: [
    CommonModule,
    DetallesPersonajeRoutingModule
  ]
})
export class DetallesPersonajeModule { }
