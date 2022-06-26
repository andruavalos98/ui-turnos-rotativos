import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJornadaComponent } from './detalle-jornada.component';

describe('DetalleJornadaComponent', () => {
  let component: DetalleJornadaComponent;
  let fixture: ComponentFixture<DetalleJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
