import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ubicacion } from '@app/shared/interfaces/ubicacion.interface';
import { UbicacionService } from '@app/shared/services/ubicacion.service';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent implements OnInit {

    //Consulta
    ubicaciones: Observable<Ubicacion> | undefined;

  constructor(private route:ActivatedRoute,
              private ubicacionSvc:UbicacionService,
              private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id = params['id'];
      //traer detalles para recoger detalles mediante el id
      this.ubicaciones = this.ubicacionSvc.traerUbicacion(id);
      console.log(id)
      })
  }
            
  volver(): void{
    this.location.back();
    //window.history.back();
  }

}
