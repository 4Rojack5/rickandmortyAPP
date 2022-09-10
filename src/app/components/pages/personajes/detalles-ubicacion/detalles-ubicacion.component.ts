import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

import { Ubicacion } from '@app/shared/interfaces/ubicacion.interface';
import { UbicacionService } from '@app/shared/services/ubicacion.service';

@Component({
  selector: 'app-detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent implements OnInit {

  /*Consulta con un Observable a la interface Ubicacion*/
  ubicaciones: Observable<Ubicacion> | undefined;

  /*Importación en el constructor de activatedRoute, del servicio de Ubicacion, y location*/
  constructor(private route:ActivatedRoute,
              private ubicacionSvc:UbicacionService,
              private location:Location) { }

  /*Se agrega en el metodo ngOnInit los parametros para mostrar la ubicación seleccionado*/           
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id = params['id'];
      /*metodo traerDetalles del servicio ubicacion para recogerlos mediante el id*/
      this.ubicaciones = this.ubicacionSvc.traerUbicacion(id);
      console.log(id)
      })
  }
  
  /*Metodo para volver a la pag anterior.*/
  volver(): void{
    this.location.back();
    //window.history.back();
  }

}
