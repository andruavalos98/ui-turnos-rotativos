import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTipoJornadaComponent } from './pages/lista-tipo-jornada/lista-tipo-jornada.component';
import { EditorTipoJornadaComponent } from './pages/editor-tipo-jornada/editor-tipo-jornada.component';

@NgModule({
  declarations: [ListaTipoJornadaComponent, EditorTipoJornadaComponent],
  imports: [CommonModule],
})
export class TipoJornadaModule {}