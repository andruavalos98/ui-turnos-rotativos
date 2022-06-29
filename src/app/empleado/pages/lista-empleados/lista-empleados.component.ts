import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  // Observable que contiene el array de empleados
  empleados$: Observable<any>;

  // Inyecto el servicio
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    // Hago la petición para traer los datos del servidor
    this.empleados$ = this.empleadoService.getAll();
  }
}
