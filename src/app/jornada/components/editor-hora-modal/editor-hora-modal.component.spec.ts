import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHoraModalComponent } from './editor-hora-modal.component';

describe('EditorHoraModalComponent', () => {
  let component: EditorHoraModalComponent;
  let fixture: ComponentFixture<EditorHoraModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorHoraModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorHoraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
