import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJornadasComponent } from './pages/lista-jornadas/lista-jornadas.component';
import { EditorJornadaComponent } from './pages/editor-jornada/editor-jornada.component';
import { DetalleJornadaComponent } from './pages/detalle-jornada/detalle-jornada.component';



@NgModule({
  declarations: [
    ListaJornadasComponent,
    EditorJornadaComponent,
    DetalleJornadaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JornadaModule { }
