// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EditorEmpleadoComponent } from './empleado/pages/editor-empleado/editor-empleado.component';
import { ListaEmpleadosComponent } from './empleado/pages/lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/crear', component: EditorEmpleadoComponent },
  // ruta por defecto
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
