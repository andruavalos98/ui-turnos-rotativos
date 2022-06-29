import { Component, OnInit } from '@angular/core';
import { JornadaService } from './../../services/jornada.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css'],
})
export class ListaJornadasComponent implements OnInit {
  jornadas$: Observable<any>;

  constructor(private jornadaService: JornadaService) {}

  ngOnInit(): void {
    this.jornadas$ = this.jornadaService.getAll();
  }
}
