import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Ubicacion } from '@shared/interfaces/ubicacion.interface';

@Injectable({
  providedIn: 'root'
})
/*Se crea el servicio personaje.service.*/
export class UbicacionService {

  constructor(private http: HttpClient) { }
  /*Se crea el metodo buscarPersonajes para traer los datos de la API de locations.*/
  buscarPersonajes(query = '', page = 1){
    /*Se crea una constante llamada filter para resumir codigo, ademas de que se aplica un filtro de paginación.*/
    const filter = `${environment.ubiUrlAPI}/?name=${query}&page{page}`
    /*Aqui retorna la información a la interface creada llamada ubicacion.interface.ts.*/
    return this.http.get<Ubicacion[]>(filter);
  }
  /*Se crea el metodo traerUbicacion para poder traer la información por id a la vista de ubicación especifico */
  traerUbicacion(id:number){
    /*Trae la información por id*/
    return this.http.get<Ubicacion>(`${environment.ubiUrlAPI}/${id}`)
  }
}
