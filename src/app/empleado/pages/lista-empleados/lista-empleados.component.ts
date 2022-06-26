import { Component, OnInit } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { EmpleadoService } from './../../services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  // empleados$: Observable<any> = of();

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    // this.empleados$ = this.empleadoService.getAll();
  }
}
