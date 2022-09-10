import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  /*Se crea un metodo para buscar el personaje requerido.*/
  onSearch(value: string){
    if(value && value.length > 3){
      /*Se evaula con if el valor escrito y despues se presenta en el componente lista-personaje.*/
      this.router.navigate(['/lista-personaje'], {
        queryParams: { q: value },
      });
    }
  }

}
