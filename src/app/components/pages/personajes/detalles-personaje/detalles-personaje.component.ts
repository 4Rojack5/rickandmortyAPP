import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '@app/shared/interfaces/personaje.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';
import { observable, Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
  styleUrls: ['./detalles-personaje.component.css']
})
export class DetallesPersonajeComponent implements OnInit {

  //Consulta
  personajes: Observable<Personaje> | undefined;

  constructor(private route:ActivatedRoute, 
              private personajeSvc:PersonajeService, 
              private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id = params['id'];
      //get details para recoger detalles mediante el id
      this.personajes = this.personajeSvc.traerDetalles(id);
      console.log(id)
    })
  }

  volver(): void{
    this.location.back();
    //window.history.back();
  }

}
