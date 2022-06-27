// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EditorEmpleadoComponent } from './empleado/pages/editor-empleado/editor-empleado.component';
import { EditorJornadaComponent } from './jornada/pages/editor-jornada/editor-jornada.component';
import { EditorTipoJornadaComponent } from './tipo-jornada/pages/editor-tipo-jornada/editor-tipo-jornada.component';
import { DetalleJornadaComponent } from './jornada/pages/detalle-jornada/detalle-jornada.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListaEmpleadosComponent } from './empleado/pages/lista-empleados/lista-empleados.component';
import { ListaTipoJornadaComponent } from './tipo-jornada/pages/lista-tipo-jornada/lista-tipo-jornada.component';
import { ListaJornadasComponent } from './jornada/pages/lista-jornadas/lista-jornadas.component';

const routes: Routes = [
  // landing page
  { path: '', component: LandingComponent },

  // empleados
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/crear', component: EditorEmpleadoComponent },

  // tipo de jornada
  { path: 'jornadas/tipos', component: ListaTipoJornadaComponent },
  { path: 'jornadas/tipos/crear', component: EditorTipoJornadaComponent },

  // jornadas
  { path: 'jornadas', component: ListaJornadasComponent },
  { path: 'jornadas/crear', component: EditorJornadaComponent },
  { path: 'jornadas/:id', component: DetalleJornadaComponent },

  // ruta por defecto
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
