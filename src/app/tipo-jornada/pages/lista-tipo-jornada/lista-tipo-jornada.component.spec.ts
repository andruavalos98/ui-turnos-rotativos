import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoJornadaComponent } from './lista-tipo-jornada.component';

describe('ListaTipoJornadaComponent', () => {
  let component: ListaTipoJornadaComponent;
  let fixture: ComponentFixture<ListaTipoJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
