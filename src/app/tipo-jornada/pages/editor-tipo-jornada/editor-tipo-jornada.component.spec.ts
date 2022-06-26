import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTipoJornadaComponent } from './editor-tipo-jornada.component';

describe('EditorTipoJornadaComponent', () => {
  let component: EditorTipoJornadaComponent;
  let fixture: ComponentFixture<EditorTipoJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorTipoJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorTipoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
