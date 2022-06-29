import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { EditorEmpleadoComponent } from './pages/editor-empleado/editor-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaEmpleadosComponent, EditorEmpleadoComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class EmpleadoModule {}
