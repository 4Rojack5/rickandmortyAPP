import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

import { Personaje } from '@app/shared/interfaces/personaje.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-lista-personaje',
  templateUrl: './lista-personaje.component.html',
  styleUrls: ['./lista-personaje.component.css']
})
export class ListaPersonajeComponent implements OnInit {

  /*Se trae los interfaces de Personaje a Personajes*/
  personajes: Personaje[] = [];
  next: string | undefined;

  /*Se crea una propiedad llamada query*/
  private query: string | undefined;
  /*Se crea una propiedad llamada pageNum*/
  private pageNum = 1;

  /*Se crean propiedades para el metodo onWindowScroll()*/
  mostrarBotonArriba = false;
  private esconderScroll = 200;
  private mostrarScroll = 500;

  @Input()
  personaje!: Personaje;
  /*Importación en el constructor de DOCUMENT, del servicio de personaje, activatedRoute, del servicio de Ubicacion y router.*/
  constructor(@Inject(DOCUMENT) private document:Document,
              private personajeSvc: PersonajeService,
              private route:ActivatedRoute,
              private router: Router,
              private localStorage: LocalStorageService) 
  { 
    /*Se añade el metodo de urlCambiante() para que una vez al accionar el buscador de nuevo, busque otro personaje.*/
    this.urlCambiante();
  }

  ngOnInit(): void {
    /*Se añade el metodo de personajesBuscador() para que busque un personaje.*/
    this.personajesBuscador();
  }

  /*Decorador para escuchar el evento del botón cuando se baja la lista de personajes. Ahí se activa el metodo del botón para volver a subir*/
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const y0ffSet = window.pageXOffset;
    if((y0ffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.mostrarScroll ){
      this.mostrarBotonArriba = true;
    }else if (this.mostrarBotonArriba && (y0ffSet ||this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.esconderScroll){
      this.mostrarBotonArriba = false;
    }
  }

  /*se añade el metodo scrollAbajo para que muestre todos los personajes de la API en un infinite Scroll*/
  scrollAbajo():void{
    if(this.pageNum){
      this.pageNum++;
      this.getData();
    }
  }

  /*se añade el metodo scrollArriba para que botón lleve al tope de la pagina.*/
  scrollArriba():void{
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0; // Otros navegadores
  }

  /*se añade el metodo privado urlCambiante() para que una vez al accionar el buscador de nuevo, busque otro personaje.*/
  private urlCambiante(): void{
    /*Se añade la ruta*/
    this.router.events.pipe(
      /*Se crea el evento*/
      filter((event)=> event instanceof NavigationEnd)).subscribe(
        ()=>{
          this.personajes=[];
          this.pageNum = 1;
          this.personajesBuscador();
        });
  }
 /*se añade el metodo privado personajesBuscador() para que busque un personaje.*/
  private personajesBuscador(): void{
    /*se crea un parametro con paramMap*/
    /*pipe para recuperar el primer envio de datos del observable*/
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap | any) => {
        /*Recuperar los parametros escritos.*/
        this.query = params['q'];
        this.getData();
      });
  }

  /*se añade el metodo privado getData() para traer los datos del servicio Personaje.*/
  /*Void para no devolver nada*/
  private getData():void{
    /*pipe para recuperar el primer envio de datos del observable*/
    this.personajeSvc.buscarPersonajes(this.query, this.pageNum)
    .pipe(take(1)).subscribe((res:any)=>{
      /*Se hace una validación para comprobar que los resultados si se estan recuperando.*/
      if(res?.results?.length){
        console.log("Resultados", res);
        const {next, results} = res;
        /*Aqui se recuperan los datos en un this.personajes.*/
        this.personajes = [... this.personajes, ...results];
        this.next = next;
      }else{
        this.personajes = [];
      }

    })
  }



  getIcon(): string {
    return this.personaje?.isFavorite ? 'favorito_active.png' : 'favorito.png';
  }

  favorito(): void{
    const isFavorite = this.personaje?.isFavorite;
    this.getIcon();
    this.personaje.isFavorite = !isFavorite;
    this.localStorage.addOrRemove(this.personaje);
  }

}
