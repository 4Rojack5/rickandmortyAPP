import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUbicacionComponent } from './detalles-ubicacion.component';

describe('DetallesUbicacionComponent', () => {
  let component: DetallesUbicacionComponent;
  let fixture: ComponentFixture<DetallesUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesUbicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
