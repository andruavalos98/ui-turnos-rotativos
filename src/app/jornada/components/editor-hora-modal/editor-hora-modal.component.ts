import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jornada } from './../../models/jornada';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JornadaService } from './../../services/jornada.service';
import { TimeFormatter } from './../../../shared/providers/time-formatter';

@Component({
  selector: 'app-editor-hora-modal',
  templateUrl: './editor-hora-modal.component.html',
  styleUrls: ['./editor-hora-modal.component.css'],
})
export class EditorHoraModalComponent implements OnInit {
  modificarJornadaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditorHoraModalComponent>,
    @Inject(MAT_DIALOG_DATA) public jornada: Jornada,
    private formBuilder: FormBuilder,
    private jornadaService: JornadaService
  ) {}

  ngOnInit(): void {
    // Construyo el formulario
    this.modificarJornadaForm = this.formBuilder.group({
      horaEntrada: [this.jornada.horaEntrada, [Validators.required]],
      horaSalida: [this.jornada.horaSalida, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  isFormValid(): boolean {
    // Obtengo la hora de entrada y la de salida como numeros
    const horaEntrada = +this.jornada.horaEntrada.toString().split(':')[0];
    const horaSalida = +this.jornada.horaSalida.toString().split(':')[0];

    // El formulario será valido si los dos campos están llenos
    // y la hora de entrada es menor o igual a la hora de salida
    return this.modificarJornadaForm.valid && horaEntrada <= horaSalida;
  }

  onSubmit(): void {
    // Si el formulario es invalido, no pasa nada
    if (!this.isFormValid()) {
      return;
    }

    // Formatteo las horas cambiadas
    this.jornada.horaEntrada = TimeFormatter.formatTime(
      this.jornada.horaEntrada.toString()
    );
    this.jornada.horaSalida = TimeFormatter.formatTime(
      this.jornada.horaSalida.toString()
    );

    // Realizo la petición y cierro el modal
    this.jornadaService.update(this.jornada).subscribe({
      next: () => this.dialogRef.close(true),
    });
  }
}
