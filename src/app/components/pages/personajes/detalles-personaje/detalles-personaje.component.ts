import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

import { Personaje } from '@app/shared/interfaces/personaje.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
  styleUrls: ['./detalles-personaje.component.css']
})
export class DetallesPersonajeComponent implements OnInit {

  /*Consulta con un Observable a la interface Personaje*/
  personajes: Observable<Personaje> | undefined;

  /*Importación en el constructor de activatedRoute, del servicio de Personaje, y location*/
  constructor(private route:ActivatedRoute, 
              private personajeSvc:PersonajeService, 
              private location:Location) { }

  /*Se agrega en el metodo ngOnInit los parametros para mostrar el personaje seleccionado*/
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id = params['id'];
      /*metodo traerDetalles del servicio personaje para recogerlos mediante el id*/
      this.personajes = this.personajeSvc.traerDetalles(id);
      console.log(id);
    })
  }

  /*Metodo para volver a la pag anterior.*/
  volver(): void{
    this.location.back();
    //window.history.back();
  }

  /*Se importa la interface de personaje.*/
  @Input() personaje: Personaje | undefined;

  /*metodo para traer iconos de favoritos.*/
  getIcon(): string {
    return this.personaje?.isFavorite ? 'favorito_active.png' : 'favorito.png';
  }

  /*metodo añadir a favorito un personaje.*/
  favorito(): void{
    let isFavorite = this.personaje?.isFavorite;
    this.getIcon();
    isFavorite = !isFavorite;
  }

}
