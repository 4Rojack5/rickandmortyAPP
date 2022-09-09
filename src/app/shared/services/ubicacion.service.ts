import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Ubicacion } from '@shared/interfaces/ubicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }

  buscarPersonajes(query = '', page = 1){
    const filter = `${environment.ubiUrlAPI}/?name=${query}&page{page}`
    return this.http.get<Ubicacion[]>(filter);
  }

  traerUbicacion(id:number){
    return this.http.get<Ubicacion>(`${environment.ubiUrlAPI}/${id}`)
  }
}
