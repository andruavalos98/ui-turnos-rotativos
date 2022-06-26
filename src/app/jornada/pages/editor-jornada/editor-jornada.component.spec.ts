import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJornadaComponent } from './editor-jornada.component';

describe('EditorJornadaComponent', () => {
  let component: EditorJornadaComponent;
  let fixture: ComponentFixture<EditorJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
