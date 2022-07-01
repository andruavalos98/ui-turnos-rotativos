import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoJornadaService } from './../../services/tipo-jornada.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoJornada } from '../../models/tipo-jornada';

@Component({
  selector: 'app-lista-tipo-jornada',
  templateUrl: './lista-tipo-jornada.component.html',
  styleUrls: ['./lista-tipo-jornada.component.css'],
})
export class ListaTipoJornadaComponent implements OnInit {
  arrayHeaders = ['#', 'Nombre'];

  tipoJornadas$: Observable<any>;

  editorTipoJornadaForm: FormGroup;

  constructor(
    private tipoJornadaService: TipoJornadaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Hago la petición para traer los datos del servidor
    this.tipoJornadas$ = this.tipoJornadaService.getAll();
    this.editorTipoJornadaForm = this.formBuilder.group({
      nombre: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.editorTipoJornadaForm.valid) {
      return;
    }
    // Guarda el nuevo tipo en una constante
    const nuevoTipo: TipoJornada = {
      nombre: this.editorTipoJornadaForm.get('nombre')?.value,
    };

    // Realiza la petición al servidor
    this.tipoJornadaService.create(nuevoTipo).subscribe({
      // Si tiene exito, actualizo la lista de empleados
      next: () => {
        this.tipoJornadas$ = this.tipoJornadaService.getAll();
      },
    });
  }

  displayCssFor(field: string | Array<string>) {
    return this.editorTipoJornadaForm.get(field)?.invalid &&
      (this.editorTipoJornadaForm.get(field)?.touched ||
        this.editorTipoJornadaForm.get(field)?.dirty)
      ? 'is-invalid'
      : '';
  }
}
