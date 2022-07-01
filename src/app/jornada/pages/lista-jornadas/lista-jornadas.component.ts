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
import { MatDialog } from '@angular/material/dialog';
import { EditorHoraModalComponent } from '../../components/editor-hora-modal/editor-hora-modal.component';
import { TimeFormatter } from './../../../shared/providers/time-formatter';
import { DeleteModalComponent } from './../../components/delete-modal/delete-modal.component';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';

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
    private formBuilder: FormBuilder,
    public dialog: MatDialog
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
  }

  onSubmit() {
    const { empleado, tipoJornada, fecha, horaEntrada, horaSalida } =
      this.editorJornadaForm.controls;

    const nuevaJornada: Jornada = {
      empleado: empleado.value,
      tipoDeJornadaLaboral: tipoJornada.value,
      fecha: DateFormatter.formatDate(fecha.value),
      horaEntrada: TimeFormatter.formatTime(horaEntrada.value),
      horaSalida: TimeFormatter.formatTime(horaSalida.value),
    };

    this.jornadaService.create(nuevaJornada).subscribe({
      next: () => {
        this.dialog.open(MessageModalComponent, {
          width: '250px',
          data: {
            title: 'Exito!',
            body: 'La operación fue exitosa!',
          },
        });

        this.jornadas$ = this.jornadaService.getAll();
      },
      error: (error) => {
        this.dialog.open(MessageModalComponent, {
          width: '250px',
          data: {
            title: 'Algo salió mal',
            body: error.error.error,
          },
        });
      },
    });
  }

  onEditarClick(jornada: Jornada): void {
    // Abro el modal para modificar el horario de la jornada y le paso la jornada tocada
    const dialogRef = this.dialog.open(EditorHoraModalComponent, {
      width: '250px',
      data: jornada,
    });

    // Si se hizo una modificación a la jornada, recargo la lista
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jornadas$ = this.jornadaService.getAll();
      }
    });
  }

  onEliminarClick(id: number = 0): void {
    // Abro el modal para modificar el horario de la jornada y le paso la jornada tocada
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
    });

    // Si se hizo una modificación a la jornada, recargo la lista
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jornadaService
          .delete(id)
          .subscribe(() => (this.jornadas$ = this.jornadaService.getAll()));
      }
    });
  }
}
