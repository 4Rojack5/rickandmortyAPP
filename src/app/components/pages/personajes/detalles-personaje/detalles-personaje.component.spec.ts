import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonajeComponent } from './detalles-personaje.component';

describe('DetallesPersonajeComponent', () => {
  let component: DetallesPersonajeComponent;
  let fixture: ComponentFixture<DetallesPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
