import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEmpleadoComponent } from './editor-empleado.component';

describe('EditorEmpleadoComponent', () => {
  let component: EditorEmpleadoComponent;
  let fixture: ComponentFixture<EditorEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
