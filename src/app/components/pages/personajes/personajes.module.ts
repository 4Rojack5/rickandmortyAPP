import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { ListaPersonajeComponent } from '@personajes/lista-personaje/lista-personaje.component';
import { DetallesPersonajeComponent } from '@personajes/detalles-personaje/detalles-personaje.component';

import { RouterModule } from '@angular/router';

const myComponents = [ 
  DetallesPersonajeComponent, 
  ListaPersonajeComponent 
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
