import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './localStorage.service';

import { environment } from 'src/environments/environment';
import { Personaje } from '@shared/interfaces/personaje.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
/*Se crea el servicio personaje.service.*/
export class PersonajeService {

  private personajesSubject = new BehaviorSubject<Personaje[]>(null!);
  personajes$ = this.personajesSubject.asObservable();

  constructor(private http: HttpClient,
              private localStorageSvc: LocalStorageService) {}
  
  /*Se crea el metodo buscarPersonaje para traer los datos de la API de characters.*/
  buscarPersonajes(query = '', page = 1){
    /*Se crea una constante llamada filter para resumir codigo, ademas de que se aplica un filtro de paginación.*/
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`
    /*Aqui retorna la información a la interface creada llamada personaje.interface.ts.*/
    return this.http.get<Personaje[]>(filter);
  }
  /*Se crea el metodo traerDetalles para poder traer la información por id a la vista de personaje especifico */
  traerDetalles(id:number){
    /*Trae la información por id*/
    return this.http.get<Personaje>(`${environment.baseUrlAPI}/${id}`)
  }

  parsePersonajesData(personajes: Personaje[]):void{
    const currentFavs = this.localStorageSvc.get();
    const newData = personajes.map(personaje =>{
      const found = !!currentFavs.find((fav: Personaje) => fav.id == personaje.id);
      return {...personaje, isFavorite: found}
    });
    this.personajesSubject.next(newData);
  }
}
