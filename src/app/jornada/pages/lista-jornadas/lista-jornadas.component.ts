import { Component, OnInit } from '@angular/core';
import { JornadaService } from './../../services/jornada.service';
import { Observable } from 'rxjs';
import { TipoJornada } from './../../../tipo-jornada/models/tipo-jornada';
import { Jornada } from './../../models/jornada';
import { TipoJornadaService } from './../../../tipo-jornada/services/tipo-jornada.service';
import { EmpleadoService } from './../../../empleado/services/empleado.service';
import { Empleado } from './../../../empleado/models/empleado';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateFormatter } from './../../../shared/providers/date-formatter';

@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css'],
})
export class ListaJornadasComponent implements OnInit {
  jornadas$: Observable<Jornada[]>;
  tipoJornadas$: Observable<TipoJornada[]>;
  empleados$: Observable<Empleado[]>;

  editorJornadaForm: FormGroup;

  constructor(
    private jornadaService: JornadaService,
    private tipoJornadaService: TipoJornadaService,
    private empleadoService: EmpleadoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Creo el formGroup para mi formulario
    this.editorJornadaForm = this.formBuilder.group({
      empleado: [null, [Validators.required]],
      tipoJornada: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
      horaEntrada: [null, [Validators.required]],
      horaSalida: [null, [Validators.required]],
    });

    // Obtengo los valores del server
    this.jornadas$ = this.jornadaService.getAll();
    this.tipoJornadas$ = this.tipoJornadaService.getAll();
    this.empleados$ = this.empleadoService.getAllEntity();
  }

  onSelectionChange(selection: any, control: string): void {
    // Asigno el valor seleccionado a su correspondiente form control
    this.editorJornadaForm.controls[control]?.setValue(selection.value);
    console.log(this.editorJornadaForm.controls['fecha']?.value);
  }

  onSubmit() {
    console.log(this.editorJornadaForm.controls);

    const { empleado, tipoJornada, fecha, horaEntrada, horaSalida } =
      this.editorJornadaForm.controls;

    const nuevaJornada: Jornada = {
      empleado: empleado.value,
      tipoDeJornadaLaboral: tipoJornada.value,
      fecha: DateFormatter.formatDate(fecha.value),
      horaEntrada: horaEntrada.value + ':00',
      horaSalida: horaSalida.value + ':00',
    };

    this.jornadaService
      .create(nuevaJornada)
      .subscribe((response) => console.log(response));
  }

  onDateChange(nuevaFecha: any) {
    console.log(nuevaFecha);
    console.log(this.editorJornadaForm.controls['fecha']?.value);
  }
}
