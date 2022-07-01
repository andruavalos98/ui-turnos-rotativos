import { NgModule } from '@angular/core';
import { ListaJornadasComponent } from './pages/lista-jornadas/lista-jornadas.component';
import { EditorJornadaComponent } from './pages/editor-jornada/editor-jornada.component';
import { DetalleJornadaComponent } from './pages/detalle-jornada/detalle-jornada.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from './../shared/shared.module';
import { EditorHoraModalComponent } from './components/editor-hora-modal/editor-hora-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    ListaJornadasComponent,
    EditorJornadaComponent,
    DetalleJornadaComponent,
    EditorHoraModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    SharedModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
})
export class JornadaModule {}
