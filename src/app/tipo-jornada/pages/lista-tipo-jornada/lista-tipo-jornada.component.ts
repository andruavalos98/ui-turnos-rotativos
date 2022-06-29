import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoJornadaService } from './../../services/tipo-jornada.service';

@Component({
  selector: 'app-lista-tipo-jornada',
  templateUrl: './lista-tipo-jornada.component.html',
  styleUrls: ['./lista-tipo-jornada.component.css'],
})
export class ListaTipoJornadaComponent implements OnInit {
  arrayHeaders = ['#', 'Nombre'];

  tipoJornadas$: Observable<any>;

  constructor(private tipoJornadaService: TipoJornadaService) {}

  ngOnInit(): void {
    this.tipoJornadas$ = this.tipoJornadaService.getAll();
  }
}
