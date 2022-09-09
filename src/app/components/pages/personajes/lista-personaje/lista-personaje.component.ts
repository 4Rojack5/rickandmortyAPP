import { Component, inject, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

import { Personaje } from '@app/shared/interfaces/personaje.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';



@Component({
  selector: 'app-lista-personaje',
  templateUrl: './lista-personaje.component.html',
  styleUrls: ['./lista-personaje.component.css']
})
export class ListaPersonajeComponent implements OnInit {

  personajes: Personaje[] = [];
  next: string | undefined;
  /*info: RequestInfo = {
    next: null,
  };*/

  private query: string | undefined;
  private pageNum = 1;

  mostrarBotonArriba = false;
  private esconderScroll = 200;
  private mostrarScroll = 500;

  constructor(@Inject(DOCUMENT) private document:Document,
              private personajeSvc: PersonajeService,
              private route:ActivatedRoute,
              private router: Router) 
  { 
    this.urlCambiante();
  }

  ngOnInit(): void {
    this.personajesBuscador();
  }

  //Decorador para escuchar un evento
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const y0ffSet = window.pageXOffset;
    if((y0ffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.mostrarScroll ){
      this.mostrarBotonArriba = true;
    }else if (this.mostrarBotonArriba && (y0ffSet ||this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.esconderScroll){
      this.mostrarBotonArriba = false;
    }
  }

  scrollAbajo():void{
    if(this.next){
      this.pageNum++;
      this.getData();
    }
  }
  scrollArriba():void{
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0; // Otros navegadores
  }

  private urlCambiante(): void{
    //ruta
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)).subscribe(
        ()=>{
          this.personajes=[];
          this.pageNum = 1;
          this.personajesBuscador();
        });
  }

  private personajesBuscador(): void{
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap | any) => {
        //Recuperar los parametros.
        this.query = params['q'];
        this.getData();
      });
  }

  //Void para no devolver nada
  private getData ():void{
    // pipe para recuperar el primer envio de datos del observable
    this.personajeSvc.buscarPersonajes(this.query, this.pageNum)
    .pipe(take(1)).subscribe((res:any)=>{
      if(res?.results?.length){
        console.log("Resultados", res);
        const {next, results} = res;
        this.personajes = [... this.personajes, ...results];
        this.next = next;
      }else{
        this.personajes = [];
      }

    })
  }

}
