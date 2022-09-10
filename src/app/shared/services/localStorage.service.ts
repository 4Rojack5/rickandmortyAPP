import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Personaje } from "../interfaces/personaje.interface";

const LIST_FAV = 'favoritosList';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    private personajesFavSubject = new BehaviorSubject<Personaje[] | null>(null);
    personajeFav$ = this.personajesFavSubject.asObservable();
    

    constructor(){
        this.initialStorage();
        console.log(this.personajeFav$);
     }

addOrRemove(personaje: Personaje):void{
    //Traemos el id del personaje.
    const {id} = personaje;
    //Recuperamos los Personajes Favoritos que se guardaron en el metodo get().
    const currentsFav = this.get();
    //Metodo find de JS que busca el primer elemento que cumpla con una condición. !! es un cast a boolean: True, False
    const found = !!currentsFav.find((fav: Personaje)=> fav.id == id);
    found ? this.remove(id) : this.add(personaje);
}

private add(personaje: Personaje):void{
    try {
        /*Traemos el id del personaje.*/
        const currentsFav = this.get();
        /*Recuperamos los Personajes Favoritos que se guardaron en el metodo get().*/
        localStorage.setItem(LIST_FAV, JSON.stringify([personaje]));
        /*Actualizamos el Observarble.*/
        this.personajesFavSubject.next([... currentsFav,personaje]);
    } catch (error) {
        console.log('Error al guardar en localStorage', error);
        alert('error');
    }
}

private remove(id: number):void{
    try {
        const currentsFav = this.get();
        const personajes = currentsFav.filter((item: { id: number; }) => item.id !== id);
        localStorage.setItem(LIST_FAV, JSON.stringify([... personajes]));
        this.personajesFavSubject.next([... personajes]);
    } catch (error) {
        console.log('Error al eliminar en localStorage', error);
        alert('error');
    }
}

get():any{
    try{
        const personajesFav = JSON.parse(localStorage.getItem(LIST_FAV) || '{}');
        this.personajesFavSubject.next(personajesFav);
        return personajesFav;
    } catch (error){
        console.log(error);
    }
}

clear():void{
try{
    localStorage.clear();
}catch(error){
    console.log(error);
}
}

private initialStorage():void {
        localStorage.setItem(LIST_FAV, JSON.stringify([]));
        this.get();
    }
    
}