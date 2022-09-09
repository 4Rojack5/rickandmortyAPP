import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesUbicacionComponent } from './detalles-ubicacion.component';

const routes: Routes = [{ path: '', component: DetallesUbicacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesUbicacionRoutingModule { }
