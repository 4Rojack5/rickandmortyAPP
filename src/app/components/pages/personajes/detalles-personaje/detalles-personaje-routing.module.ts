import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPersonajeComponent } from './detalles-personaje.component';

const routes: Routes = [{ path: '', component: DetallesPersonajeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPersonajeRoutingModule { }
