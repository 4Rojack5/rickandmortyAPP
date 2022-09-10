import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { ListaPersonajeComponent } from '@personajes/lista-personaje/lista-personaje.component';
import { DetallesPersonajeComponent } from '@personajes/detalles-personaje/detalles-personaje.component';

import { RouterModule } from '@angular/router';
import { DetallesUbicacionComponent } from './detalles-ubicacion/detalles-ubicacion.component';

/*Se crea una constante llamada mycomponents para resumir en declarations y exports los componentes.*/
const myComponents = [
  /*Se agregan los tres componentes creados.*/ 
  DetallesPersonajeComponent, 
  ListaPersonajeComponent,
  DetallesUbicacionComponent 
];

@NgModule({
  declarations: [
    ...myComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    ...myComponents
  ],
})
export class PersonajesModule { }
