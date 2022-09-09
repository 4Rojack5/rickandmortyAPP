import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';
import { Personaje } from '@shared/interfaces/personaje.interface';

const MIS_FAVORITOS = 'misFavoritos';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    constructor(private http: HttpClient){
        this.initialStorage();
     }

traerFavoritos(id:number): any {
    try{
        /*const personajes = JSON.parse(localStorage.getItem(MIS_FAVORITOS))*/
        return this.initialStorage();
    } catch (error){
        console.log('Error al enviar favoritos', error);
    }
}

private initialStorage():void {
        localStorage.setItem(MIS_FAVORITOS, JSON.stringify([]));
    }
}