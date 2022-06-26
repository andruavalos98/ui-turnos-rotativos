// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EditorEmpleadoComponent } from './empleado/pages/editor-empleado/editor-empleado.component';
import { EditorTipoJornadaComponent } from './tipo-jornada/pages/editor-tipo-jornada/editor-tipo-jornada.component';
import { ListaEmpleadosComponent } from './empleado/pages/lista-empleados/lista-empleados.component';
import { ListaTipoJornadaComponent } from './tipo-jornada/pages/lista-tipo-jornada/lista-tipo-jornada.component';

const routes: Routes = [
  // empleados
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/crear', component: EditorEmpleadoComponent },

  // tipo de jornada
  { path: 'jornada/tipos', component: ListaTipoJornadaComponent },
  { path: 'jornada/tipos/crear', component: EditorTipoJornadaComponent },

  // jornadas

  // ruta por defecto
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
