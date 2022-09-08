import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajeComponent } from './lista-personaje.component';

const routes: Routes = [{ path: '', component: ListaPersonajeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPersonajeRoutingModule { }
