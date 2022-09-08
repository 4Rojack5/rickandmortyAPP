import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'lista-personaje', 
    loadChildren: () => import('./components/pages/personajes/lista-personaje/lista-personaje.module').then(m => m.ListaPersonajeModule) 
  },
  { 
    path: 'detalles-personaje/:id', 
    loadChildren: () => import('./components/pages/personajes/detalles-personaje/detalles-personaje.module').then(m => m.DetallesPersonajeModule) 
  },
  { 
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
