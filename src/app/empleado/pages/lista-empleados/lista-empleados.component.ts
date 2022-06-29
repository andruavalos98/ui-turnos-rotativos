import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  // Observable que contiene el array de empleados
  empleados$: Observable<any>;

  editorEmpleadoForm: FormGroup;

  // Inyecto el servicio
  constructor(
    private empleadoService: EmpleadoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Hago la petición para traer los datos del servidor
    this.empleados$ = this.empleadoService.getAll();
    this.editorEmpleadoForm = this.formBuilder.group({
      nombre: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.editorEmpleadoForm.valid) {
      return;
    }
    // Guarda el nuevo empleado en una constante
    const nuevoEmpleado: Empleado = {
      nombre: this.editorEmpleadoForm.get('nombre')?.value,
    };

    // Realiza la petición al servidor
    this.empleadoService.create(nuevoEmpleado).subscribe({
      // Si tiene exito, actualizo la lista de empleados
      next: () => {
        this.empleados$ = this.empleadoService.getAll();
      },
      error: (error) => console.error(error),
    });
  }

  displayCssFor(field: string | Array<string>) {
    return this.editorEmpleadoForm.get(field)?.invalid &&
      (this.editorEmpleadoForm.get(field)?.touched ||
        this.editorEmpleadoForm.get(field)?.dirty)
      ? 'is-invalid'
      : '';
  }
}
