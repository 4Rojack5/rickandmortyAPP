import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonajeComponent } from './lista-personaje.component';

describe('ListaPersonajeComponent', () => {
  let component: ListaPersonajeComponent;
  let fixture: ComponentFixture<ListaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
