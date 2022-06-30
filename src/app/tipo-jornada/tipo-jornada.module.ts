import { NgModule } from '@angular/core';
import { ListaTipoJornadaComponent } from './pages/lista-tipo-jornada/lista-tipo-jornada.component';
import { EditorTipoJornadaComponent } from './pages/editor-tipo-jornada/editor-tipo-jornada.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [ListaTipoJornadaComponent, EditorTipoJornadaComponent],
  imports: [SharedModule],
})
export class TipoJornadaModule {}
