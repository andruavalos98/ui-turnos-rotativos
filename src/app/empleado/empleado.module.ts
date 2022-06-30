import { NgModule } from '@angular/core';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { EditorEmpleadoComponent } from './pages/editor-empleado/editor-empleado.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [ListaEmpleadosComponent, EditorEmpleadoComponent],
  imports: [SharedModule],
})

export class EmpleadoModule {}
